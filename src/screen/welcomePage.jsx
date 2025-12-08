import { useNavigate } from "react-router-dom"
import { TopMenu } from "./subscreens/topmenu";

export function WelcomePage() {
    const navigate = useNavigate();
    return (
        <>
            <TopMenu />
            <header className="mt-10 mx-16">
                <p className="mx-2 text-lg text-left font-semibold text-neutral-500">React + Vite + TailwindCSS</p>
                <p className="text-8xl text-left font-normal text-white max-w-6xl">Ultimate solution for creating QR Codes.</p>
                <p className="text-neutral-400 font-medium text-lg mt-8 mx-2 max-w-3xl">
                    Adjust every detail, preview changes in real time, and export your <span className="text-cyan-400"> QR code </span> ready for web, print, or sharing. <span className="text-cyan-400">Simple to start, powerful when you need more control.</span>
                </p>
                <button onClick={() => navigate("/home")}className="text-neutral-300 mx-2 my-5 font-normal text-xl bg-neutral-900 hover:bg-neutral-600 transition-all duration-300 ease-out hover:scale-[1.03] rounded-2xl min-h-12 min-w-32">Get Started</button>
            </header>
        </>
    );
    }
