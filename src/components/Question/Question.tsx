import React, { useState } from "react";
import styled from "styled-components";
import Answer from "./Answer";
import { IQuestion } from "./Questions";

const Container = styled.div<{ showing?: boolean }>`
  width: 100%;
  margin-bottom: ${(props) => (props.showing ? "0" : "2.5rem")};
  position: relative;
`;

const QuestionItem = styled.div`
  padding-bottom: ${(props) => props.theme.gap.micro};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
`;

const QuestionCF = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const Icon = styled.svg`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`;

const PlusIcon = styled(Icon)``;

const CloseIcon = styled(Icon)``;

interface QuestionProps {
  question: IQuestion;
}
const Question: React.FC<QuestionProps> = ({ question }) => {
  const [showing, setShowing] = useState(false);
  const onShowing = () => setShowing(true);
  const onClose = () => setShowing(false);
  return (
    <Container showing={showing}>
      <QuestionItem>
        <QuestionCF>{question.question}</QuestionCF>
        {showing ? (
          <CloseIcon
            onClick={onClose}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </CloseIcon>
        ) : (
          <PlusIcon
            onClick={onShowing}
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 4v16m8-8H4" />
          </PlusIcon>
        )}
      </QuestionItem>
      {showing ? <Answer answer={question.answer} /> : ""}
    </Container>
  );
};

export default Question;
