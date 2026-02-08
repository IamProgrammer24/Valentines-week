import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "./Slides";
import FloatingHearts from "./FloatingHearts";

export default function Story() {
  const params = new URLSearchParams(window.location.search);
  const to = params.get("to") || "My Love";
  const from = params.get("from") || "Someone Special 💕";

  const [index, setIndex] = useState(0);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < slides.length - 1) setIndex(index + 1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [index]);

  const slide = slides[index];

  if (accepted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-100 relative">
        <FloatingHearts />
        <div className="bg-white p-10 rounded-3xl text-center shadow-xl">
          <h1 className="text-3xl font-bold text-pink-600">
            I knew it 😘💖
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-red-200"
      onClick={(e) => {
        if (e.clientX < window.innerWidth / 2 && index > 0)
          setIndex(index - 1);
        else if (index < slides.length - 1)
          setIndex(index + 1);
      }}
    >
      <FloatingHearts />

      {/* Progress Bars */}
      <div className="absolute top-3 left-3 right-3 flex gap-1">
        {slides.map((_, i) => (
          <div key={i} className="flex-1 h-1 bg-white/30 rounded">
            <motion.div
              className="h-full bg-white"
              animate={{ width: i <= index ? "100%" : "0%" }}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="bg-white/80 backdrop-blur p-10 rounded-3xl text-center max-w-md"
        >
          <h1 className="text-3xl font-bold text-pink-600 mb-2">
            {slide.title}
          </h1>

          <p className="mb-3">
            For <b>{to}</b>
          </p>

          <div className="text-6xl mb-4">{slide.emoji}</div>

          <p className="mb-5">{slide.message}</p>

          {slide.proposal && (
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setAccepted(true)}
                className="bg-pink-500 text-white px-6 py-2 rounded-full"
              >
                Yes 💕
              </button>

              <button
                onMouseEnter={(e) => {
                  e.target.style.position = "absolute";
                  e.target.style.top = Math.random() * 80 + "%";
                  e.target.style.left = Math.random() * 80 + "%";
                }}
                className="bg-gray-200 px-6 py-2 rounded-full"
              >
                No 🙈
              </button>
            </div>
          )}

          <p className="mt-5 text-sm text-gray-500">
            From {from}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
