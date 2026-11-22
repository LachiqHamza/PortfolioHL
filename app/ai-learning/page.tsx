import { SiteNav } from "../components/site-nav";
import { PostCard } from "../components/post-card";
import type { CSSProperties } from "react";

const layers = [
  { x: 76, ys: [128, 226, 324, 422], type: "input" },
  { x: 250, ys: [92, 194, 296, 398, 500], type: "hidden" },
  { x: 442, ys: [138, 252, 366, 480], type: "hidden" },
  { x: 644, ys: [200, 314, 428], type: "output" },
];

const connections = layers.slice(0, -1).flatMap((layer, layerIndex) =>
  layer.ys.flatMap((y, nodeIndex) =>
    layers[layerIndex + 1].ys.map((targetY, targetIndex) => ({
      x1: layer.x,
      y1: y,
      x2: layers[layerIndex + 1].x,
      y2: targetY,
      key: `${layerIndex}-${nodeIndex}-${targetIndex}`,
      active: (nodeIndex + targetIndex + layerIndex) % 5 === 0,
    })),
  ),
);

export default function AI() {
  return (
    <main className="path-page ai-page">
      <SiteNav />
      <section className="path-hero ai-hero">
        <div className="ai-copy">
          <p className="kicker">AI LEARNING / 03</p>
          <h1>Curious about how systems <i>learn.</i></h1>
          <p className="lead">I&apos;m building a solid AI foundationΓÇöfrom Python and data to models, evaluation, and useful applications.</p>
          <div className="ai-signal" aria-label="Learning signal is active"><span className="signal-dot" /><span>LEARNING SIGNAL / ACTIVE</span><b>24.8 ms</b></div>
        </div>

        <div className="neural-observatory" aria-hidden="true">
          <div className="observatory-hud hud-top"><span>MODEL / 03</span><span>LATENT SPACE</span></div>
          <div className="observatory-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <svg className="network network-svg" viewBox="0 0 720 560" fill="none">
            <defs>
              <linearGradient id="lineFlow" x1="76" y1="280" x2="644" y2="280" gradientUnits="userSpaceOnUse"><stop stopColor="#4E67FF" stopOpacity=".16" /><stop offset=".48" stopColor="#B66DFF" stopOpacity=".9" /><stop offset="1" stopColor="#64F5E8" stopOpacity=".72" /></linearGradient>
              <radialGradient id="nodeCore"><stop stopColor="#F6FFFF" /><stop offset=".2" stopColor="#72F7ED" /><stop offset="1" stopColor="#4E67FF" stopOpacity=".12" /></radialGradient>
              <filter id="nodeGlow" x="-300%" y="-300%" width="600%" height="600%"><feGaussianBlur stdDeviation="8" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <g className="network-lines">{connections.map((line) => <line key={line.key} className={line.active ? "active-line" : ""} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="url(#lineFlow)" />)}</g>
            <g className="network-nodes">{layers.flatMap((layer) => layer.ys.map((y, index) => <g key={`${layer.x}-${y}`} className={`node node-${layer.type}`} style={{ "--node-delay": `${(index * 0.17) % 0.8}s` } as CSSProperties}><circle className="node-halo" cx={layer.x} cy={y} r="25" /><circle className="node-ring" cx={layer.x} cy={y} r="9" /><circle className="node-core" cx={layer.x} cy={y} r="3.5" fill="url(#nodeCore)" filter="url(#nodeGlow)" /></g>))}</g>
          </svg>
          <div className="layer-labels"><span>INPUTS</span><span>FEATURES</span><span>OUTPUT</span></div>
          <div className="observatory-hud hud-bottom"><span>VECTOR FIELD / 3D</span><span>SYNCED 99.8%</span></div>
        </div>
      </section>

      <section className="learning-roadmap">{["Python foundations", "Data analysis", "Machine learning", "Neural networks", "AI applications"].map((x, i) => <div key={x}><b>0{i + 1}</b><span>{x}</span></div>)}</section>
      <section className="currently"><p className="kicker">CURRENTLY LEARNING</p><h2>Prompt engineering &amp; model evaluation</h2><p>Exploring how to make AI-assisted features useful, measurable, and grounded in the actual job to be done.</p></section>
      <section className="posts"><div className="section-heading"><p className="kicker">LEARNING LOG &amp; EXPERIMENTS</p><h2>Small experiments, real curiosity.</h2></div><div className="post-grid"><PostCard tag="FOUNDATIONS" title="From Python to practical data work" description="Notes from strengthening the fundamentals."/><PostCard tag="EXPERIMENT" title="Evaluating prompts beyond vibes" description="A simple way to compare prompt quality and consistency."/><PostCard tag="NEXT" title="Building useful AI applications" description="Turning the learning roadmap into small projects."/></div></section>
    </main>
  );
}
