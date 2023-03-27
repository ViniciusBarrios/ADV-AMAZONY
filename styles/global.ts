import { globalCss } from "stitches";

export default globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  a: {
    textDecoration: "none",
    color: "inherit",

    cursor: "pointer",
  },
  "*, button, input, textarea": {
    border: "none",
    background: "none",
    outline: "none",
  },
  button: {
    cursor: "pointer",
  },
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    backgroundColor: "#ffffff",

    textRendering: "optimizeLegibility !important",
    "-webkit-font-smoothing": "antialiased !important",
  },
});
