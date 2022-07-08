import styled from "styled-components";

export const Button = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.small};
  border: 2px solid ${(props) => props.theme.color.active.strong};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 0.5rem 1rem;
  transition: ${(props) => props.theme.transition.all};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.active.strong};
  }
`;

export const ImageUrl = (path?: string, size?: string) => {
  return `https://image.tmdb.org/t/p/${size ? size : "original"}${path}`;
};

export const Main = styled.main`
  margin-bottom: ${(props) => props.theme.gap.superBig};
`;

export const playVideo = (key: string) => {
  return `https://www.youtube.com/embed/${key}`;
};
