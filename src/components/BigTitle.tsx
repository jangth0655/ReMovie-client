import React from "react";
import styled from "styled-components";

const SliderTitleBox = styled.div`
  padding: 1rem 0;
`;
const SliderTitle = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.big};
`;

interface BigTitleProps {
  title: string;
}

const BigTitle: React.FC<BigTitleProps> = ({ title }) => {
  return (
    <SliderTitleBox>
      <SliderTitle>{title}</SliderTitle>
    </SliderTitleBox>
  );
};

export default BigTitle;
