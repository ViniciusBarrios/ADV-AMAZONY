import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    radii: {
      xs: "2.5px",
      sm: "5px",
      md: "10px",
      lg: "20px",
      full: "99999px",
    },
  },

  media: {
    bp1: "(max-width: 700px)",
    bp2: "(max-width: 600px)",
    bp3: "(max-width: 500px)",
  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});
