import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  margin-bottom: ${(props) => props.theme.gap.superBig};
`;

const SliderCF = styled.div`
  border: 1px solid white;
  position: relative;
  height: 13rem;
`;
const RowItems = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.3em;
  width: 100%;
  height: 100%;
`;
const RowItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemImage = styled.div`
  background-color: blue;
  height: 80%;
`;
const ItemTitle = styled.div`
  padding: ${(props) => props.theme.gap.micro};
`;

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
  return (
    <SliderContainer>
      <SliderCF>
        <RowItems>
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <RowItem key={i}>
              <ItemImage></ItemImage>
              <ItemTitle>{i}</ItemTitle>
            </RowItem>
          ))}
        </RowItems>
      </SliderCF>
    </SliderContainer>
  );
};

export default Slider;
