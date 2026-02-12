export default function ArticleModal({ article, onClose }) {
    if (!article) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Overlay/Backdrop */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
                onClick={onClose}
            ></div>

            {/* Modal Content Box */}
            <div className="relative bg-zinc-900 border border-white/20 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl text-left">
                
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-blue-400 text-2xl z-20"
                >
                    &times;
                </button>

                <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-64 object-cover"
                />

                <div className="p-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">{article.date}</p>
                    <h2 className="text-3xl font-bold mb-6">{article.title}</h2>
                    
                    <div className="text-gray-300 space-y-4 leading-relaxed">
                        {/* In a real blog, you'd have a 'content' field in your data */}
                        <p>{article.preview}</p>
                        <p>{article.content}</p>
                        <p>{article.content}</p>
                        <p>{article.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}