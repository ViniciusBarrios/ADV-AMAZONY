import { styled } from "stitches";

export const Container = styled("section", {
  marginTop: "30px",
});

export const ViewMore = styled("button", {
  width: "100%",

  fontSize: "16px",
  fontWeight: 500,

  padding: "17px",

  background: "#4080ff",
  color: "#ffffff",

  borderRadius: "$sm",

  "&:hover": {
    background: "#346fe3",
  },

  transition: "200ms",
});

export const Warning = styled("div", {
  fontSize: "16px",
  fontWeight: 500,

  background: "#eaebef",

  marginTop: "10px",

  padding: "12px 20px",

  borderRadius: "$md",

  position: "relative",

  textAlign: "center",
});
