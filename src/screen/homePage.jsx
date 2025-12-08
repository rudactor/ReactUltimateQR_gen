import { TopMenu } from "./subscreens/topmenu";
import { useEffect, useRef, useState } from "react";
import { GenerateMatrix } from "../engine/core";
import { drawCustomQr } from "../engine/drawQR";

export function HomePage() {
const [text, setText] = useState("");
const [correction, setCorrection] = useState("M"); // L / M / Q / H
const canvasRef = useRef(null);

useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!text) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
    }

    const { matrix, size } = GenerateMatrix(text, correction);
    if (!matrix.length) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
    }

    drawCustomQr(matrix, size, canvas, { correctionLevel: correction });
}, [text, correction]);

return (
    <div className="min-h-screen bg-neutral-950">
    <TopMenu />

    <div className="mt-8 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-start">
        {/* LEFT: Controls */}
        <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5 md:p-6 space-y-5">
            <div>
                <h2 className="text-xl font-semibold text-white">
                    QR generator
                </h2>
                <p className="text-sm text-neutral-400 mt-1">
                    Enter content, choose error correction and tune appearance (soon).
                </p>
            </div>

            {/* Text input */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-300">
                    Content
                </label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full bg-black/70 border border-neutral-700 focus:border-cyan-400 focus:outline-none text-white text-sm p-2.5 rounded-md placeholder:text-neutral-500"
                    placeholder="Enter text or URL"
                />
                <p className="text-xs text-neutral-500">
                    Supports any text or URL. Longer text = denser QR.
                </p>
            </div>

            {/* Error correction */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-neutral-300">
                    Error correction level
                </label>
                <div className="flex items-center gap-2">
                    <select
                    value={correction}
                    onChange={(e) => setCorrection(e.target.value)}
                    className="bg-neutral-900 border border-neutral-700 text-white text-sm p-2.5 rounded-md focus:outline-none focus:border-cyan-400"
                    >
                    <option value="L">L — low (more data, less safety)</option>
                    <option value="M">M — medium (default)</option>
                    <option value="Q">Q — strong</option>
                    <option value="H">H — max safety, less data</option>
                    </select>
                </div>
            </div>

            {/* Placeholder for future options */}
            <div className="pt-4 border-t border-neutral-800 space-y-3">
            <p className="text-sm font-medium text-neutral-300">
                Appearance (coming soon)
            </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-500">
                    <div className="rounded-lg border border-neutral-800/70 bg-neutral-900/60 px-3 py-2">
                    Dot style
                    <div className="text-[11px] text-neutral-600">
                        squares / circles / custom
                    </div>
                    </div>
                    <div className="rounded-lg border border-neutral-800/70 bg-neutral-900/60 px-3 py-2">
                    Eye style
                    <div className="text-[11px] text-neutral-600">
                        classic / rounded / bold
                    </div>
                    </div>
                    <div className="rounded-lg border border-neutral-800/70 bg-neutral-900/60 px-3 py-2">
                    Colors & gradients
                    <div className="text-[11px] text-neutral-600">
                        foreground / background
                    </div>
                    </div>
                    <div className="rounded-lg border border-neutral-800/70 bg-neutral-900/60 px-3 py-2">
                    Logo / overlay
                    <div className="text-[11px] text-neutral-600">
                        center image support
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5 md:p-6 flex flex-col items-center">
            <div className="w-full max-w-xs aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center">
            <canvas
                ref={canvasRef}
                id="qr"
                width={350}
                height={350}
                className="block w-[80%] h-[80%]"
            />
            </div>
            <p className="font-normal text-base text-neutral-400 text-center mt-4">
            Live preview
            </p>
            <p className="text-xs text-neutral-500 text-center mt-1">
            QR is automatically updated as you type.
            </p>
        </div>
        </div>
    </div>
    </div>
);
}
