import trilogy from '@/assets/trilogy.asset.json';
import kiss from '@/assets/kiss-land.asset.json';
import beauty from '@/assets/beauty-behind-the-madness.asset.json';
import starboy from '@/assets/starboy.asset.json';
import after from '@/assets/after-hours.asset.json';
import dawn from '@/assets/dawn-fm.asset.json';
import tomorrow from '@/assets/hurry-up-tomorrow.asset.json';
import portrait from '@/assets/portrait.asset.json';
import stage from '@/assets/stage.asset.json';
import hero from '@/assets/cinematic-hero.jpg';
export const images = { hero, portrait: portrait.url, stage: stage.url, after: after.url, starboy: starboy.url, dawn: dawn.url };
export const albums = [
 { title: 'Trilogy', year: '2012', image: trilogy.url, description: 'Where the night began. Three mixtapes that redefined the sound of alternative R&B.', tracks: ['Wicked Games', 'The Morning', 'House of Balloons / Glass Table Girls'] },
 { title: 'Kiss Land', year: '2013', image: kiss.url, description: 'A neon-lit world of isolation, ambition and unfamiliar cities. The first studio chapter.', tracks: ['Professional', 'Belong to the World', 'Adaptation'] },
 { title: 'Beauty Behind the Madness', year: '2015', image: beauty.url, description: 'Dark confession meets pop brilliance. A singular voice finds the world stage.', tracks: ['The Hills', 'Can’t Feel My Face', 'Earned It'] },
 { title: 'Starboy', year: '2016', image: starboy.url, description: 'A new identity. Electric production and fearless reinvention, alongside Daft Punk.', tracks: ['Starboy', 'I Feel It Coming', 'Die for You'] },
 { title: 'After Hours', year: '2020', image: after.url, description: 'A red-suited descent into heartbreak, excess and the beautiful loneliness of the night.', tracks: ['Blinding Lights', 'Save Your Tears', 'After Hours'] },
 { title: 'Dawn FM', year: '2022', image: dawn.url, description: 'One last broadcast before the light. A hypnotic journey through a radio-shaped purgatory.', tracks: ['Take My Breath', 'Out of Time', 'Sacrifice'] },
 { title: 'Hurry Up Tomorrow', year: '2025', image: tomorrow.url, description: 'The final chapter of the trilogy. A reckoning with the past, and a step into the unknown.', tracks: ['Timeless', 'São Paulo', 'Cry for Me'] },
];
export const journeyMilestones = [
 { year: '1990', label: 'ORIGIN', title: 'Born in Toronto', image: portrait.url, description: 'Abel Makkonen Tesfaye is born on February 16 in Toronto and raised in the city by his Ethiopian immigrant family.', detail: 'Scarborough and Toronto would remain part of the music’s identity: a place of cold streets, after-dark ambition and the earliest foundations of his sound.' },
 { year: '2010', label: 'THE MYSTERY', title: 'A voice without a face', image: trilogy.url, description: 'Three songs appear online under the name The Weeknd, introducing an anonymous new voice and a shadowy form of alternative R&B.', detail: 'The anonymity focused every bit of attention on the music. Early listeners and blogs spread the songs before the person behind them was widely known.' },
 { year: '2011', label: 'THE MIXTAPES', title: 'House of Balloons and the trilogy', image: trilogy.url, description: 'House of Balloons, Thursday and Echoes of Silence arrive as free mixtapes in a single year, building an immersive world of desire, isolation and nocturnal Toronto.', detail: 'The three projects established the visual and emotional language that would define his earliest era. House of Balloons was later shortlisted for Canada’s Polaris Music Prize.' },
 { year: '2012', label: 'THE STAGE', title: 'From anonymity to the crowd', image: stage.url, description: 'After his first live appearances, The Weeknd reaches international festival stages and formally compiles the mixtape era as Trilogy.', detail: 'Live performance turned a cult internet discovery into a physical experience. Trilogy brought remastered versions of the three mixtapes to a global audience.' },
 { year: '2013', label: 'THE FIRST WORLD', title: 'Kiss Land', image: kiss.url, description: 'His debut studio album creates a neon, cinematic universe shaped by travel, unfamiliar cities and the disorientation of life beyond Toronto.', detail: 'Kiss Land expanded the project beyond the mixtape atmosphere, pairing a larger visual world with a tour built around its uneasy, nocturnal mood.' },
 { year: '2015', label: 'GLOBAL BREAKTHROUGH', title: 'The world learns his name', image: beauty.url, description: 'Earned It, The Hills and Can’t Feel My Face move The Weeknd into global pop’s center while Beauty Behind the Madness reaches number one in the United States.', detail: 'The era connected his darker songwriting to arena-scale pop. Earned It earned an Academy Award nomination, and Beauty Behind the Madness won the Grammy for Best Urban Contemporary Album.' },
 { year: '2016', label: 'REINVENTION', title: 'Starboy', image: starboy.url, description: 'A radical haircut, a red-and-blue visual language and collaborations with Daft Punk signal a clean break and a new electronic chapter.', detail: 'The title track became his third US number-one single. The album’s success confirmed that reinvention—not repetition—would be central to his career.' },
 { year: '2020', label: 'AFTER HOURS', title: 'A cinematic phenomenon', image: after.url, description: 'A bloodied red-suit character carries an uninterrupted story across videos and performances as Blinding Lights becomes a defining global hit.', detail: 'After Hours fused album, character and cinema into one extended campaign. Billboard later ranked Blinding Lights as the number-one song on its Greatest Songs of All Time Hot 100 chart.' },
 { year: '2021', label: 'THE BIGGEST STAGE', title: 'Super Bowl LV', image: stage.url, description: 'The Weeknd headlines the Super Bowl LV halftime show in Tampa, translating the After Hours world into a stadium-scale performance.', detail: 'The performance moved through the stands and field with a huge ensemble of red-jacketed figures, extending one of his most recognizable visual eras.' },
 { year: '2022', label: 'DAWN & THE ROAD', title: 'A new broadcast begins', image: dawn.url, description: 'Dawn FM imagines a radio station in purgatory, while the After Hours Til Dawn Tour brings both connected albums to stadiums around the world.', detail: 'Narrated by Jim Carrey, Dawn FM reframed an album as a continuous broadcast. The stadium tour transformed the two records into one monumental live world.' },
 { year: '2023', label: 'SCREEN & SOUND', title: 'The Idol and Popular', image: portrait.url, description: 'Abel co-creates and stars in HBO’s The Idol, extending his work into television while Popular becomes one of the project’s lasting musical moments.', detail: 'The series marked his first leading television role. Popular, featuring Madonna and Playboi Carti, carried the soundtrack beyond the screen.' },
 { year: '2025', label: 'THE FINAL CHAPTER', title: 'Hurry Up Tomorrow', image: tomorrow.url, description: 'The album completes the trilogy begun by After Hours and Dawn FM, followed by a feature film that expands the era into psychological cinema.', detail: 'Hurry Up Tomorrow looks backward through the mythology of The Weeknd while confronting what comes after it—a finale presented as both record and film.' },
] as const;
export const worlds = [
 { title: 'MUSIC', to: '/music' as const, image: after.url, description: 'Every album. Every emotion.', number: '01' },
 { title: 'JOURNEY', to: '/journey' as const, image: starboy.url, description: 'The evolution of an icon.', number: '02' },
 { title: 'FANS', to: '/fans' as const, image: stage.url, description: 'A world brought together.', number: '03' },
 { title: 'NEWS', to: '/news' as const, image: portrait.url, description: 'The next chapter unfolds.', number: '04' },
];
export const news = [
 { title: 'After Hours Til Dawn: the final Asia chapter', date: 'MAY 2026', category: 'TOURS', image: stage.url, description: 'The official tour announcement brings the After Hours Til Dawn experience to Asia.', url: 'https://www.theweeknd.com/' },
  { title: 'Hurry Up Tomorrow. The trilogy is complete.', date: 'JAN 31, 2025', category: 'RELEASES', image: tomorrow.url, description: 'Following After Hours and Dawn FM, the new album closes a cinematic musical trilogy.', url: 'https://music.apple.com/us/album/hurry-up-tomorrow/1793702595' },
 { title: 'Timeless: two worlds, one sound', date: 'SEP 27, 2024', category: 'COLLABORATIONS', image: starboy.url, description: 'The Weeknd and Playboi Carti unite on Timeless, a single from the Hurry Up Tomorrow era.', url: 'https://www.youtube.com/watch?v=5EpyN_6dqyk' },
  { title: 'Inside the world of Dawn FM', date: 'JAN 7, 2022', category: 'MUSIC', image: dawn.url, description: 'Revisit the imaginary radio station, cinematic storytelling and synth-pop of Dawn FM.', url: 'https://music.apple.com/us/album/dawn-fm/1603164027' },
];
export function pageHead(title: string, description: string, image?: string) {
 return { meta: [{ title: `${title} — The Weeknd · XO Fan Archive` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} — The Weeknd` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }, ...(image?.startsWith('https://') ? [{ property: 'og:image', content: image }, { name: 'twitter:image', content: image }] : [])] };
}
