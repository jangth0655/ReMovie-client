import React from "react";
import styled from "styled-components";
import Question from "./Question";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: ${(props) => props.theme.gap.superBig};
  width: 50%;
`;

const ImageBox = styled.div`
  width: 50%;
  height: 22rem;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const Questions: React.FC = () => {
  return (
    <Container>
      <QuestionBox>
        <Question question="What is REMovie" />
        <Question question="Where can I watch" />
        <Question question="How do I cancel" />
        <Question question="What can I watch on REMovie" />
      </QuestionBox>

      <ImageBox>
        <Image />
      </ImageBox>
    </Container>
  );
};

export default Questions;
