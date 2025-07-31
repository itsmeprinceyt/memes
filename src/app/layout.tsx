import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memes",
  description: "Just laugh or idk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Suspense fallback={<div>Loading ...</div>}>
        {children}
        </Suspense>
      </body>
    </html>
  );
}
