import { styled } from "stitches";

export const Container = styled("main", {
  width: "100%",
  maxWidth: "700px",

  margin: "0 auto",

  padding: "30px 15px 25px 15px",
});

export const Wrapper = styled("section", {
  width: "100%",

  padding: "30px 0 30px 0",

  borderBottom: "5px solid #f7f7f7",
});

export const Text = styled("p", {
  fontSize: "17px",
  fontWeight: 500,

  color: "#333333",

  "> strong": {
    fontWeight: 600,
  },

  "> a": {
    fontWeight: 600,

    color: "red",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const Title = styled("h3", {
  fontSize: "30px",
  fontWeight: 600,

  "@bp3": {
    fontSize: "23px",
  },
});
