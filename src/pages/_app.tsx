import "../styles/globals.css";
import type { AppProps } from "next/app";
import { globalCss } from "@/stitches.config";
import { blueA } from "@radix-ui/colors";
const globalStyles = globalCss({
  /* width */
  "::-webkit-scrollbar": {
    width: ".5em",
  },
  "::-webkit-scrollbar-track": {},

  "::-webkit-scrollbar-thumb ": {
    background: blueA.blueA6,
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: blueA.blueA7,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
