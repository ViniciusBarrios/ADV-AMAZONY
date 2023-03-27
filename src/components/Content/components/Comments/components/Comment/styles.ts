import { styled } from "stitches";

import Image from "@infra/Image";

export const Container = styled("div", {
  display: "flex",
  alignItems: "flex-start",

  margin: "25px 0",
});

export const AvatarWrapper = styled("div", {
  width: "48px",
  height: "48px",

  flexShrink: 0,
});

export const Avatar = styled(Image, {
  borderRadius: "$full",

  overflow: "hidden",
});

export const Wrapper = styled("div", {
  width: "100%",

  marginLeft: "8px",
});

export const Name = styled("strong", {
  fontSize: "15px",
  fontWeight: 600,
});

export const CreatedAt = styled("span", {
  fontSize: "13px",
  fontWeight: 600,

  marginLeft: "5px",

  color: "#727c8c",
});

export const Comment = styled("div", {
  fontSize: "15px",
  fontWeight: 500,

  background: "#eaebef",

  marginTop: "8px",

  padding: "12px 20px",

  borderRadius: "$lg",

  position: "relative",
});
