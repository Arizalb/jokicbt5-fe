import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#04BBBE", // Ungu pastel
      contrastText: "#FFFFFF", // Putih
    },
    secondary: {
      main: "#0D1577", // Oranye pastel
      contrastText: "#FFFFFF", // Coklat gelap
    },
  },

  typography: {
    fontFamily: [
      "Montserrat, Segoe UI, Merriweather,BlinkMacSystemFont, -apple-system,  Roboto, Helvetica, Apple Color Emoji, Poppins, Arial, sans-serif",
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
          margin: "0 8px",
        },
      },
    },
  },
});

export default theme;
