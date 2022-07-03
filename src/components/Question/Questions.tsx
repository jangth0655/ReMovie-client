import React from "react";
import styled from "styled-components";
import Question from "./Question";
import coffee from "../../image/coffee.jpg";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem 0.5rem;
  width: 100%;
  height: 33rem;
`;
const QuestionBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.div<{ image: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.image});
  z-index: -1;
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;
const Layer = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.lg};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const questions = [
  {
    question: "Where can I watch",
    id: "q1",
  },
  {
    question: "Where can I watch",
    id: "q2",
  },
  {
    question: "How do I cancel",
    id: "q3",
  },
  {
    question: "What can I watch on REMovie",
    id: "q4",
  },
  {
    question: "Is REMovie suitable for kids",
    id: "q5",
  },
];

const Questions: React.FC = () => {
  return (
    <Container>
      <QuestionBox>
        {questions.map((item) => (
          <Question key={item.id} question={item.question} />
        ))}
      </QuestionBox>
      <Image image={coffee}>
        <Layer></Layer>
      </Image>
    </Container>
  );
};

export default Questions;
