import { styled } from "@/stitches.config";
import { blackA } from "@radix-ui/colors";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

const StyledButton = styled("button", {
  position: "relative",
  border: "none",
  background: "transparent",
  padding: "0",
  cursor: "pointer",
  outlineOffset: "4px",
  transition: "filter 250ms",
  "& > .shadow": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "$accent",
    willChange: "transform",
    transform: "translateY(2px)",
    transition: "transform 600ms cubic-bezier(.3,.7,.4,1)",
  },
  "& > .edge": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: `$primary`,
  },
  "& > .front": {
    display: "block",
    position: "relative",
    fontSize: "1em",
    willChange: "transform",
    transform: "translateY(-4px)",
    transition: `transform
    600ms
    cubic-bezier(.3, .7, .4, 1)`,
  },

  " &:hover": {
    filter: "brightness(110%)",
  },

  "&:active .front": {
    transform: "translateY(-2px)",
    transition: "transform 34ms",
  },

  " &:active .shadow": {
    transform: "translateY(1px)",
    transition: "transform 34ms",
  },
  " &:focus:not(:focus-visible)": {
    outline: "none",
  },
});

export const ToggleSwitchButton: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(targetTheme);
  };
  return (
    <StyledButton
      css={{
        color: "$background",
        "& > .front": {
          padding: "2px 4px",
          background: "$primary",
        },
        "& > span": { borderRadius: "4px" },
      }}
      onClick={toggleTheme}
    >
      <span className="shadow" />
      <span className="edge" />
      <span className="front">
        {resolvedTheme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
    </StyledButton>
  );
};
