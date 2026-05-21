import { useState } from "react";

export default function IEEENSUSBToggle() {
  const [showText, setShowText] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-black to-cyan-900 px-4">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 text-center max-w-md w-full">
        <div className="w-24 h-24 mx-auto rounded-full bg-cyan-400/20 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.7)] mb-6">
          <span className="text-4xl">⚡</span>
        </div>

        {/* Text */}
        <div
          className={`transition-all duration-500 ${
            showText
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-75 -translate-y-4 h-0 overflow-hidden"
          }`}
        >
          <h1 className="text-4xl font-extrabold text-white tracking-wider">
            IEEE NSU SB
          </h1>
        </div>

        {/* Button */}
        <button
          onClick={() => setShowText(!showText)}
          className="mt-8 px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-bold transition-all duration-300 hover:scale-105 shadow-lg"
        >
          {showText ? "Hide" : "Show"} IEEE NSU SB
        </button>
      </div>
    </div>
  );
}
