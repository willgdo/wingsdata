import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#222",
      secondary: "#9a9999",
    },
    primary: {
      main: "#222",
    },
    background: {
      default: "#e2e4e9",
      paper: "#555",
    },
  },
  typography: {
    fontFamily: `"JetBrains Mono", "Fira Code", monospace`,
    h1: {
      fontWeight: 600,
      letterSpacing: "0.05em",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          scrollBehavior: "smooth",
        },
        body: {
          margin: 0,
          padding: 0,
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
  },
});

export default theme;
