import React, { useState } from "react";
import styled from "styled-components";
import { MovieResult } from "../interface/movie_interface";
import { ImageUrl } from "./Shared";
import { motion, AnimatePresence, Variants } from "framer-motion";

const SliderContainer = styled.div`
  margin-bottom: ${(props) => props.theme.gap.superBig};
`;

const SliderCF = styled.div`
  position: relative;
  height: 15rem;
`;
const RowItems = styled(motion.div)`
  padding: 0 ${(props) => props.theme.gap.big};
  position: absolute;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.7em;
  width: 100%;
  height: 100%;
`;

const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  z-index: 10;
  transition: ${(props) => props.theme.transition.all};
  &:hover {
    transform: scale(1.1);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15rem;
`;
const ItemImage = styled.div<{ post?: string }>`
  border-radius: ${(props) => props.theme.borderRadius.lg};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.post});
`;
const ItemTitle = styled.div`
  font-size: ${(props) => props.theme.fontSize.small};
  padding: ${(props) => props.theme.gap.micro} 0;
`;

const DirectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const DirectionIcon = styled.svg`
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  transition: ${(props) => props.theme.transition.all};
  &:hover {
    background-color: ${(props) => props.theme.color.active.strong};
  }
`;

interface SliderProps {
  results?: MovieResult[];
}

const rowVariant: Variants = {
  hidden: (isBack: boolean) => ({
    x: isBack ? -window.outerWidth : window.outerWidth,
  }),
  visible: {
    x: 0,
  },
  exit: (isBack: boolean) => ({
    x: isBack ? window.outerWidth : -window.outerWidth,
  }),
};

const OFFSET = 5;
const Slider: React.FC<SliderProps> = ({ results }) => {
  const [page, setPage] = useState(0);
  const [back, setBack] = useState(false);

  const onPage = () => {
    if (results) {
      const totalMovies = results?.length - 1;
      const maxPage = Math.floor(totalMovies / OFFSET);
      back
        ? setPage((prev) => (prev === 0 ? maxPage : prev - 1))
        : setPage((prev) => (prev === maxPage ? 0 : prev + 1));
    }
  };

  const right = () => setBack(false);
  const left = () => setBack(true);

  return (
    <SliderContainer>
      <SliderCF>
        <AnimatePresence custom={back} initial={false}>
          <RowItems
            key={page}
            custom={back}
            variants={rowVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "linear", duration: 1 }}
          >
            <DirectionContainer>
              <DirectionIcon
                onClick={() => {
                  left();
                  onPage();
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </DirectionIcon>
              <DirectionIcon
                onClick={() => {
                  right();
                  onPage();
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M9 5l7 7-7 7" />
              </DirectionIcon>
            </DirectionContainer>

            {results
              ?.slice(OFFSET * page, OFFSET * page + OFFSET)
              .map((item) => (
                <RowItem key={item.id}>
                  <ImageContainer>
                    <ItemImage post={ImageUrl(item.poster_path)} />
                  </ImageContainer>
                  <ItemTitle>{item.title}</ItemTitle>
                </RowItem>
              ))}
          </RowItems>
        </AnimatePresence>
      </SliderCF>
    </SliderContainer>
  );
};

export default Slider;
