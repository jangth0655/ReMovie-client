import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Layout from "../../components/layout";
import { Button, ImageUrl, Main } from "../../components/Shared";
import { gql, useQuery } from "@apollo/client";
import { TV_DETAIL_FRAGMENT } from "../../fragment";
import { useParams } from "react-router-dom";
import { TVDetail } from "../../interface/TV_interface";
import { Video } from "../../interface/shared";
import VideoComponent from "../../components/Video";
import BigTitle from "../../components/BigTitle";
import Cast from "../../components/Cast";
import MovieRecommend from "../../components/Recommend";

const TV_DETAIL = gql`
  ${TV_DETAIL_FRAGMENT}
  query TVDetails($id: Int!) {
    TVDetails(id: $id) {
      ...TVDetailFragment
      genres {
        name
      }
    }
  }
`;

const TV_VIDEO = gql`
  query TvVideo($id: Int!) {
    TvVideo(id: $id) {
      results {
        name
        key
      }
    }
  }
`;

const TVContainer = styled.div<{ poster?: string }>`
  background-color: ${(props) => props.theme.color.bgColor.main};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background-image: url(${(props) => props.poster});
  background-size: cover;
  background-position: center center;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: ${(props) => props.theme.gap.superBig};
  @media screen and (max-width: 425px) {
    height: 100vh;
  }
`;

const TVLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;

const TVInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 50%;
  z-index: 1;
  padding: 0 ${(props) => props.theme.gap.small};
`;

const TVTitleBox = styled.div`
  padding-bottom: ${(props) => props.theme.gap.big};
`;

const TVTitle = styled.span`
  font-size: ${(props) => props.theme.fontSize.big};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  @media screen and (max-width: 768px) {
  }
`;
const TVInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.text.medium};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${(props) => props.theme.gap.micro};
  }
`;
const TVVoteBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.gap.micro};
  @media screen and (max-width: 425px) {
  }
`;
const VoteSpan = styled.span`
  margin-left: ${(props) => props.theme.gap.micro};
`;
const VoteIcon = styled.svg`
  width: 1rem;
  height: 1rem;
  color: yellow;
`;
const MovieDate = styled.span``;
const MovieGenres = styled.span``;

const MovieDescription = styled.p`
  line-height: 1.5;
  font-size: ${(props) => props.theme.fontSize.small};
  @media screen and (max-width: 768px) {
  }
`;

const MovieTrailer = styled(motion.div)`
  position: absolute;
  right: ${(props) => props.theme.gap.small};
  bottom: 5rem;
  width: 20%;
`;

const TrailerOverLay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 50%;
  z-index: -10;
`;

const TrailerTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin-bottom: ${(props) => props.theme.gap.small};
`;

const TrailerPlay = styled(Button)`
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => props.theme.color.text.main};
  }
`;

const CastContainer = styled(Main)``;
const RecommendContainer = styled(Main)``;

const VideoVar: Variants = {
  initial: { backgroundColor: "rgba(0,0,0,0)" },
  animate: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  exit: { backgroundColor: "rgba(0,0,0,0)" },
};

interface TVDetailQuery {
  TVDetails: TVDetail;
}

interface TVvideoQuery {
  TvVideo: Video;
}

const AboutTV: React.FC = () => {
  const [showing, setShowing] = useState(false);
  const { id } = useParams();
  const {
    data: TVDetailData,
    loading: TVDetailLoaidng,
    error,
  } = useQuery<TVDetailQuery>(TV_DETAIL, {
    variables: {
      id: id && +id,
    },
  });

  const { data: TvVideoData, loading: TvVideoLoading } = useQuery<TVvideoQuery>(
    TV_VIDEO,
    {
      variables: {
        id: id && +id,
      },
    }
  );

  console.log(TvVideoData);

  return (
    <Layout title="About">
      {TVDetailLoaidng ? (
        "Loading"
      ) : (
        <>
          <TVContainer
            poster={ImageUrl(
              TVDetailData?.TVDetails.backdrop_path
                ? TVDetailData?.TVDetails.backdrop_path
                : ""
            )}
          >
            <TVLayer onClick={() => setShowing(false)}>
              <AnimatePresence>
                {showing && (
                  <VideoComponent
                    results={
                      TvVideoData?.TvVideo.results[0] ||
                      TvVideoData?.TvVideo.results[1]
                    }
                    id={id}
                  />
                )}
              </AnimatePresence>
            </TVLayer>

            <TVInfoContainer>
              <TVTitleBox>
                <TVTitle>{TVDetailData?.TVDetails.name}</TVTitle>
              </TVTitleBox>
              <TVInfoBox>
                <TVVoteBox>
                  <VoteIcon viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </VoteIcon>
                  <VoteSpan>{TVDetailData?.TVDetails.vote_average}</VoteSpan>
                </TVVoteBox>
                <MovieDate>{TVDetailData?.TVDetails.first_air_date}</MovieDate>
                <MovieGenres>
                  {TVDetailData?.TVDetails.genres[0].name}
                </MovieGenres>
              </TVInfoBox>
              <MovieDescription>
                {`${TVDetailData?.TVDetails?.overview?.slice(0, 120)} ...`}
              </MovieDescription>
            </TVInfoContainer>

            <MovieTrailer onClick={() => setShowing((prev) => !prev)}>
              <TrailerTitle>Trailer</TrailerTitle>
              <TrailerPlay>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </TrailerPlay>
            </MovieTrailer>
            <TrailerOverLay layoutId={id} />
          </TVContainer>

          {/*  <CastContainer>
            <BigTitle title="Cast" />
            <Cast id={id} />
          </CastContainer>

          <RecommendContainer>
            <BigTitle title="More Like This" />
            <MovieRecommend id={id} />
          </RecommendContainer> */}
        </>
      )}
    </Layout>
  );
};

export default AboutTV;
