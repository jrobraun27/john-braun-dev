import { useParams, Link } from "react-router-dom";
import { ARTICLES } from "../data/posts.js"; // Ensure this path is correct
import { useEffect } from "react";

export default function ArticlePage() {
    const { slug } = useParams();
    console.log("Current URL Slug:", slug);
    
    // 1. Find the current article based on the URL slug
    const articleIndex = ARTICLES.findIndex((a) => a.slug === slug);
    const article = ARTICLES[articleIndex];

    // Scroll to top automatically when the article changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Error handling if the slug is wrong
    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white bg-zinc-950">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Adventure Not Found</h1>
                    <Link to="/adventures" className="text-blue-400 hover:underline">Return to Adventures</Link>
                </div>
            </div>
        );
    }

    // 2. Logic for "Next Article" (loops back to start if at the end)
    const nextIndex = (articleIndex + 1) % ARTICLES.length;
    const nextArticle = ARTICLES[nextIndex];

    return (
        <div className="min-h-screen bg-zinc-950 text-white font-mono pt-32 pb-20">
            <div className="max-w-3xl mx-auto px-6">
                
                {/* Back Button */}
                <Link to="/adventures" className="text-gray-400 hover:text-white transition-colors mb-12 inline-block text-xs tracking-widest">
                    &larr; BACK TO INDEX
                </Link>
                
                {/* Hero Image */}
                <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-[300px] md:h-[450px] object-cover rounded-2xl mb-10 shadow-2xl border border-white/10"
                />

                {/* Header */}
                <div className="space-y-2 mb-8">
                    <p className="text-blue-400 text-xs uppercase tracking-[0.3em] font-bold">{article.date}</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                        {article.title}
                    </h1>
                </div>
                
                {/* Body Content */}
                <div className="text-gray-300 text-lg space-y-8 leading-relaxed whitespace-pre-line border-t border-white/10 pt-10">
                    <p className="text-white text-xl font-medium leading-snug">
                        {article.preview}
                    </p>
                    <p>{article.content}</p>
                </div>

                {/* --- Next Article Section --- */}
                <div className="mt-24 pt-12 border-t border-white/10">
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mb-8 text-center">
                        Continue Exploring
                    </p>
                    
                    {/* If next article is not ready, show a non-clickable "Coming Soon" div */}
                    {!nextArticle.ready ? (
                        <div className="flex flex-col items-center text-center py-10 opacity-50">
                            <span className="text-2xl md:text-3xl font-bold text-gray-400 italic">
                                {nextArticle.title}
                            </span>
                            <span className="text-gray-500 text-xs mt-3 uppercase tracking-widest">
                                Coming Soon — {nextArticle.date}
                            </span>
                        </div>
                    ) : (
                        /* If next article is ready, show the original Link */
                        <Link 
                            to={`/adventures/${nextArticle.slug}`}
                            className="group block p-1 bg-gradient-to-r from-transparent via-white/5 to-transparent hover:via-white/10 transition-all"
                        >
                            <div className="flex flex-col items-center text-center py-10">
                                <span className="text-2xl md:text-3xl font-bold group-hover:text-blue-400 transition-all duration-300">
                                    {nextArticle.title} &rarr;
                                </span>
                                <span className="text-gray-500 text-xs mt-3 uppercase tracking-widest">
                                    {nextArticle.date}
                                </span>
                            </div>
                        </Link>
                    )}
                </div>

            </div>
        </div>
    );
}