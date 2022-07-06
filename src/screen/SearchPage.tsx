import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/layout";
import { ImageUrl } from "../components/Shared";
import { Search } from "../interface/search_interface";

const MULTI_SEARCH = gql`
  query multiSearch($keyword: String!) {
    multiSearch(keyword: $keyword) {
      results {
        id
        poster_path
        title
        name
      }
    }
  }
`;

const Container = styled.main`
  padding-top: ${(props) => props.theme.gap.big};
  min-height: 100vh;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${(props) => props.theme.gap.small};
`;

const Item = styled.div`
  cursor: pointer;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  transition: ${(props) => props.theme.transition.all};
  margin-bottom: ${(props) => props.theme.gap.small};
  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.div<{ post?: string }>`
  border-radius: ${(props) => props.theme.borderRadius.lg};
  height: 15rem;
  background-image: url(${(props) => props.post});
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.gap.micro};
  span {
    color: ${(props) => props.theme.color.text.dark};
    font-size: ${(props) => props.theme.fontSize.micro};
  }
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.text.main};
`;

interface SearchQuery {
  multiSearch: Search;
}

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const { data, loading } = useQuery<SearchQuery>(MULTI_SEARCH, {
    variables: {
      keyword,
    },
  });

  const onDetail = (id: number, title: string) => {
    if (title) {
      navigate(`/movies/${id}`);
    } else {
      navigate(`/tvs/${id}`);
    }
  };

  return (
    <Layout title="Search">
      {loading ? (
        "Loading..."
      ) : (
        <Container>
          <Items>
            {data?.multiSearch.results.map((item) => (
              <Item key={item.id} onClick={() => onDetail(item.id, item.title)}>
                {item.poster_path ? (
                  <Image post={ImageUrl(item.poster_path)} />
                ) : (
                  <Image>
                    <span>There is not image</span>
                  </Image>
                )}
                <Title>{item.title ? item.title : item.name}</Title>
              </Item>
            ))}
          </Items>
        </Container>
      )}
    </Layout>
  );
};

export default SearchPage;
