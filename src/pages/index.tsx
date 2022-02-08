// pages/index.js
import { Box, Text, Image, Container, NavBar, Footer } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Box className="body" css={{ position: "relative", minHeight: "100vh" }}>
        <Box
          css={{
            position: "sticky",
            background: "white",
            top: "0px",
            zIndex: 2,
            height: "50px",
            opacity: "97%",
            width: "100%",
            pl: "10px",
            fontWeight: "bold",
          }}
        >
          <Box css={{ display: "flex", alignItems: "center" }}>
            <Text css={{ pl: "20px", pt: "15px" }}>ricepapi | andy gao</Text>
          </Box>
        </Box>
        <Box>
          <Image
            src="./header_bg.jpeg"
            css={{
              background: "black",
              height: "200px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
            alt="bg"
          />
        </Box>
        <Image
          css={{
            position: "absolute",
            borderRadius: "100%",
            height: "150px",
            border: "5px solid white",
            transform: "translate(15px, -90px)",
          }}
          src="./prof_pic.jpeg"
          alt="prof-pic"
        />
        <Box css={{ mt: "70px", pl: "20px" }}>
          <Text size="4" css={{ fontWeight: "bold" }}>
            ricepapi
          </Text>
          <Text size="1" css={{ color: "rgb(83, 100, 113)" }}>
            @0xRicepapi
          </Text>

          <Text size="2" css={{ mt: "10px", maxWidth: "600px" }}>
            Building things, shipping code, having fun. <br />
            <br />
            Currently interested in crypto and its application across various
            industries.
          </Text>
          <Box
            css={{
              mt: "10px",
              display: "flex",
              alignItems: "center",
              color: "rgb(83, 100, 113)",
            }}
          >
            <Box css={{ display: "flex", mr: "10px" }}>
              <svg
                width="20px"
                height="20px"
                fill="rgb(83, 100, 113)"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g>
                  <path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path>
                  <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path>
                </g>
              </svg>
              <Text css={{ ml: "3px" }} size="2">
                nyc
              </Text>
            </Box>
            <Link passHref href="https://github.com/musubipapi">
              <>
                <svg
                  width="20px"
                  height="20px"
                  fill="rgb(83, 100, 113)"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <g>
                    <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path>
                    <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path>
                  </g>
                </svg>
                <Text
                  size="2"
                  css={{
                    ml: "3px",
                    color: "#1D9BEE",
                    "&:hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  github
                </Text>
              </>
            </Link>
          </Box>
        </Box>

        {/* NavBar */}
        <Box css={{ mt: "20px" }}>
          <NavBar />
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}
