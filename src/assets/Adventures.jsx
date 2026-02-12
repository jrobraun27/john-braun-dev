import cliffside from "../../public/van-isle.webp";
import { ARTICLES } from "./data/posts";
import ArticleCard from "./adventure_utils/ArticleCard";

export default function Adventures() {
    return (    
        <section 
            className="font-mono relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-20 text-white"
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(16, 0, 76, 0) 0%, rgba(0, 20, 68, 0.39) 100%), url(${cliffside})` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 w-full max-w-6xl px-4"> 
                <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-tighter">
                    Latest Adventures
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ARTICLES.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
}