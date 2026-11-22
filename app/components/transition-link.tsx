"use client";

import Link, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";

type TransitionLinkProps = LinkProps & Omit<ComponentPropsWithoutRef<"a">, "href" | "onClick"> & { children: ReactNode; onClick?: (event: MouseEvent<HTMLAnchorElement>) => void };

export function TransitionLink({ href, children, onClick, ...props }: TransitionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || typeof href !== "string" || href.startsWith("#")) return;
    window.dispatchEvent(new CustomEvent("portfolio-transition", { detail: { path: href } }));
  };
  return <Link href={href} onClick={handleClick} {...props}>{children}</Link>;
}

