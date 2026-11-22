import { SiteNav } from "../components/site-nav";
import { PostCard } from "../components/post-card";

type StackItem = { icon: string; name: string; note?: string };

const iconSlugs: Record<string, string> = {
  Java: "java", TypeScript: "typescript", "C++": "cplusplus", Python: "python", PHP: "php",
  "Spring Boot": "springboot", "Spring Security": "springsecurity", React: "react", "Next.js": "nextdotjs", Angular: "angular", Symfony: "symfony",
  RabbitMQ: "rabbitmq", "gRPC / Protobuf": "grpc", Kafka: "apachekafka", ZooKeeper: "apachekafka",
  PostgreSQL: "postgresql", MySQL: "mysql", "SQL Server": "microsoftsqlserver", MongoDB: "mongodb", Prisma: "prisma", Hibernate: "hibernate",
  Jenkins: "jenkins", Docker: "docker", Kubernetes: "kubernetes", GitLab: "gitlab", Vercel: "vercel",
  Keycloak: "keycloak", JWT: "keycloak", "OAuth 2.0 / OIDC": "oauth", Git: "git", GitFlow: "git", "Merge Requests": "gitlab",
};

const stackGroups: { icon: string; label: string; title: string; items: StackItem[] }[] = [
  { icon: "<>" , label: "01 / LANGUAGES", title: "The building blocks", items: [
    { icon: "Jv", name: "Java" }, { icon: "TS", name: "TypeScript" }, { icon: "C++", name: "C++" }, { icon: "Py", name: "Python" }, { icon: "PHP", name: "PHP" },
  ] },
  { icon: "FX", label: "02 / FRAMEWORKS", title: "Product surfaces", items: [
    { icon: "SB", name: "Spring Boot" }, { icon: "Ss", name: "Spring Security" }, { icon: "Re", name: "React" }, { icon: "Nx", name: "Next.js" }, { icon: "Ng", name: "Angular" }, { icon: "Sf", name: "Symfony" },
  ] },
  { icon: "Γåö", label: "03 / DISTRIBUTED SYSTEMS", title: "Services in motion", items: [
    { icon: "MQ", name: "RabbitMQ", note: "message broker" }, { icon: "gR", name: "gRPC / Protobuf", note: "service-to-service" }, { icon: "Kf", name: "Kafka", note: "event streaming" }, { icon: "ZK", name: "ZooKeeper", note: "coordination" }, { icon: "GW", name: "API Gateway", note: "edge routing" }, { icon: "LB", name: "Load Balancing", note: "traffic control" }, { icon: "Eu", name: "Eureka", note: "service discovery" },
  ] },
  { icon: "DB", label: "04 / DATA", title: "Storage with intent", items: [
    { icon: "Pg", name: "PostgreSQL" }, { icon: "My", name: "MySQL" }, { icon: "MS", name: "SQL Server" }, { icon: "Mo", name: "MongoDB" }, { icon: "Pr", name: "Prisma", note: "ORM" }, { icon: "Hb", name: "Hibernate", note: "Spring Boot ORM" }, { icon: "Mb", name: "MyBatis", note: "persistence mapper" },
  ] },
  { icon: "ΓåÆ", label: "05 / DELIVERY", title: "From commit to runtime", items: [
    { icon: "Je", name: "Jenkins" }, { icon: "Do", name: "Docker" }, { icon: "K8s", name: "Kubernetes" }, { icon: "GL", name: "GitLab" }, { icon: "Ve", name: "Vercel", note: "web hosting" },
  ] },
  { icon: "Γùç", label: "06 / SECURITY", title: "Trust by design", items: [
    { icon: "BC", name: "BCrypt / Argon2", note: "password hashing" }, { icon: "TLS", name: "TLS / HTTPS", note: "encrypted transport" }, { icon: "JWT", name: "JWT", note: "signed sessions" }, { icon: "KC", name: "Keycloak", note: "identity & access" }, { icon: "OIDC", name: "OAuth 2.0 / OIDC", note: "authentication flows" },
  ] },
  { icon: "Γîÿ", label: "07 / COLLABORATION", title: "A clean history", items: [
    { icon: "Git", name: "Git" }, { icon: "GF", name: "GitFlow" }, { icon: "MR", name: "Merge Requests" },
  ] },
];

function StackAtlas() {
  return <section className="stack-atlas">
    <div className="section-heading"><p className="kicker"><span className="section-title-icon" aria-hidden="true">Γ£ª</span>THE TOOLBOX</p><h2>Full-stack, end to end.</h2><p className="atlas-intro">A practical stack for shipping secure products: from typed interfaces and APIs to events, data, infrastructure, and deployment.</p></div>
    <div className="stack-groups">{stackGroups.map(group => <section className="stack-group" key={group.label}>
      <div className="stack-group-heading"><p className="kicker"><span className="group-icon" aria-hidden="true">{group.icon}</span>{group.label}</p><h3>{group.title}</h3></div>
      <div className="stack-items">{group.items.map(item => <div className="stack-item" key={item.name}><span className="stack-icon" aria-hidden="true">{iconSlugs[item.name] ? <img src={`/icons/${iconSlugs[item.name]}.svg`} alt="" /> : item.icon}</span><span><b>{item.name}</b>{item.note && <small>{item.note}</small>}</span></div>)}</div>
    </section>)}</div>
  </section>;
}

export default function FullStack(){return <main className="path-page full"><SiteNav/><section className="path-hero"><div><p className="kicker">FULL STACK / 01</p><h1>Systems that are <i>built to hold up.</i></h1><p className="lead">I build the services, interfaces, and foundations that turn operational problems into useful products.</p></div><pre>const hamza = {'{'}{`\n`}  focus: ["reliable systems", "clear UX"],{`\n`}  backend: ["Java", "Spring Boot", "Microservices"],{`\n`}  frontend: ["TypeScript", "React", "Next.js"],{`\n`}  delivery: ["Docker", "Kubernetes", "CI/CD"]{`\n`}{'}'}</pre></section><section className="skills-strip">{['Java','TypeScript','Spring Boot','React','Kafka','PostgreSQL','Docker','Kubernetes','JWT','Git'].map(x=><span key={x}>{x}</span>)}</section><StackAtlas/><section className="featured"><p className="kicker">FEATURED EXPERIENCE</p><h2>TERRAIN360</h2><div><p>Developed an internal HR platform with Spring Boot and React.</p><p>Created secured REST APIs with JWT and role-based access control.</p><p>Built real-time notifications for 125+ active users and helped deliver a high-availability planning system handling <b>250,000+ appointments/day.</b></p></div></section><section className="posts"><div className="section-heading"><p className="kicker">POSTS &amp; CASE STUDIES</p><h2>What I&apos;m building.</h2></div><div className="post-grid"><PostCard tag="CASE STUDY / SYSTEM DESIGN" title="Appointment Manager" description="A planning system designed for operational scale and reliability." href="/projects"/><PostCard tag="BUILD LOG / API SECURITY" title="Secure roles, clearer operations" description="Notes from building Spring Security and JWT flows."/><PostCard tag="PRODUCT / REAL TIME" title="Why a notification should feel instant" description="WebSocket patterns for teams that need timely information."/></div></section></main>}
