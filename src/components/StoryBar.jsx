export default function StoryBar({ current }) {
  return (
    <div className="absolute top-3 left-3 right-3 flex gap-1">
      {[1,2,3,4,5,6,7].map((d) => (
        <div key={d} className="flex-1 h-1 bg-white/30 rounded">
          <div
            className={`h-full rounded ${
              d <= current ? "bg-white" : "bg-transparent"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
