import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageIntro } from '@/components/editorial';
import { images, news, pageHead } from '@/lib/artist-data';
export const Route = createFileRoute('/news')({ head: () => pageHead('Dispatches from the night', 'Tour announcements, releases and collaborations from The Weeknd: a curated editorial fan archive.', images.stage), component: News });
function News() {
 const [category, setCategory] = useState('ALL');
 return <><PageIntro label="DISPATCHES FROM THE NIGHT" title="THE LATEST" description="New chapters, defining moments, and everything happening in the world of The Weeknd."/><section className="content-section"><div className="filter-row" aria-label="Filter news">{['ALL', 'RELEASES', 'TOURS', 'COLLABORATIONS', 'MUSIC'].map(c => <Button variant={category === c ? 'default' : 'ghost'} key={c} onClick={() => setCategory(c)} aria-pressed={category === c}>{c}</Button>)}</div><div className="news-grid">{news.filter(n => category === 'ALL' || n.category === category).map(n => <article className="news-item" key={n.title}><img src={n.image} alt={n.title} loading="lazy"/><div className="news-meta"><span>{n.category}</span><time>{n.date}</time></div><h2>{n.title}</h2><p>{n.description}</p><Button asChild variant="ghost" className="editorial-link"><a href={n.url} target="_blank" rel="noreferrer">VIEW ORIGINAL SOURCE<ArrowUpRight size={14}/></a></Button></article>)}</div></section></>;
}