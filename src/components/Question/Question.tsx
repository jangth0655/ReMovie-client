import React from "react";
import styled from "styled-components";

const QuestionItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: ${(props) => props.theme.gap.micro};
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.gap.superBig};
`;

const QuestionCF = styled.span``;

const PlusIcon = styled.svg`
  width: 1rem;
  height: 1rem;
`;

interface QuestionProps {
  question: string;
}
const Question: React.FC<QuestionProps> = ({ question }) => {
  return (
    <QuestionItem>
      <QuestionCF>{question}</QuestionCF>
      <PlusIcon
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M12 4v16m8-8H4" />
      </PlusIcon>
    </QuestionItem>
  );
};

export default Question;
