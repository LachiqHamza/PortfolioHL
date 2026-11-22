import type { Metadata } from "next";
import "./globals.css";
import { PageTransition } from "./components/page-transition";

export const metadata: Metadata = {
  title: "Hamza Lachiq ΓÇö Digital Systems",
  description: "Full Stack Developer, QA Enthusiast and AI Learner based in Morocco.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><PageTransition />{children}</body></html>;
}
