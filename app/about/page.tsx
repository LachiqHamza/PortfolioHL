import { SiteNav } from "../components/site-nav";

export default function About() {
  return <main className="about-page"><SiteNav /><section className="about-hero"><div><p className="kicker">ABOUT / 01</p><h1>Reliable systems need a <i>human point of view.</i></h1><p className="lead">I am Hamza Lachiq, a computer engineer from EMSI Marrakech. I build practical digital products with Java, Spring Boot, React, and a focus on security, clarity, and operational scale.</p></div><img src="/hamza-about.png" alt="Hamza Lachiq" /></section><section className="about-details"><div><span>EDUCATION</span><h2>Engineering Degree in Computer Science</h2><p>EMSI Marrakech � 2020-2025. A foundation in software, networks, and business-oriented information systems.</p></div><div><span>LANGUAGES</span><h2>Arabic � French � English</h2><p>Native Arabic, fluent French, and advanced English for technical and professional collaboration.</p></div><div><span>OUTSIDE OF WORK</span><h2>Open source � Games � Basketball</h2><p>I enjoy contributing to software, experimenting with game development, learning AI, and playing basketball.</p></div></section></main>;
}

