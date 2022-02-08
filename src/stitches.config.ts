import { createStitches } from "@stitches/react";
import { blue, mauve, mauveDark } from "@radix-ui/colors";

export const { globalCss, styled, getCssText, createTheme } = createStitches({
  prefix: "ricepapi",
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      primary: mauveDark.mauve1,
      accent: blue.blue12,
      background: mauve.mauve1,
      border: mauve.mauve6,
      hover: mauve.mauve2,
    },
    fontSizes: {
      1: "13px",
      2: "15px",
      3: "17px",
      4: "19px",
      5: "21px",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
  utils: {
    // Abbreviated margin properties
    m: (value) => ({
      margin: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value) => ({
      padding: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // A property for applying width/height together
    size: (value) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value) => ({
      borderRadius: value,
    }),
  },
});

export const darkTheme = createTheme({
  colors: {
    primary: mauve.mauve1,
    background: mauveDark.mauve1,
    hover: mauveDark.mauve2,
    border: mauveDark.mauve6,
  },
});
