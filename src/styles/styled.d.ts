import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    appBackground: string;
    cardBackground: string;
    textColor: string;
    stroke: string;
    secondary: string;
    buttonColor: string;
  }
}
