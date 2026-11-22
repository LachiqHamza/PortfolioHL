"use client";

import { useState } from "react";
import { TransitionLink } from "./transition-link";
import { useLanguage } from "./language-provider";
import type { Language } from "./locale";

const links = [["Home", "/"], ["About", "/about"], ["Full Stack", "/full-stack"], ["QA Assurance", "/qa-assurance"], ["AI Learning", "/ai-learning"], ["Projects", "/projects"]] as const;
export function SiteNav() { const [open, setOpen] = useState(false); const { language, setLanguage, t } = useLanguage(); return <header className="site-nav"><TransitionLink href="/" className="wordmark"><b>HL</b><span>HAMZA<br />LACHIQ</span></TransitionLink><button className="nav-toggle" onClick={() => setOpen(!open)}>{t(open ? "Close" : "Menu")}</button><nav className={open ? "visible" : ""}>{links.map(([label, href]) => <TransitionLink onClick={() => setOpen(false)} key={href} href={href}>{t(label)}</TransitionLink>)}</nav><label className="language-picker"><span className="sr-only">{t("Language")}</span><select value={language} onChange={(event) => setLanguage(event.target.value as Language)} aria-label={t("Language")}><option value="en">EN</option><option value="fr">FR</option></select></label><a className="nav-contact" href="mailto:lachiq.hamza37@gmail.com">{t("Let's talk ?")}</a></header>; }

