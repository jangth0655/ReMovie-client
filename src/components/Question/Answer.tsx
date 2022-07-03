import React from "react";
import styled from "styled-components";

const AnswerBox = styled.div`
  width: 100%;
  height: 4rem;
  margin-bottom: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.text.medium};
  padding: 0.5rem;
`;

const AnswerSpan = styled.span``;

interface AnswerProps {
  answer?: string;
}

const Answer: React.FC<AnswerProps> = ({ answer }) => {
  return (
    <AnswerBox>
      <AnswerSpan>Answer</AnswerSpan>
    </AnswerBox>
  );
};

export default Answer;
