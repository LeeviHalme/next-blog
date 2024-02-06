import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { dark as baseTheme } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import "./globals.css";
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Blog",
  description: "Simple blog app built with Next.js",
};

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <ClerkProvider appearance={{ baseTheme }}>
      <html lang="en">
        <Head>
          <ColorSchemeScript />
        </Head>
        <body className={inter.className}>
          <MantineProvider defaultColorScheme="auto">{props.children}</MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
