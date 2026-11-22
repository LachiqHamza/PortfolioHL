"use client";
import { TransitionLink } from "./transition-link";
import { useState } from "react";
const links=[['Home','/'],['About','/about'],['Full Stack','/full-stack'],['QA Assurance','/qa-assurance'],['AI Learning','/ai-learning'],['Projects','/projects']];
export function SiteNav(){const[open,setOpen]=useState(false);return <header className="site-nav"><TransitionLink href="/" className="wordmark"><b>HL</b><span>HAMZA<br/>LACHIQ</span></TransitionLink><button className="nav-toggle" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button><nav className={open?'visible':''}>{links.map(([label,href])=><TransitionLink onClick={()=>setOpen(false)} key={href} href={href}>{label}</TransitionLink>)}</nav><a className="nav-contact" href="mailto:hamza@example.com">Let&apos;s talk Γåù</a></header>}
