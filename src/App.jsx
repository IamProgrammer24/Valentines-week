import { BrowserRouter, Routes, Route } from "react-router-dom";

import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
// import Day3 from "./pages/Day3";
// import Day4 from "./pages/Day4";
// import Day5 from "./pages/Day5";
// import Day6 from "./pages/Day6";
// import Day7 from "./pages/Day7";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/day/1" element={<Day1 />} />
        <Route path="/" element={<Day2 />} />
        {/* <Route path="/day/3" element={<Day3 />} />
        <Route path="/day/4" element={<Day4 />} />
        <Route path="/day/5" element={<Day5 />} />
        <Route path="/day/6" element={<Day6 />} />
        <Route path="/day/7" element={<Day7 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
