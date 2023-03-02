import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { light, ResetCSS } from "@acerohernan/pancakeui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
      <ResetCSS />
    </ThemeProvider>
  );
}
