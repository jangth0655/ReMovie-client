import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const Section = styled.section`
  min-height: 100vh;
`;
const Topic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const TopicSpanBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: ${(props) => props.theme.gap.big};
  width: 50%;
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
const Subscribe = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  border: 2px solid ${(props) => props.theme.color.active.strong};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 0.5rem 1rem;
  transition: ${(props) => props.theme.transition.all};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.active.strong};
  }
`;

const Tariff = styled(Subscribe)`
  margin-left: ${(props) => props.theme.gap.big};
`;

const TitleImageBox = styled.div`
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
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

const Main = styled.main``;

const SliderContainer = styled.div``;

const SliderTitleBox = styled.div`
  padding: 1rem 0;
`;
const SliderTitle = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.big};
`;

const Slider = styled.div`
  position: relative;
`;
const RowItems = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.3em;
  width: 100%;
  border: 1px solid white;
`;
const RowItem = styled.div`
  width: 100%;
  height: 12.5rem;
  background-color: blue;
`;
const ItemImage = styled.div``;
const ItemTitle = styled.div``;

const Home: React.FC = () => {
  return (
    <Layout title="Main">
      <Section>
        <Topic>
          <TopicSpanBox>
            <TopicTitleBox>
              <TopicSpan>
                Movie, TV shows and much more without limits
              </TopicSpan>
            </TopicTitleBox>
            <PlanBox>
              <Subscribe>Subscribe</Subscribe>
              <Tariff>Tariff</Tariff>
            </PlanBox>
          </TopicSpanBox>

          <TitleImageBox>
            <TitleImage></TitleImage>
          </TitleImageBox>
        </Topic>

        <Main>
          {/* slider popular */}
          <SliderContainer>
            <SliderTitleBox>
              <SliderTitle>Popular</SliderTitle>
            </SliderTitleBox>
            <Slider>
              <RowItems>
                {[1, 2, 3, 4, 5, 6].map((item, i) => (
                  <RowItem key={i}>
                    <ItemImage></ItemImage>
                    <ItemTitle>{i}</ItemTitle>
                  </RowItem>
                ))}
              </RowItems>
            </Slider>
          </SliderContainer>
          {/* slider upcoming  */}

          {/* Tariff plans */}
          {/* Frequently asked question */}
        </Main>
      </Section>
    </Layout>
  );
};

export default Home;
