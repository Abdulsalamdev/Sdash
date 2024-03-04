import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { MantineProvider } from "@mantine/core";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <Component {...pageProps} />
        </MantineProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}