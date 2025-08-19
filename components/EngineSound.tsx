"use client";
import { useRef } from "react";
import { PlayCircle } from "lucide-react"; // icon

export default function EngineSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // restart if clicked again
      audioRef.current.play();
    }
  };

  return (
    <section className="w-full bg-black text-white py-12 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Feel the Thump 🔥</h2>
      
      <button
        onClick={playSound}
        className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full shadow-lg"
      >
        <PlayCircle size={24} />
        <span>Start Engine</span>
      </button>

      {/* Audio File */}
      <audio ref={audioRef} src="/sounds/classic350-start.mp3" preload="auto" />
    </section>
  );
}
