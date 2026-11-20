import { SiteNav } from "../components/site-nav";

export default function About() {
  return (
    <main className="about-page">
      <SiteNav />
      <section className="about-hero">
        <div>
          <p className="kicker">ABOUT / 01</p>
          <h1>Reliable systems need a <i>human point of view.</i></h1>
          <p className="lead">I am Hamza Lachiq, a state engineer in computer science and networks. I care about the detail behind a calm product experience.</p>
        </div>
        <img src="/hamza-about.png" alt="Hamza Lachiq" />
      </section>
      <section className="about-details">
        <div><span>EDUCATION</span><h2>State Engineer in Computer Science &amp; Networks</h2><p>MIAGE option - connecting technology, systems, and practical business thinking.</p></div>
        <div><span>LANGUAGES</span><h2>Arabic - French - English</h2><p>Comfortable communicating across technical and professional contexts.</p></div>
        <div><span>OUTSIDE OF WORK</span><h2>Gaming - Fitness - Technology</h2><p>I enjoy building software products, exploring AI, and staying active.</p></div>
      </section>
    </main>
  );
}
