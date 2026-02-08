import StoryBar from "../components/StoryBar";
import FloatingHearts from "../components/FloatingHearts";

export default function Day1() {
  const params = new URLSearchParams(window.location.search);
  const to = params.get("to") || "My Love";
  const from = params.get("from") || "Someone 💕";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-red-200 relative">

<FloatingHearts/>
      <StoryBar current={1} />

      <div className="bg-white/80 backdrop-blur p-10 rounded-3xl text-center max-w-md">
        <h1 className="text-3xl font-bold text-pink-600 mb-3">
          Rose Day 🌹
        </h1>

        <p className="mb-3">
          For <b>{to}</b>
        </p>

        <div className="text-6xl mb-4">🌹</div>

        <p>Just like this rose, my feelings bloom daily 💖</p>

        <p className="mt-5 text-sm text-gray-500">
          From {from}
        </p>
      </div>
    </div>
  );
}
