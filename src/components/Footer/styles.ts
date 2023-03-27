import { styled } from "stitches";

export const Container = styled("footer", {
  backgroundColor: "#c4170c",

  display: "flex",
  justifyContent: "center",

  color: "#ffffff",
});

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "1200px",

  padding: "15px",

  "> #top": {
    display: "flex",
    alignItems: "center",

    "> svg": {
      height: "35px",
    },

    "> span": {
      cursor: "pointer",

      fontWeight: 500,
      fontSize: "15px",

      marginLeft: "20px",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "> span": {
        width: "1px",
        height: "15px",

        backgroundColor: "#ffffff",

        display: "inline-block",

        margin: "0 8px",
      },

      "@bp1": {
        fontSize: "13px",
        marginLeft: "10px",
      },
    },
  },

  "> #bottom": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",

    marginTop: "30px",

    "> p": {
      fontSize: "12px",
      fontWeight: 500,
    },

    "> span": {
      cursor: "pointer",

      fontWeight: 500,
      fontSize: "12px",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "> span": {
        width: "1px",
        height: "15px",

        backgroundColor: "#ffffff",

        display: "inline-block",

        margin: "0 5px",

        opacity: 0.5,
      },

      "@bp1": {
        display: "none",
      },
    },
  },
});
