import cliffside from "../../public/van-isle.webp"
import prishtina from "../../public/prishtina_bib.jpg"
import tirana from "../../public/tirana_pyramid.webp"
import caucaus from "../../public/caucaus.jpg"

const ARTICLES = [
    {
        id: 1,
        title: "Prishtina, Europe's Last Hidden Gem",
        date: "February 2026",
        preview: "Exploring the nostalgic capital of Europe's most controversial country...",
        image: prishtina, 
        ready: false
    },
    {
        id: 2,
        title: "Tirana, A City Scarred from the Past",
        date: "February 2026",
        preview: "Discovering the stories behind Tirana's troubled architecture...",
        image: tirana,
        ready: false
    }, {
        id: 3,
        title: "Armenia and Georgia, The Forgotten Alps",
        date: "March 2026",
        preview: "Discovering the stories behind the Switzerland of the East...",
        image: caucaus,
        ready: false
    }, 
];

export default function Adventures() {
    return (    
        <section 
            className="font-mono relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-20 text-white"
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(16, 0, 76, 0) 0%, rgba(0, 20, 68, 0.39) 100%), url(${cliffside})` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 w-full max-w-6xl px-4"> 
                <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-tighter">Latest Adventures</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ARTICLES.map((article) => (
                        <article 
                            key={article.id} 
                            className={`bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 transition-all duration-300 ${
                                article.ready ? "hover:scale-105" : "opacity-75"
                            }`}
                        >
                            <img 
                                src={article.image} 
                                alt={article.title} 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 text-left">
                                {/* Date Section Added Here */}
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-1">
                                    {article.date}
                                </p>
                                
                                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                                <p className="text-sm text-gray-200 mb-6 line-clamp-2">{article.preview}</p>
                                
                                {article.ready ? (
                                    <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:text-blue-300 hover:border-blue-300 transition-colors">
                                        Read More
                                    </button>
                                ) : (
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 italic">
                                        Coming Soon
                                    </span>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4">
                        Let's get in touch. Reach me at:
                    </p>
                    <a href="mailto:obraun27@gmail.com" className="text-blue-300 hover:underline">
                        obraun27@gmail.com
                    </a>
                </div>
            </div>
        </section>
    )
}