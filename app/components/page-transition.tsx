"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const labels: Record<string, string> = {
  "/": "HOME / DIGITAL SYSTEMS",
  "/about": "ABOUT / THE PERSON BEHIND THE SYSTEMS",
  "/full-stack": "FULL STACK / RELIABLE FOUNDATIONS",
  "/qa-assurance": "QA ASSURANCE / DAILY PRACTICE",
  "/ai-learning": "AI LEARNING / CURIOUS SYSTEMS",
  "/projects": "PROJECTS / SELECTED WORK",
};

export function PageTransition() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState(labels[pathname] ?? "HAMZA LACHIQ / PORTFOLIO");

  useEffect(() => {
    const start = (event: Event) => {
      const nextPath = (event as CustomEvent<{ path?: string }>).detail?.path ?? pathname;
      setLabel(labels[nextPath] ?? "HAMZA LACHIQ / PORTFOLIO");
      setActive(true);
    };
    window.addEventListener("portfolio-transition", start);
    return () => window.removeEventListener("portfolio-transition", start);
  }, [pathname]);

  useEffect(() => {
    if (!active) return;
    const timer = window.setTimeout(() => setActive(false), 780);
    return () => window.clearTimeout(timer);
  }, [active, pathname]);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("main > section, .post-card, .stack-group");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    targets.forEach((target, index) => {
      target.classList.add("motion-ready");
      target.style.setProperty("--reveal-delay", `${Math.min(index * 55, 330)}ms`);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.08 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  if (!active) return null;
  return (
    <div className="route-transition" role="status" aria-live="polite">
      <div className="route-transition-chrome"><span>{label}</span><span>OPENING VIEW</span></div>
      <div className="route-transition-window"><div className="route-transition-grid" /><div className="route-transition-ring" /><span>ENTER</span></div>
      <div className="route-transition-footer"><span>Γù╝</span><span>SPATIAL NAVIGATION / 01</span><span>Γù╝</span></div>
    </div>
  );
}

