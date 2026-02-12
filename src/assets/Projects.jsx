import sunset from '../../public/van-isle.jpg'

export default function Projects() {
    return (
        <section 
                    // 1. Changed py-72 to min-h-screen to fill the whole screen
                    // 2. Added flex items-center justify-center to center the content div
                    className="font-mono relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat text-center text-white"
                    style={{ backgroundImage: `linear-gradient(to bottom, rgba(16, 0, 76, 0) 0%, rgba(0, 20, 68, 0.39) 100%), url(${sunset})` }}
                >
                    <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 flex flex-col items-center px-4"> 
                <p className="text-lg md:text-xl max-w-2xl mb-8">
                    Let's get in touch. You can reach me via email at <a href="mailto:obraun27@gmail.com">obraun27@gmail.com</a>
                </p>
            </div>
        </section>
    )
}