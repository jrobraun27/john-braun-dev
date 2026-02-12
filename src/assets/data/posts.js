// data/posts.js
import prishtina from "../../../public/prishtina_bib.jpg"
import tirana from "../../../public/tirana_pyramid.webp"
import caucaus from "../../../public/caucaus.jpg"

export const ARTICLES = [
    {
        id: 1,
        slug: "prishtina-hidden-gem",
        title: "Prishtina, Europe's Last Hidden Gem",
        date: "February 2026",
        preview: "Exploring the nostalgic capital of Europe's most controversial country.",
        image: prishtina, 
        ready: false,
        content: "Prishtina is a city that defies expectations. From the brutalist masterpiece of the National Library to the bustling cafes of Mother Teresa Boulevard, it's a place where history is felt in every concrete corner. Despite its complex political status, the warmth of the locals and the vibrant youth culture make it one of the most underrated stops in the Balkans."
    },
    {
        id: 2,
        slug: "tirana-city-scarred",
        title: "Tirana, A City Scarred from the Past",
        date: "February 2026",
        preview: "Discovering the stories behind Tirana's troubled architecture.",
        image: tirana,
        ready: false,
        content: "Walking through Tirana is like reading a living history book. The city is a patchwork of Ottoman influence, Italian fascistic architecture, and colorful socialist-realist apartment blocks. The 'Pyramid,' once a monument to a dictator, now stands as a symbol of a city constantly reinventing itself amidst the echoes of its communist past."
    }, 
    {
        id: 3,
        title: "Armenia and Georgia, The Forgotten Alps",
        date: "March 2026",
        preview: "Discovering the stories behind the Switzerland of the East.",
        image: caucaus,
        ready: false,
        content: "The Caucasus mountains offer a rugged beauty that rivals the Swiss Alps but with a fraction of the crowds. Between the ancient monasteries perched on Armenian cliffs and the sprawling vineyards of Georgia's Kakheti region, this journey explores the intersection of deep-rooted Christian heritage and the wild, untamed landscapes of the East."
    }, 
];