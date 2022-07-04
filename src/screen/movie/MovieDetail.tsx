import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/layout";
import { gql, useQuery } from "@apollo/client";
import { MOVIE_DETAIL_FRAGMENT } from "../../fragment";
import { Button, ImageUrl, Main, playVideo } from "../../components/Shared";
import { MovieDetail } from "../../interface/movie_interface";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Cast from "../../components/Cast";
import BigTitle from "../../components/BigTitle";
import MovieRecommend from "../../components/Recommend";
import { Video } from "../../interface/shared";

const MOVIE_DETAIL = gql`
  ${MOVIE_DETAIL_FRAGMENT}
  query movieDetail($id: Int!) {
    movieDetail(id: $id) {
      ...movieDetail
      genres {
        name
      }
    }
  }
`;

const MOVIE_VIDEO = gql`
  query movieVideo($id: Int!) {
    movieVideo(id: $id) {
      results {
        name
        key
      }
    }
  }
`;

const MovieContainer = styled.div<{ poster?: string }>`
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

const MovieLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;

const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 50%;
  z-index: 1;
  padding: 0 ${(props) => props.theme.gap.small};
`;

const MovieTitleBox = styled.div`
  padding-bottom: ${(props) => props.theme.gap.big};
`;

const MovieTitle = styled.span`
  font-size: ${(props) => props.theme.fontSize.big};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  @media screen and (max-width: 768px) {
  }
`;
const MovieInfoBox = styled.div`
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
const MovieVoteBox = styled.div`
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

const VideoBox = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  background-color: black;
  z-index: 10;
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;

const VideoOverlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: ${(props) => props.theme.gap.medium};
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const VideoPlay = styled.iframe`
  width: 100%;
  height: 100%;
  overflow: hidden;
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

interface MovieDetailProps {
  movieDetail?: MovieDetail;
}

interface MovieVideoQuery {
  movieVideo: Video;
}

const AboutMovie: React.FC = () => {
  const { id } = useParams();
  const { data, loading } = useQuery<MovieDetailProps>(MOVIE_DETAIL, {
    variables: {
      id: id && +id,
    },
  });
  const { data: movieVideo } = useQuery<MovieVideoQuery>(MOVIE_VIDEO, {
    variables: {
      id: id && +id,
    },
  });

  const [showing, setShowing] = useState(false);

  return (
    <Layout title="About">
      {loading ? (
        "Loading"
      ) : (
        <>
          <MovieContainer
            poster={ImageUrl(
              data?.movieDetail?.backdrop_path
                ? data?.movieDetail?.backdrop_path
                : ""
            )}
          >
            <MovieLayer onClick={() => setShowing(false)}>
              <AnimatePresence>
                {showing && (
                  <VideoOverlay
                    layoutId={id}
                    variants={VideoVar}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <VideoBox>
                      {movieVideo?.movieVideo ? (
                        <VideoPlay
                          width="100%"
                          height="100%"
                          src={playVideo(movieVideo?.movieVideo.results[0].key)}
                          title={movieVideo?.movieVideo.results[0].name}
                        ></VideoPlay>
                      ) : (
                        <span>sorry... there is not video</span>
                      )}
                    </VideoBox>
                  </VideoOverlay>
                )}
              </AnimatePresence>
            </MovieLayer>

            <MovieInfoContainer>
              <MovieTitleBox>
                <MovieTitle>{data?.movieDetail?.title}</MovieTitle>
              </MovieTitleBox>
              <MovieInfoBox>
                <MovieVoteBox>
                  <VoteIcon viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </VoteIcon>
                  <VoteSpan>{data?.movieDetail?.vote_average}</VoteSpan>
                </MovieVoteBox>
                <MovieDate>{data?.movieDetail?.release_date}</MovieDate>
                <MovieGenres>{data?.movieDetail?.genres[0].name}</MovieGenres>
              </MovieInfoBox>
              <MovieDescription>
                {`${data?.movieDetail?.overview.slice(0, 120)} ...`}
              </MovieDescription>
            </MovieInfoContainer>

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
          </MovieContainer>

          {/* cast */}
          <CastContainer>
            <BigTitle title="Cast" />
            <Cast id={id} />
          </CastContainer>

          {/* recommend */}
          <RecommendContainer>
            <BigTitle title="More Like This" />
            <MovieRecommend id={id} />
          </RecommendContainer>
        </>
      )}
    </Layout>
  );
};

export default AboutMovie;
