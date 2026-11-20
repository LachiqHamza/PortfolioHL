"use client";
import Link from "next/link";
import { useState } from "react";
const links=[['Home','/'],['About','/about'],['Full Stack','/full-stack'],['QA Assurance','/qa-assurance'],['AI Learning','/ai-learning'],['Projects','/projects']];
export function SiteNav(){const[open,setOpen]=useState(false);return <header className="site-nav"><Link href="/" className="wordmark"><b>HL</b><span>HAMZA<br/>LACHIQ</span></Link><button className="nav-toggle" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button><nav className={open?'visible':''}>{links.map(([label,href])=><Link onClick={()=>setOpen(false)} key={href} href={href}>{label}</Link>)}</nav><a className="nav-contact" href="mailto:hamza@example.com">Let&apos;s talk ↗</a></header>}
