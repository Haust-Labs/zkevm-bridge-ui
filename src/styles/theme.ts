export const theme = {
  breakpoints: {
    upSm: "@media (min-width: 480px)",
  },
  hoverTransition: "all 150ms",
  maxWidth: 644,
  palette: {
    black: "#fff",
    error: {
      light: "rgba(232,67,12,0.1)",
      main: "#e8430d",
    },
    grey: {
      dark: "#rgba(255,255,255,0.6)",
      light: "#000",
      main: "#121417",
      veryDark: "#363740",
    },
    primary: {
      dark: "rgba(70,255,244,0.8)",
      main: "#46FFF4",
    },
    btn: {
      main: "rgba(70,255,244,1)",
      second: "rgba(70,255,244,0.6)",
      linkbtn: "#46FFF4",
      text: "#121417",
      close: "#1C1F23",
    },
    input: {
      border: "#3B434D",
      background: "#1C1F23",
      text: "#727D8D",
    },
    success: {
      light: "rgba(0,255,0,0.1)",
      main: "#1ccc8d",
    },
    transparency: "rgba(41,41,41,0.8)",
    warning: {
      light: "rgba(225,126,38,0.1)",
      main: "#e17e26",
    },
    white: "#121417",
  },
  spacing: (value: number): number => value * 8,
};

export type Theme = typeof theme;
