import {
  motion,
  useAnimation,
  useViewportScroll,
  Variants,
} from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
  showing?: boolean;
  title?: string;
}

const Section = styled.section`
  position: relative;
`;

const Nav = styled(motion.nav)`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.gap.micro} 1.5rem;
  z-index: 100;
`;

const Col = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const SearchContainer = styled.form`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const SearchIcon = styled(motion.svg)`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  position: absolute;
  right: 0.3rem;
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

const LogoName = styled.div``;

const Name = styled.span<{ active?: boolean }>`
  font-size: ${(props) => props.theme.fontSize.big};
  text-transform: uppercase;
  color: ${(props) => (props.active ? "#FB005A" : "rgb(243 244 246)")};
`;

const NavTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.span`
  position: relative;
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.color.text.dark};
  transition: ${(props) => props.theme.transition.all};
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.active.light};
  }
`;

const HomePage = styled(Title)`
  color: ${(props) => props.theme.color.text.main};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
const TVPage = styled(Title)`
  color: ${(props) => props.theme.color.text.main};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

const Svg = styled.svg`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;

const ActiveNavContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  height: 6rem;
  width: 100%;
  top: 2.5rem;
  flex-direction: column;
  transform-origin: top center;
  left: 0;
`;

const ActiveNav = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const AcTiveNavName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.gap.medium};
  &:hover {
    color: ${(props) => props.theme.color.active.light};
  }
`;

const Main = styled.main`
  padding: 6rem 1.5rem 0 1.5rem;
`;

const PageMark = styled(motion.div)`
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  right: 0;
  left: 0;
  top: 1;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.active.light};
`;

const navVariant: Variants = {
  initial: {
    scaleY: 0,
  },
  animate: (active: boolean) => ({
    scaleY: active ? 1 : 0,
    transition: {
      type: "linear",
    },
  }),
};

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

const navScrollVar: Variants = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,0.9)",
  },
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const homeMatch = useMatch("/");
  const tvMatch = useMatch("/tv");
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState(false);
  const [windowSize, setWindowSize] = useState<number>(0);
  const navigate = useNavigate();
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 100) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [navAnimation, scrollY]);

  const onSearch = () => {
    setSearch((prev) => !prev);
  };

  const handleWindowSize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [handleWindowSize]);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  const showingNavTitle = () => {
    setActive((prev) => !prev);
  };

  const smallWindow = windowSize < 769;

  const onHome = () => {
    navigate("/");
  };

  const onTV = () => {
    navigate("/tv");
  };

  return (
    <Section>
      <Helmet>
        <title>{title} | Movie</title>
      </Helmet>
      <Nav variants={navScrollVar} initial="top" animate={navAnimation}>
        {/* <NavLayer /> */}
        {smallWindow ? (
          <Svg
            onClick={() => showingNavTitle()}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </Svg>
        ) : (
          <Col>
            <LogoName>
              <Name active={true}>Re</Name>
              <Name>Movie</Name>
            </LogoName>
            <NavTitle>
              <HomePage onClick={() => onHome()}>
                Main {homeMatch && <PageMark layoutId="circle" />}
              </HomePage>

              <TVPage onClick={() => onTV()}>
                TV {tvMatch && <PageMark layoutId="circle" />}
              </TVPage>
            </NavTitle>
          </Col>
        )}

        {smallWindow && (
          <ActiveNavContainer
            variants={navVariant}
            initial="initial"
            animate="animate"
            custom={active}
          >
            <div
              style={{
                position: "absolute",
                backgroundColor: "rgba(0,0,0,0.9)",
                width: "100%",
                height: "100%",
                borderRadius: 10,
                zIndex: 1,
              }}
            ></div>
            <ActiveNav>
              <AcTiveNavName>
                <Link to="/">
                  <HomePage>Main</HomePage>
                </Link>
              </AcTiveNavName>
              <AcTiveNavName>
                <Link to="/tv">
                  <TVPage>TV</TVPage>
                </Link>
              </AcTiveNavName>
            </ActiveNav>
          </ActiveNavContainer>
        )}

        <SearchContainer>
          <SearchInput
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
      </Nav>

      <Main onClick={() => setActive(false)}>{children}</Main>
    </Section>
  );
};

export default Layout;
