import "@/styles/globals.css";
import type { AppProps } from "next/app";

 default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
