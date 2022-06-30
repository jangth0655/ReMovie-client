import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    text: {
      dark: "rgb(107 114 128)",
      medium: "rgb(229 231 235)",
      main: "rgb(243 244 246)",
    },
    bgColor: {
      main: "rgb(31 41 55)",
    },
    active: {
      strong: "#117AF0",
      light: "#172F45",
    },
  },
  borderRadius: {
    lg: "0.5rem",
    main: "0.375rem",
  },
  fontSize: {
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
};

export { theme };
