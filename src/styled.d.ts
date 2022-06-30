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
  }
}
