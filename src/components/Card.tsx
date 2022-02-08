import { styled } from "@stitches/react";
import { mauve } from "@radix-ui/colors";
import { FC } from "react";
import { Box, Text } from ".";
import { truncateText } from "@/utils";
const StyledCard = styled("div", {
  width: "100%",
  paddingTop: "20px",
  paddingBottom: "20px",
  borderBottom: "1px solid #EFF3F4",
  "&:hover": { background: mauve.mauve2 },
  cursor: "pointer",
});

interface ICard {
  title: string;
  date: string;
  description: string;
}

export const Card: FC<ICard> = ({ title, date, description }) => {
  return (
    <StyledCard>
      <Box css={{ px: "20px" }}>
        <Box css={{ display: "flex", alignItems: "center", mb: "10px" }}>
          <Text css={{ fontWeight: "bold", mr: "10px" }} size="2">
            {title}
          </Text>
          <Text css={{ color: "rgb(83, 100, 113)" }} size="1">
            {date}
          </Text>
        </Box>
        <Text size="2" css={{ mb: "10px" }}>
          {truncateText(description)}
        </Text>
      </Box>
    </StyledCard>
  );
};
