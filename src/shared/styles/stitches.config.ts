import { createStitches } from "@stitches/react";
export const { styled, css, globalCss, keyframes, theme } = createStitches({
  theme: {
    colors: {
      primary: "#020b12",
      secondary: "#3852f7",
      thread: "#1C3548",
      hover: "#020b12",
      error: "#fe1212",
      backgroundForm: "#ffffff",
      text: "#020b12",
    },
    fonts: {
      body: "Sofia Sans Extra Condensed, sans-serif",
      heading: "Sofia Sans Extra Condensed, sans-serif",
    },
    fontSizes: {
      title: "40px",
      label: "18px",
      input: "20px",
      button: "24px",
    },
    space: {
      formPadding: "24px",
      fieldGap: "16px",
      elementGap: "4px",
      inputPadding: "4px 8px",
      textRowGap: "8px",
      textColGap: "8px",
      paddingButton: "20px 24px",
      latterHaderForm: "0.8px",
    },
    sizes: {
      inputHeight: "36px",
      iconSize: "22px",
      buttonWidth: "100px",
      buttonHeight: "50px",
    },
    radii: {
      container: "16px",
      field: "4px",
      button: "8px",
    },
    shadows: {
      box: "6px 19px 34px 15px rgba(0, 0, 0, 0.25)",
      button: "2px 3px 5px 2px rgba(2, 34, 43, 0.34)",
      TextShadow: "0 4px 4px rgba(0, 0, 0, 0.25);",
    },
    borderCustom: {
      broderInputTag: "1px solid #1e1e1e",
    },
    fontWeights: {
      HaderForm: "400",
    },
    placeHader: {
      textalignplace: "center",
    },
  },
});
