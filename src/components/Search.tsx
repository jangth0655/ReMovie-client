import React, { useState } from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SearchContainer = styled.form`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const SearchInput = styled(motion.input)`
  transform-origin: top right;
  border: 1px solid ${(props) => props.theme.color.text.dark};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: 0.3rem;
  margin-right: ${(props) => props.theme.gap.micro};
  color: ${(props) => props.theme.color.text.main};
  padding-left: 2.5rem;
  width: 15rem;
  &::placeholder {
    font-size: ${(props) => props.theme.fontSize.micro};
    color: ${(props) => props.theme.color.text.dark};
  }
  &:focus {
    border-color: ${(props) => props.theme.color.active.strong};
  }
`;

const SearchIcon = styled(motion.svg)`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  position: absolute;
  right: 0.3rem;
`;

const searchVariant: Variants = {
  initial: {
    scaleX: 0,
  },
  animate: (search: boolean) => ({
    scaleX: search ? 1 : 0,
    transition: {
      type: "linear",
    },
  }),
};

interface SearchForm {
  keyword: string;
}

const Search: React.FC = () => {
  const [search, setSearch] = useState(false);
  const { register, handleSubmit, reset } = useForm<SearchForm>();
  const navigate = useNavigate();

  const onValid = ({ keyword }: SearchForm) => {
    navigate(`/search/${keyword}`);
    reset();
  };
  const onSearch = () => {
    setSearch((prev) => !prev);
  };
  return (
    <SearchContainer onSubmit={handleSubmit(onValid)}>
      <SearchInput
        {...register("keyword", { required: true })}
        variants={searchVariant}
        initial="initial"
        animate="animate"
        custom={search}
        type="text"
        placeholder="Search"
      />
      <SearchIcon
        onClick={() => onSearch()}
        viewBox="0 0 20 20"
        fill="rgb(236 72 153)"
        animate={{ x: search ? -210 : 0 }}
        transition={{ type: "linear" }}
      >
        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </SearchIcon>
    </SearchContainer>
  );
};

export default Search;
