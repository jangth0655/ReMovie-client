import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    text: {
      dark: "rgb(107 114 128)",
      medium: "rgb(229 231 235)",
      main: "rgb(243 244 246)",
    },
    bgColor: {
      main: "#0D0E10",
    },
    active: {
      strong: "#FA005A", //#CE0054
      medium: "#FB005A",
      light: "rgb(236 72 153)",
    },
  },
  borderRadius: {
    lg: "0.5rem",
    main: "0.375rem",
  },
  fontSize: {
    superBig: "2rem",
    big: "1.25rem",
    medium: "1rem",
    small: "0.875rem",
    micro: "0.7rem",
  },
  fontWeight: {
    bold: 700,
    medium: 500,
    light: 300,
  },
  screen: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  gap: {
    superBig: "2.5rem",
    big: "2rem",
    medium: "1.5rem",
    small: "1rem",
    micro: "0.5rem",
  },
  transition: {
    all: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export { theme };
