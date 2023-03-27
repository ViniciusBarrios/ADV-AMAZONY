import { styled } from "stitches";

import Image from "@infra/Image";

export const Container = styled("div", {
  width: "100%",

  display: "flex",
  flexDirection: "column",
});

export const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
});

export const Img = styled(Image, {
  borderRadius: "$md",
});

export const Description = styled("p", {
  fontSize: "13px",
  fontWeight: 500,

  marginTop: "7px",

  color: "#555555",
});
