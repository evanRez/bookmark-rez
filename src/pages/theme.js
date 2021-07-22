import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "hsl(231, 69%, 60%)",
    },
    secondary: {
      main: "hsl(0, 94%, 66%)",
    },
    default: {
      main: "hsl(229, 8%, 60%)",
    },
    inherit: {
      main: "hsl(229, 31%, 21%)",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    htmlFontSize: 18,
  },
});

export { theme };
