import {
  BsFacebook,
  BsTwitter,
  BsWhatsapp,
  BsTelegram,
  BsLinkedin,
  BsShareFill,
} from "react-icons/bs";

import { styled } from "stitches";

export const Container = styled("div", {
  width: "100%",
  maxWidth: "800px",

  margin: "0 auto",

  borderBottom: "1px solid #cccccc",

  paddingBottom: "35px",
});

export const Title = styled("h1", {
  fontSize: "35px",
  fontWeight: 600,

  "@bp1": {
    fontSize: "26px",
  },
});

export const Description = styled("p", {
  fontSize: "18px",
  fontWeight: 500,

  marginTop: "15px",

  color: "#666666",

  "@bp1": {
    fontSize: "16px",
  },
});

export const Informations = styled("div", {
  marginTop: "30px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@bp1": {
    alignItems: "flex-start",
    flexDirection: "column",
  },
});

export const By = styled("p", {
  fontSize: "15px",
  fontWeight: 700,

  color: "#555555",
});

export const Date = styled("p", {
  fontSize: "15px",
  fontWeight: 500,

  marginTop: "15px",

  color: "#555555",

  display: "flex",
  alignItems: "center",

  "> span": {
    width: "2px",
    height: "2px",

    borderRadius: "50%",

    display: "inline-block",

    backgroundColor: "#555555",

    margin: "0 5px",
  },

  "@bp1": {
    fontSize: "14px",
  },
});

export const Icons = styled("div", {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",

  "@bp1": {
    marginTop: "30px",
  },
});

const IconsDefaultStyle = {
  fontSize: "22px",

  cursor: "pointer",

  flexShrink: 0,
};

export const FacebookIcon = styled(BsFacebook, {
  ...IconsDefaultStyle,

  color: "#1877f1",
});

export const TwitteIcon = styled(BsTwitter, {
  ...IconsDefaultStyle,

  color: "#1d9bf0",

  marginLeft: "25px",
});

export const WhatsappIcon = styled(BsWhatsapp, {
  ...IconsDefaultStyle,

  color: "#2fb140",

  marginLeft: "25px",
});

export const TelegramIcon = styled(BsTelegram, {
  ...IconsDefaultStyle,

  color: "#29a9eb",

  marginLeft: "25px",
});

export const LinkedinIcon = styled(BsLinkedin, {
  ...IconsDefaultStyle,

  color: "#1377b5",

  marginLeft: "25px",
});

export const ShareIcon = styled(BsShareFill, {
  ...IconsDefaultStyle,

  color: "#333333",

  marginLeft: "25px",
});
