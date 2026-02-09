import vanIsle from "../../public/van-isle.jpg"
import linkedinLogo from "../../public/linkedin.png"

export default function Hero() {
    return (
        <section 
            className="font-mono relative bg-cover bg-center bg-no-repeat py-72 text-center text-white"
            style={{ backgroundImage: `linear-gradient(to bottom, rgba(16, 0, 76, 0) 0%, rgba(0, 20, 68, 0.39) 100%), url(${vanIsle})` }} //
        >
            <div className="absolute inset-0 bg-black/40"></div> {/* */}

            <div className="relative z-10 flex flex-col items-center justify-center"> {/* Added flex for vertical/horizontal control */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to John Braun Dev
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Building modern web applications with React and Tailwind CSS.
                </p>

                <div className="flex items-center justify-center gap-6">
                    <a 
                        href="https://github.com/jrobraun27" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75 transition-all hover:scale-110"
                    >
                        <img 
                            src="https://cdn.simpleicons.org/github/white" 
                            alt="GitHub" 
                            className="w-10 h-10" 
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/johnbraun27/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:opacity-75 transition-all hover:scale-110"
                    >
                        {/* Fix: Used CDN for LinkedIn to match the GitHub style and stay white */}
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                            alt="LinkedIn" 
                            className="w-10 h-10 invert" 
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}