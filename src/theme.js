import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#256699",
      light: "#ffffff",
      dark: "#C0C0C0",
      // dark: "#2A2D31",
      // dark:"red",
      success: "#80D82D",
    },
    success: {
      main: "#80D82D",
    },
    danger: {
      main: "#ff0000",
    },
    text: {
      primary: "#333D47", // Default text color
      secondary: "#333D47",
      light: "#ffffff", // Secondary text color
    },
    info:{
      main:"#ffffff"
    },

    background: {
      default: "#FAFCFB",
    },
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       '&:hover': {
    //         // backgroundColor: '#256699', // Same as primary.main
    //       },
    //     },
    //   },
    // },
  },

  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4:{
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.4,
    }
    ,
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: ".75rem",
      fontWeight: 500,
      // lineHeight: 1.5,
    },
    bold: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: "10px",
  },
});

export default theme;
