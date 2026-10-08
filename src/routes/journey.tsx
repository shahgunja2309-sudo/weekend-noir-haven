import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageIntro } from '@/components/editorial';
import { albums, pageHead } from '@/lib/artist-data';
export const Route = createFileRoute('/journey')({ head: () => pageHead('The journey', 'Trace Abel Tesfaye’s artistic evolution from anonymous mixtapes to The Weeknd’s cinematic global eras.'), component: Journey });
function Journey() {
 const [expanded, setExpanded] = useState<string | null>(null);
 return <><PageIntro label="THE EVOLUTION OF ABEL TESFAYE" title="THE JOURNEY" description="From the shadows of Toronto to the biggest stages in the world. Always moving forward. Never the same."/><section className="content-section"><div className="timeline">{albums.map((a, i) => <article className="timeline-item reveal" key={a.title}><div className="timeline-year">{a.year}</div><img className="timeline-image" src={a.image} alt={`The ${a.title} era`} loading="lazy"/><div className="timeline-copy"><p className="eyebrow">CHAPTER 0{i+1}</p><h2>{a.title}</h2><p>{a.description}</p><Button variant="ghost" className="editorial-link" aria-expanded={expanded === a.title} onClick={() => setExpanded(expanded === a.title ? null : a.title)}>{expanded === a.title ? 'CLOSE CHAPTER' : 'OPEN CHAPTER'}{expanded === a.title ? <ArrowUp size={14}/> : <ArrowDown size={14}/>}</Button>{expanded === a.title && <p className="timeline-detail">The soundtrack of this chapter: {a.tracks.join(' · ')}.</p>}</div></article>)}</div></section></>;
}