import Link from "next/link";
export function PostCard({tag,title,description,href="#"}:{tag:string;title:string;description:string;href?:string}){return <article className="post-card"><p>{tag}</p><h3>{title}</h3><p className="post-copy">{description}</p><Link href={href}>Read post <span>↗</span></Link></article>}
