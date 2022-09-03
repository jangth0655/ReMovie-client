import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Movie } from "../interface/movie_interface";
import { TV } from "../interface/TV_interface";
import { ImageUrl } from "./Shared";

const MOVIE_RECOMMEND = gql`
  query movieRecommend($id: Int!) {
    movieRecommend(id: $id) {
      results {
        id
        poster_path
      }
    }
  }
`;

const TV_RECOMMEND = gql`
  query TVRecommend($id: Int!) {
    TVRecommend(id: $id) {
      results {
        id
        poster_path
      }
    }
  }
`;

const RecommendContainer = styled.div`
  height: 100%;
  padding-bottom: ${(props) => props.theme.gap.small};
`;

const RecommendItems = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${(props) => props.theme.gap.small};
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const RecommendItem = styled.div<{ post?: string }>`
  cursor: pointer;
  background-image: url(${(props) => props.post});
  background-size: cover;
  background-position: center center;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  height: 15rem;
  transition: ${(props) => props.theme.transition.all};
  &:hover {
    transform: scale(1.1);
  }
`;

interface MovieRecommendProps {
  id?: string;
  topScroll?: () => void;
}

interface MovieRecommendQuery {
  movieRecommend: Movie;
}

interface TVRecommendQuery {
  TVRecommend: TV;
}

const MovieRecommend: React.FC<MovieRecommendProps> = ({ id, topScroll }) => {
  const navigate = useNavigate();
  const { data: MovieData } = useQuery<MovieRecommendQuery>(MOVIE_RECOMMEND, {
    variables: {
      id: id && +id,
    },
  });

  const { data: TVData } = useQuery<TVRecommendQuery>(TV_RECOMMEND, {
    variables: {
      id: id && +id,
    },
  });

  const onMovieDetail = (id: number) => {
    topScroll && topScroll();
    navigate(`/movies/${id}`);
  };

  return (
    <RecommendContainer>
      <RecommendItems>
        {MovieData &&
          MovieData?.movieRecommend.results
            .slice(0, 8)
            .map((item) => (
              <RecommendItem
                onClick={() => onMovieDetail(item.id)}
                key={item.id}
                post={ImageUrl(item.poster_path)}
              ></RecommendItem>
            ))}

        {TVData &&
          TVData?.TVRecommend.results
            .slice(0, 8)
            .map((item) => (
              <RecommendItem
                onClick={() => onMovieDetail(item.id)}
                key={item.id}
                post={ImageUrl(item.poster_path)}
              ></RecommendItem>
            ))}
      </RecommendItems>
    </RecommendContainer>
  );
};

export default MovieRecommend;
