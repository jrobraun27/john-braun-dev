export default function ArticleCard({ article, onOpen }) {
    return (
        <article className={`bg-white/10 backdrop-blur-md rounded-lg overflow-hidden border border-white/20 transition-all duration-300 ${article.ready ? "hover:scale-105" : "opacity-75"}`}>
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-6 text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-1">{article.date}</p>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-200 mb-6 line-clamp-2">{article.preview}</p>
                
                {article.ready ? (
                    <button 
                        onClick={onOpen} // Call the function here!
                        className="text-xs font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:text-blue-300 hover:border-blue-300 transition-colors"
                    >
                        Read More
                    </button>
                ) : (
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 italic">Coming Soon</span>
                )}
            </div>
        </article>
    );
}