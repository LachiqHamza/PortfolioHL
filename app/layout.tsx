import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { PageTransition } from "./components/page-transition";
import { LanguageProvider } from "./components/language-provider";
import { languageFromCountry } from "./components/locale";

export const metadata: Metadata = { title: "Hamza Lachiq - Full Stack Developer", description: "Hamza Lachiq - Full Stack Developer specialising in Java, Spring Boot and React, based in Marrakech, Morocco." };
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { const requestHeaders = await headers(); const language = languageFromCountry(requestHeaders.get("x-vercel-ip-country")); return <html lang={language}><body><LanguageProvider initialLanguage={language}><PageTransition />{children}</LanguageProvider></body></html>; }

