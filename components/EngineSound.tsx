"use client";
import { useRef, useState } from "react";
import { PlayCircle, Square } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EngineSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [running, setRunning] = useState(false);

  const toggleEngine = () => {
    if (!running) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        audioRef.current.loop = true;
      }
      setRunning(true);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setRunning(false);
    }
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-stretch">
      {/* LEFT SIDE: Engine Image */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6">
        <Image
          src="/images/royalEnfieldEngineClassic.avif"
          alt="Royal Enfield Engine"
          width={500}
          height={500}
          className="rounded object-contain w-full h-auto max-h-[80vh] drop-shadow-xl"
        />
      </div>

      {/* RIGHT SIDE: Engine Interaction */}
      <div className="flex-1 flex flex-col items-center justify-center text-white p-6 md:p-10 relative overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Feel the Thump 🔥
        </h2>

        <motion.button
          onClick={toggleEngine}
          className={`relative flex items-center space-x-2 px-8 md:px-10 py-4 md:py-5 rounded-full shadow-lg text-base md:text-lg font-semibold transition-all duration-300 ${
            running
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
          whileTap={{ scale: 0.9 }}
          animate={
            running
              ? { scale: [1, 1.05, 0.95, 1] }
              : { scale: 1 }
          }
          transition={
            running
              ? { repeat: Infinity, duration: 0.6, ease: "easeInOut" }
              : {}
          }
        >
          {running ? <Square size={24} /> : <PlayCircle size={24} />}
          <span>{running ? "Stop Engine" : "Start Engine"}</span>

          {running && (
            <motion.span
              className="absolute inset-0 rounded-full border-4 border-red-400/40"
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
            />
          )}
        </motion.button>

        {running && (
          <motion.div
            className="absolute bottom-8 right-10 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-3xl"
            animate={{ y: [-10, -30, -50], opacity: [0.4, 0.2, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
          />
        )}

        <audio ref={audioRef} src="/sounds/classic350-start.mp3" preload="auto" />
      </div>
    </section>
  );
}
