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
  borderBottom: `1px solid $border`,
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  background: "$background",
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

  "&:hover": { color: "$primary", background: "$hover" },
  '&[data-state="active"]': {
    color: "$primary",
    boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
  },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  background: "$background",
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
              title="Collectr"
              link="https://collectr.art"
              date=""
              description="A new experience for displaying and curating your NFTs."
              // tags={["NextJS", "Solidity", "NFTs", "Three.JS"]}
            />
            <Card
              title="Diamond DAO: Chainverse"
              link="https://diamonddao.xyz"
              date=""
              description="Building a platform to identify emerging Web3 Communities/DAOs"
              // tags={["NextJS", "ethers"]}
            />
            <Card
              title="Kong Land: V2 Mobile App"
              link="https://kong.land"
              date=""
              description="Built out v2 of Kong's new mobile app which includes a NFT reveal mechanism"
              // tags={["React Native", "WalletConnect", "ethers"]}
            />
            <Card
              title="Playground"
              link="https://playgroundshops.xyz"
              date=""
              description="Incubating Shopify Apps that brings joys to merchants"
              // tags={["NextJS", "ShopifyAPI", "Primsa"]}
            />
          </Box>
        </TabsContent>
        <TabsContent value="writings">
          <Box
            css={{
              minHeight: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              pt: "20px",
            }}
          >
            <Box>Coming Soon</Box>
          </Box>
        </TabsContent>
        <TabsContent value="notes">
          <Box
            css={{
              minHeight: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              pt: "20px",
            }}
          >
            <Box>Coming Soon</Box>
          </Box>
        </TabsContent>
        <TabsContent value="likes">
          <Box
            css={{
              minHeight: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              pt: "20px",
            }}
          >
            <Box>Coming Soon</Box>
          </Box>{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
};
