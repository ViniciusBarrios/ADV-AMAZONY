import { styled } from "stitches";

export const Container = styled("section", {
  width: "100%",

  display: "flex",
  justifyContent: "center",

  backgroundColor: "#f3f3f3",

  "@bp3": {
    display: "none",
  },
});

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "1200px",

  padding: "15px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Sites = styled("div", {
  display: "flex",
});

export const Site = styled("p", {
  fontSize: "17px",
  fontWeight: "bold",

  marginRight: "10px",

  cursor: "pointer",

  "@bp2": {
    fontSize: "15px",
  },
});

export const Actions = styled("div", {});

const defaulStyles = {
  fontSize: "13px",
  fontWeight: 500,

  "@bp2": {
    fontSize: "11px",
  },
};

export const SignUp = styled("button", {
  ...defaulStyles,

  color: "#999999",

  marginRight: "15px",

  "&:hover": {
    color: "#1063e0",
  },

  transition: "200ms",
});

export const SignIn = styled("button", {
  ...defaulStyles,

  backgroundColor: "#f3f3f3",

  color: "#666666",

  padding: "2px 4px",

  borderRadius: "2px",

  border: "1px solid #b1abab",

  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#1063e0",
  },

  transition: "200ms",
});
