import { styled } from "@/stitches.config";
import { FC } from "react";
import { Box, Text } from ".";
import { truncateText } from "@/utils";
import { indigo, gray, blueA } from "@radix-ui/colors";
import Link from "next/link";
const StyledCard = styled("div", {
  width: "100%",
  paddingTop: "20px",
  paddingBottom: "20px",
  borderBottom: "1px solid $border",
  "&:hover": { background: "$hover" },
  cursor: "pointer",
});

interface ICard {
  title: string;
  date: string;
  description: string;
  link: string;
  tags?: string[];
}

export const Card: FC<ICard> = ({
  title,
  date,
  description,
  tags = [],
  link,
}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
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
          <Box css={{ display: "flex", gap: "5px" }}>
            {tags.map((i) => {
              return (
                <Box
                  key={i}
                  css={{
                    py: "3px",
                    px: "2px",
                    fontWeight: "bold",
                    background: blueA.blueA7,
                    borderRadius: "5px",
                  }}
                >
                  <Text size="1">{i}</Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      </StyledCard>
    </a>
  );
};
