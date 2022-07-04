import React from "react";
import Layout from "../../components/layout";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { TV } from "../../interface/TV_interface";
import { ImageUrl } from "../../components/Shared";
import BigTitle from "../../components/BigTitle";
import Slider from "../../components/Slider";

const POPULAR_TV = gql`
  query popularTVs {
    popularTVs {
      results {
        backdrop_path
        poster_path
        id
        vote_average
        name
      }
    }
  }
`;

const NOW_TV = gql`
  query nowTvs {
    nowTvs {
      results {
        backdrop_path
        poster_path
        id
        vote_average
        name
      }
    }
  }
`;

const Section = styled.section``;

const Topic = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TopicContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.gap.superBig};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TopicSpanBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: ${(props) => props.theme.gap.big};
  width: 100%;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    padding-right: 0;
    margin-bottom: 1.5rem;
    width: 100%;
  }
`;

const SpanBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopicTitleBox = styled(SpanBox)`
  text-align: center;
  margin-bottom: ${(props) => props.theme.gap.superBig};
`;
const TopicSpan = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.big};
`;

const TitleImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const TitleImage = styled.div<{ titlePhoto?: string }>`
  border-radius: ${(props) => props.theme.borderRadius.lg};
  width: 100%;
  height: 36rem;
  background-color: ${(props) => props.theme.color.bgColor};
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.titlePhoto});
  @media screen and (max-width: 1024px) {
    height: 24rem;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
`;

interface PopularTVQuery {
  popularTVs: TV;
}

interface NowTVQuery {
  nowTvs: TV;
}

const TVScreen: React.FC = () => {
  const { data: popularTVData, loading: popularTVLoading } =
    useQuery<PopularTVQuery>(POPULAR_TV);
  const { data: nowTVData, loading: nowTVLoading } =
    useQuery<NowTVQuery>(NOW_TV);

  const loading = popularTVLoading || nowTVLoading;
  return (
    <Layout title="TV">
      {loading ? (
        "Loading..."
      ) : (
        <Section>
          <Topic>
            <TopicContainer>
              <TopicSpanBox>
                <TopicTitleBox>
                  <TopicSpan>TV show much more without limits</TopicSpan>
                </TopicTitleBox>
              </TopicSpanBox>
              <TitleImageBox>
                <TitleImage
                  titlePhoto={ImageUrl(
                    popularTVData?.popularTVs.results
                      ? popularTVData?.popularTVs.results[0].poster_path
                      : ""
                  )}
                />
              </TitleImageBox>
            </TopicContainer>
            <SliderContainer>
              <div>
                <BigTitle title="Popular" />
                <Slider TVresults={popularTVData?.popularTVs.results} />
              </div>
              <div>
                <BigTitle title="Upcoming" />
                <Slider TVresults={nowTVData?.nowTvs.results} />
              </div>
            </SliderContainer>
          </Topic>
        </Section>
      )}
    </Layout>
  );
};

export default TVScreen;
