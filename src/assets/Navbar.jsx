export default function Navbar() {
    return (
        <header 
            className="bg-none font-mono text-white fixed top-0 left-0 w-full p-4 flex gap-8 z-50"
        >
            <p class="mr-auto">John Braun Dev</p> {/*TODO: change to a later when routing is implemented */}
            <p>Contact</p>
            <p>Projects</p>
        </header>
    )
}