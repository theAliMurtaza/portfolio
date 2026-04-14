import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev.io — Full Stack Software Engineer",
  description: "Full Stack, React Native, React.js, Node.js, Python & AI Engineer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
