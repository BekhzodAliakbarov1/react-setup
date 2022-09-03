export interface CustomTheme {
  bg: {
    main: string;
  };
  text: {
    main: string;
  };
  colors: {
    primary: string;
  };
  sizes: {
    md: string;
    sm: string;
    lg: string;
    xl: string;
  };
}

export type CurrentTheme = 'light' | 'dark';
