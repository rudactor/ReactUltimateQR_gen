import reactsvg from "../../assets/react.svg";
import { useNavigate } from "react-router-dom"

export function TopMenu() {
    const navigate = useNavigate();
            return (
                <>
                    <header className="flex items-center justify-between min-h-16 bg-neutral-950 px-4">
                        {/* logo + name */}
                        <div className="flex items-center gap-4">
                            <img src={reactsvg} className="h-6" alt="logo" />
                            <button onClick={() => navigate("/")} className="transition-all hover:bg-neutral-800 hover:px-4 hover:py-2 duration-300 ease-[cubic-bezier(.4,0,.2,1)] font-normal tracking-wider text-2xl text-gray-50 hover:rounded-xl">
                                Ultimate QR Generator
                            </button>
                            <span className="font-light text-gray-200 text-base mx-5">
                                v0.0.1
                            </span>
                        </div>
        
                        {/* buttons */}
                        <div className="flex items-center gap-3">
                            <button onClick={() => navigate("/docs")} className="text-lg px-4 py-1.5 rounded-md font-light transition-colors duration-300 ease-out text-gray-200 hover:bg-neutral-800">
                                Docs
                            </button>
                            <button onClick={() => navigate("/sponsor")} className="text-lg px-4 py-1.5 rounded-md font-light transition-colors duration-300 ease-out text-gray-200 hover:bg-neutral-800">
                                Sponsor
                            </button>
                            <button onClick={() => navigate("/aboutme")} className="text-lg px-4 py-1.5 rounded-md font-light transition-colors duration-300 ease-out text-gray-200 hover:bg-neutral-800">
                                About me
                            </button>
                        </div>
                    </header>
        </>)
    }
