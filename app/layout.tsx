import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookmark",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
          <link rel="icon" href="/images/favicon-32x32.png" />
        </Head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
