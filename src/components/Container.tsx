import { styled } from "@/stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  "& > div": {
    width: "100%",
    "@bp1": { maxWidth: "100%" },
    "@bp2": { maxWidth: "768px" },
  },
  "& > .body": {
    "@bp2": {
      border: "0.5px solid #EFF3F4",
    },
  },
});
