import { HiOutlineSearch } from "react-icons/hi";
import { MdMenu } from "react-icons/md";

import { styled } from "stitches";

export const Container = styled("section", {
  width: "100%",

  display: "flex",
  justifyContent: "center",

  backgroundColor: "#C4170C",
  color: "#ffffff",
});

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "1200px",

  padding: "20px 15px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",

  "@bp3": {
    justifyContent: "space-between",
    padding: "15px",
  },
});

export const Content = styled("div", {
  position: "absolute",
  left: "15px",

  display: "flex",
  alignItems: "center",

  "> svg": {
    height: "35px",

    "@bp3": {
      height: "25px",
    },
  },

  "@bp3": {
    position: "initial",
  },
});

export const Menu = styled("button", {
  display: "flex",
  alignItems: "center",

  color: "#ffffff",

  "> p": {
    fontSize: "14px",
    fontWeight: 700,

    "@bp1": {
      display: "none",
    },
  },
});

export const MenuIcon = styled(MdMenu, {
  fontSize: "35px",

  marginRight: "5px",

  "@bp1": {
    marginRight: "10px",
  },

  "@bp3": {
    fontSize: "30px",
  },
});

export const Space = styled("div", {
  height: "21px",

  margin: "13px",

  borderLeft: "1px dotted #ffffff",

  opacity: 0.7,

  "@bp1": {
    display: "none",
  },
});

export const Title = styled("h1", {
  fontSize: "35px",
  fontWeight: 400,

  textAlign: "center",

  "@bp1": {
    fontSize: "30px",
  },

  "@bp3": {
    fontSize: "25px",
  },
});

export const SearchIcon = styled(HiOutlineSearch, {
  fontSize: "22px",

  flexShrink: 0,

  cursor: "pointer",

  display: "none",

  "@bp3": {
    display: "block",
  },
});

export const Podcast = styled("section", {
  width: "100%",

  fontSize: "17px",
  fontWeight: 600,

  backgroundColor: "#b0150b",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "10px",

  color: "#ffffff",

  "@bp1": {
    fontSize: "14px",
  },
});
