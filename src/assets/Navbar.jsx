import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate();


    return (
        <header 
            className="bg-none font-mono text-white fixed top-0 left-0 w-full p-4 flex gap-8 z-50"
        >
            <p onClick={(e) => navigate("/")} class="mr-auto cursor-pointer">John Braun Dev</p> {/*TODO: change to a later when routing is implemented */}
            <p onClick={(e) => navigate("/contact")} class="cursor-pointer">Contact</p>
            <p onClick={(e) => navigate("/projects")} class="cursor-pointer">Projects</p>
            <p onClick={(e) => navigate("/adventures")} class="cursor-pointer">Adventures</p>
        </header>
    )
}