import React, { FC } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { mauve, blue } from "@radix-ui/colors";
import { styled } from "@/stitches.config";
import { Box } from "./Box";
import { useRouter } from "next/router";
import { Card } from "./Card";
import { Text } from "./Text";
import { truncateText } from "@/utils";

type Props = {};
const StyledTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  borderBottom: `1px solid ${mauve.mauve6}`,
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "white",
  padding: "0 20px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 15,
  lineHeight: 1,
  color: mauve.mauve11,
  userSelect: "none",

  "&:hover": { color: blue.blue11, background: mauve.mauve2 },
  '&[data-state="active"]': {
    color: blue.blue10,
    boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
  },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  backgroundColor: "white",
  outline: "none",
});

// Exports
export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;

export const NavBar: FC = () => {
  return (
    <div>
      <Tabs defaultValue="projects">
        <TabsList aria-label="Manage your account">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="writings">Writings</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="likes">Likes</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <Box>
            <Card
              title="Project 1"
              date="Feb 7"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <Card
              title="Project 1"
              date="Feb 7"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </Box>
        </TabsContent>
        <TabsContent value="writings">
          <Box
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              mt: "50px",
            }}
          >
            <Box>Coming Soon</Box>
          </Box>
        </TabsContent>
        <TabsContent value="notes">
          <Box
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              mt: "50px",
            }}
          >
            <Box>Coming Soon</Box>
          </Box>{" "}
        </TabsContent>
        <TabsContent value="likes">
          <Box
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              mt: "50px",
            }}
          >
            <Box>Coming Soon</Box>
          </Box>{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
};
