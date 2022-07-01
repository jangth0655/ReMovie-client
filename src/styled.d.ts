// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      text: {
        dark: string;
        medium: string;
        main: string;
      };
      bgColor: {
        main: string;
      };
      active: {
        strong: string;
        medium: string;
        light: string;
      };
    };
    borderRadius: {
      lg: string;
      main: string;
    };
    fontWeight: {
      bold: number;
      medium: number;
      light: number;
    };
    fontSize: {
      superBig: string;
      big: string;
      medium: string;
      small: string;
      micro: string;
    };
    screen: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    gap: {
      superBig: string;
      big: string;
      medium: string;
      small: string;
      micro: string;
    };
    transition: {
      all: string;
    };
  }
}
