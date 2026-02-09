import vanIsle from "../../public/van-isle.jpg"
import githubLogo from "../../public/github-logo.png"

export default function Hero() {
    return (
        <section 
            className="flex font-mono relative bg-cover bg-center bg-no-repeat h-screen justify-center items-center text-center text-white p-8"
            style={{ backgroundImage: `url(${vanIsle})` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content Container */}
            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to John Braun Dev
                </h1>
                <p className="text-lg md:text-xl">
                    Building modern web applications with React and Tailwind CSS.
                </p>
            </div>
        </section>
    )
}