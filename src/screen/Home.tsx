import React, { useRef } from "react";
import styled from "styled-components";
import BigTitle from "../components/BigTitle";
import Layout from "../components/layout";
import Questions from "../components/Question/Questions";
import { Button } from "../components/Shared";
import Slider from "../components/Slider";
import Tariff from "../components/Tariff";
import { gql, useQuery } from "@apollo/client";
import { Movie } from "../interface/movie_interface";

const POPULAR_MOVIE = gql`
  query popularMovies {
    popularMovies {
      results {
        poster_path
        backdrop_path
        overview
        id
        original_title
        title
        vote_count
        video
        vote_average
        release_date
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

const PlanBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;
const Question = styled(Button)``;

const GoTariff = styled(Button)`
  margin-left: ${(props) => props.theme.gap.big};
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
const TitleImage = styled.div`
  width: 100%;
  height: 36rem;
  background-color: red;
  @media screen and (max-width: 1024px) {
    height: 24rem;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
`;

const Main = styled.main`
  margin-bottom: ${(props) => props.theme.gap.superBig};
`;

const TariffContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionContainer = styled.div``;

const TariffBox = styled.div`
  & :nth-of-type(1n) {
    margin-right: 0.5rem;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

interface PopularMovie {
  popularMovies: Movie;
}

const Home: React.FC = () => {
  const tariffRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const { data, loading } = useQuery<PopularMovie>(POPULAR_MOVIE);
  console.log(data);

  const scrollTariff = () => {
    tariffRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollQuestion = () => {
    questionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout title="Main">
      <Section>
        <Topic>
          <TopicContainer>
            <TopicSpanBox>
              <TopicTitleBox>
                <TopicSpan>
                  Movie, TV shows and much more without limits
                </TopicSpan>
              </TopicTitleBox>
              <PlanBox>
                <Question onClick={scrollQuestion}>Question</Question>
                <GoTariff onClick={scrollTariff}>Tariff</GoTariff>
              </PlanBox>
            </TopicSpanBox>

            <TitleImageBox>
              <TitleImage></TitleImage>
            </TitleImageBox>
          </TopicContainer>

          {/* slider popular */}
          <SliderContainer>
            <div>
              <BigTitle title="Popular" />
              <Slider />
            </div>
            <div>
              <BigTitle title="Upcoming" />
              <Slider />
            </div>
          </SliderContainer>
          {/* slider upcoming  */}
        </Topic>

        <Main>
          {/* Tariff plans */}
          <TariffContainer ref={tariffRef}>
            <BigTitle title="Tariff plans" />
            <TariffBox style={{ display: "flex" }}>
              <Tariff title="Base" price={8.99} />
              <Tariff title="Comfort" price={10.99} />
              <Tariff title="Premium" price={14.99} />
            </TariffBox>
          </TariffContainer>
        </Main>
        {/* Frequently asked question */}
        <Main>
          <QuestionContainer ref={questionRef}>
            <BigTitle title="Frequently asked questions" />
            <Questions />
          </QuestionContainer>
        </Main>
      </Section>
    </Layout>
  );
};

export default Home;
