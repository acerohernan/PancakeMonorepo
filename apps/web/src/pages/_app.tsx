import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { light, ModalProvider, ResetCSS } from "@acerohernan/pancakeui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <ModalProvider>
        <Component {...pageProps} />
        <ResetCSS />
      </ModalProvider>
    </ThemeProvider>
  );
}
