import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { worlds } from '@/lib/artist-data';
export function WorldCards() { return <div className="world-grid">{worlds.map(w => <Link to={w.to} key={w.title} className="world-card group"><img src={w.image} alt={`${w.title} — The Weeknd archive`} loading="lazy"/><div className="world-shade"/><span className="card-number">{w.number} /</span><div className="world-card-content"><div><h3>{w.title}</h3><p>{w.description}</p></div><ArrowUpRight className="size-5"/></div></Link>)}</div>; }
export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) { return <section className="page-intro"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="intro-description">{description}</p><div className="intro-line"/></section>; }
