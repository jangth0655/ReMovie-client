import React from "react";
import styled from "styled-components";
import Question from "./Question";
import coffee from "../../image/coffee.jpg";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 33rem;
`;
const QuestionBox = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
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

export type IQuestion = {
  question: string;
  answer: string;
  id: string;
};

const questions: IQuestion[] = [
  {
    question: "Where can I watch",
    answer: "다양한 디바이스에서 언제 어디서나 시청할 수 있습니다.",
    id: "q1",
  },
  {
    question: "How do I cancel",
    answer: "홈페이지의 마이페이지 하단에서 해지가 가능합니다.",
    id: "q3",
  },
  {
    question: "What can I watch on REMovie",
    answer:
      "장편영화, 다큐멘터리, TV, 애니메이션 등 수만읂 콘텐츠들을 확보하고 있습니다.",
    id: "q4",
  },
  {
    question: "Is REMovie suitable for kids",
    answer: "다양한 연령층을 고려하여 시청할 수 있습니다.",
    id: "q5",
  },
];

const Questions: React.FC = () => {
  return (
    <Container>
      <QuestionBox>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </QuestionBox>
      <Image image={coffee}>
        <Layer />
      </Image>
    </Container>
  );
};

export default Questions;
