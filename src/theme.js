import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#777777",
      main: "#1F2A2C",
      dark: "#2d3e50",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ["Exo", "Acme", "sans-serif"],
    h2: { fontSize: "4.25rem" },
  },
});

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 3,
      color: "#1F2A2C",
      "&:hover": {
        backgroundColor: "#e8f4ea",
      },
    },
    outlined: {
      "&:hover": {
        border: "1px solid #777777",
      },
    },
  },
  MuiIconButton: {
    root: {
      "&:hover": {
        backgroundColor: "#e8f4ea",
      },
    },
  },

  MuiFormControlLabel: {
    root: {
      marginRight: 25,
    },
  },
  MuiFormHelperText: {
    root: {
      color: "#1F2A2C",
    },
  },
};

export default theme;
