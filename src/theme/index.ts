import {
  createTheme,
  darken,
  lighten,
  responsiveFontSizes,
} from "@mui/material/styles"
import { BORDER_RADIUS_BUTTON } from "constants/borders"
import {
  GRAY_COLOR,
  MAIN_COLOR,
  PINK_COLOR,
  VIOLET_COLOR,
  WHITE_COLOR,
} from "constants/colors"

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    violet: true
    pink: true
    gray: true
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: MAIN_COLOR,
    },
  },
  // TODO: change font
  typography: {
    fontFamily: "Inter, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 500,
        },
        h2: {
          fontWeight: 500,
        },
        h3: {
          fontWeight: 500,
        },
        h4: {
          fontWeight: 500,
        },
        h5: {
          fontWeight: 500,
        },
        h6: {
          fontWeight: 500,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "violet" },
          style: {
            paddingTop: "10px",
            paddingBottom: "10px",
            lineHeight: "20px",
            backgroundColor: VIOLET_COLOR,
            color: WHITE_COLOR,
            ":hover": {
              backgroundColor: lighten(VIOLET_COLOR, 0.1),
            },
          },
        },
        {
          props: { variant: "pink" },
          style: {
            backgroundColor: PINK_COLOR,
            color: VIOLET_COLOR,
            ":hover": {
              backgroundColor: lighten(PINK_COLOR, 0.1),
            },
          },
        },
        {
          props: { variant: "gray" },
          style: {
            paddingTop: "10px",
            paddingBottom: "10px",
            lineHeight: "20px",
            backgroundColor: GRAY_COLOR,
            color: MAIN_COLOR,
            ":hover": {
              backgroundColor: darken(GRAY_COLOR, 0.1),
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          boxShadow: "none",
          padding: "8px 24px",
          fontSize: "1rem",
          borderRadius: BORDER_RADIUS_BUTTON,
          ":hover": {
            boxShadow: "none",
          },
          ":active": {
            boxShadow: "none",
          },
        },
      },
    },
  },
})

export default responsiveFontSizes(theme)
