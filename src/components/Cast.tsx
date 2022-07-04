import { gql, useQuery } from "@apollo/client";
import React, { useRef } from "react";
import styled from "styled-components";
import { MovieCast } from "../interface/movie_interface";
import { ImageUrl, Main } from "./Shared";

const MOVIE_CAST = gql`
  query movieCast($id: Int!) {
    movieCast(id: $id) {
      cast {
        id
        profile_path
        name
      }
    }
  }
`;

const CastContainer = styled(Main)`
  position: relative;
  height: 15rem;
  padding: 0 ${(props) => props.theme.gap.big};
`;

const DirectionIcon = styled.svg`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  transition: ${(props) => props.theme.transition.all};
  &:hover {
    background-color: ${(props) => props.theme.color.active.strong};
  }
`;

const LeftIcon = styled(DirectionIcon)`
  left: 0;
`;
const RightIcon = styled(DirectionIcon)`
  right: 0;
`;

const CastItems = styled.div`
  display: flex;
  overflow-x: scroll;
`;
const CastItem = styled.div`
  margin-right: ${(props) => props.theme.gap.micro};
  &:last-child {
    margin-right: 0;
  }
`;
const CastImage = styled.div<{ post?: string }>`
  width: 13rem;
  height: 13rem;
  background-color: ${(props) => props.theme.color.bgColor.main};
  background-image: url(${(props) => props.post});
  background-size: cover;
  background-position: center center;
`;
const CastName = styled.span``;

interface CastProps {
  id?: string;
}

interface CastQuery {
  movieCast: MovieCast;
}

const Cast: React.FC<CastProps> = ({ id }) => {
  const { data } = useQuery<CastQuery>(MOVIE_CAST, {
    variables: {
      id: id && +id,
    },
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 350, behavior: "smooth" });
  };

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  };

  return (
    <div>
      <CastContainer>
        <LeftIcon
          onClick={scrollLeft}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7" />
        </LeftIcon>
        <RightIcon
          onClick={scrollRight}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </RightIcon>

        <CastItems ref={containerRef}>
          {data?.movieCast.cast.slice(0, 10).map((cast) => (
            <CastItem key={cast.id}>
              <CastImage post={ImageUrl(cast.profile_path)}></CastImage>
              <div>
                <CastName>{cast.name}</CastName>
              </div>
            </CastItem>
          ))}
        </CastItems>
      </CastContainer>
    </div>
  );
};

export default Cast;
