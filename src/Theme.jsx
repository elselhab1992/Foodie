/* eslint-disable react/prop-types */
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#000",
    secondary: "#f5bc13",
    white: "#fff",
  },
  fontSize: {
    small: "18px",
    normal: "20px",
    medium: "25px",
    large: "40px",
    xl: "60px",
  },
  fontWeight: {
    light: "300",
    Regular: "400",
    medium: "500",
    bold: "700",
    bolder: "900",
  },
};

// const lightTheme = {
//   colors: {
//     primary: "#000",
//     secondary: "#ddb232",
//     white: "#fff",
//   },
// };

// const darkTheme = {
//   colors: {
//     primary: "#fff",
//     secondary: "#ddb232",
//     black: "#000",
//   },
// };

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
