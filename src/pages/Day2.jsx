// import { useState } from "react";
// import StoryBar from "../components/StoryBar";

// const noFlow = [
//   {
//     gif: "https://media.tenor.com/yhMZIW9G7BkAAAAi/peachcat-cat.gif",
//     title: "Please think again 🙄",
//     message: "itni jaldi na matt bolo 😥",
//   },
//   {
//     gif: "https://media.tenor.com/cyjenChBe1cAAAAi/peach-goma.gif",
//     title: "Ek aur baar soch lo 😣",
//     message: "kyu aisa kar rahi ho 😭",
//   },
//   {
//     gif: "https://media1.tenor.com/m/rJVp0llnho8AAAAC/%EB%AA%A8%EC%B0%8C-%EB%AA%A8%EB%AA%A8%EC%B0%8C.gif",
//     title: "Baby maan jao 😭",
//     message: "Kitna bhav khaogi 😭",
//     movingNo: true,
//   },
// ];

// export default function Day2() {
//   const params = new URLSearchParams(window.location.search);
//   const to = params.get("to") || "My Love";
//   const from = params.get("from") || "Someone 💕";

//   const [showNo, setShowNo] = useState(false);
//   const [index, setIndex] = useState(0);
//   const [accepted, setAccepted] = useState(false);

//   if (accepted) {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-pink-100">
//       <div className="text-center bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-pink-200">

//         <img
//           src="https://media.tenor.com/ONx_IN1MwtEAAAAi/mochi.gif"
//           alt="love gif"
//           className="w-48 mx-auto mb-5 rounded-xl"
//         />

//         <h1 className="text-3xl font-bold text-pink-600">
//           Mujhe pata tha… drama kar rahi thi bas 😌💕
//         </h1>

//       </div>
//     </div>
//   );
// }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-red-200 relative">
//       <StoryBar current={2} />

//       <div className="bg-white/80 p-10 rounded-3xl text-center relative">
//         <h1 className="text-3xl font-bold text-pink-600 mb-3">
//           Propose Day 💍
//         </h1>

//         <p className="mb-3">
//           For <b>{to}</b>
//         </p>

//         {!showNo && (
//           <>
//           <img
//       src="https://c.tenor.com/H1gpSxB6qvEAAAAd/tenor.gif"
//       alt="proposal gif"
//       className="w-44 mx-auto mb-4 rounded-xl shadow-md"
//     />
//             <p className="mb-4">Do you love me?? 💕</p>

//             <div className="flex gap-4 justify-center">
//               <button
//                 onClick={() => setAccepted(true)}
//                 className="bg-pink-500 text-white px-6 py-2 rounded-full"
//               >
//                 Yes 💕
//               </button>

//               <button
//                 onClick={() => setShowNo(true)}
//                 className="bg-gray-200 px-6 py-2 rounded-full"
//               >
//                 No 🙈
//               </button>
//             </div>
//           </>
//         )}

//         {showNo && (
//           <div>
//             <img src={noFlow[index].gif} className="w-40 mx-auto mb-3" />

//             <h2 className="font-bold">{noFlow[index].title}</h2>

//             <p className="mb-3">{noFlow[index].message}</p>

//             <div className="flex gap-4 justify-center">
//               <button
//                 onClick={() => setAccepted(true)}
//                 className="bg-pink-500 text-white px-6 py-2 rounded-full"
//               >
//                 Yes 💕
//               </button>

//               <button
//                 onMouseEnter={(e) => {
//                   if (noFlow[index].movingNo) {
//                     e.target.style.position = "absolute";
//                     e.target.style.top = Math.random() * 80 + "%";
//                     e.target.style.left = Math.random() * 80 + "%";
//                   }
//                 }}
//                 onClick={() => {
//                   if (index < noFlow.length - 1) setIndex(index + 1);
//                 }}
//                 className="bg-gray-200 px-6 py-2 rounded-full"
//               >
//                 No 🙈
//               </button>
//             </div>
//           </div>
//         )}

//         <p className="mt-4 text-sm text-gray-500">From {from}</p>
//       </div>
//     </div>
//   );
// }

import StoryBar from "../components/StoryBar";
import { motion } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";
import { useState, useEffect } from "react";

const noFlow = [
  {
    gif: "https://media.tenor.com/yhMZIW9G7BkAAAAi/peachcat-cat.gif",
    title: "Please think again 🙄",
    message: "itni jaldi na matt bolo 😥",
  },
  {
    gif: "https://media.tenor.com/cyjenChBe1cAAAAi/peach-goma.gif",
    title: "Ek aur baar soch lo 😣",
    message: "kyu aisa kar rahi ho 😭",
  },
  {
    gif: "https://media1.tenor.com/m/rJVp0llnho8AAAAC/%EB%AA%A8%EC%B0%8C-%EB%AA%A8%EB%AA%A8%EC%B0%8C.gif",
    title: "Baby maan jao 😭",
    message: "Kitna bhav khaoge 😭",
    movingNo: true,
  },
];

export default function Day2() {
  const [typedText, setTypedText] = useState("");
  const [step, setStep] = useState(0);

  const params = new URLSearchParams(window.location.search);
  const to = params.get("to") || "My Love";
  const from = params.get("from") || "Someone 💕";

  const [showNo, setShowNo] = useState(false);
  const [index, setIndex] = useState(0);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
  const messages = [
    "So... ek question puchu? 😌",
    "Do you love me? 💕",
  ];

  let messageIndex = 0;
  let charIndex = 0;

  const startTyping = () => {
    const typingInterval = setInterval(() => {
      setTypedText(messages[messageIndex].slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === messages[messageIndex].length) {
        clearInterval(typingInterval);

        if (messageIndex < messages.length - 1) {
          setTimeout(() => {
            messageIndex++;
            charIndex = 0;
            startTyping(); // restart typing for next message
          }, 1000);
        }
      }
    }, 40);
  };

  startTyping();
}, []);


  if (accepted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-100 px-4">
        <div className="text-center bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-pink-200 w-full max-w-md">
          <img
            src="https://media.tenor.com/ONx_IN1MwtEAAAAi/mochi.gif"
            alt="love gif"
            className="w-36 sm:w-44 md:w-48 mx-auto mb-4 rounded-xl"
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-600">
            Mujhe pata tha… drama kar rahi thi bas 😌💕
          </h1>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-red-200 relative px-4">
      <FloatingHearts />
      <StoryBar current={2} />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl text-center shadow-xl border border-pink-200 w-full max-w-md relative"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-600 mb-3">
          Propose Day 💍
        </h1>

        <p className="mb-3 text-sm sm:text-base">
          For <b>{to}</b>
        </p>

        {!showNo && (
          <>
            <img
              src="https://c.tenor.com/H1gpSxB6qvEAAAAd/tenor.gif"
              alt="proposal gif"
              className="w-32 sm:w-40 md:w-44 mx-auto mb-4 rounded-xl shadow-md"
            />

           <p className="mb-4 text-base sm:text-lg min-h-[28px]">
  {typedText}
  <span className="animate-pulse">|</span>
</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => setAccepted(true)}
                className="bg-pink-500 text-white px-6 py-2 rounded-full w-full sm:w-auto"
              >
                Yes 💕
              </button>

              <button
                onClick={() => setShowNo(true)}
                className="bg-gray-200 px-6 py-2 rounded-full w-full sm:w-auto"
              >
                No 🙈
              </button>
            </div>
          </>
        )}

        {showNo && (
          <div>
            <img
              src={noFlow[index].gif}
              className="w-32 sm:w-36 md:w-40 mx-auto mb-3"
            />

            <h2 className="font-bold text-base sm:text-lg">
              {noFlow[index].title}
            </h2>

            <p className="mb-3 text-sm sm:text-base">{noFlow[index].message}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={() => setAccepted(true)}
                className="bg-pink-500 text-white px-6 py-2 rounded-full w-full sm:w-auto"
              >
                Yes 💕
              </button>

              <button
                onMouseEnter={(e) => {
                  if (noFlow[index].movingNo) {
                    e.target.style.position = "absolute";
                    e.target.style.top = Math.random() * 80 + "%";
                    e.target.style.left = Math.random() * 80 + "%";
                  }
                }}
                onClick={() => {
                  if (index < noFlow.length - 1) setIndex(index + 1);
                }}
                className="bg-gray-200 px-6 py-2 rounded-full w-full sm:w-auto"
              >
                No 🙈
              </button>
            </div>
          </div>
        )}

        <p className="mt-4 text-xs sm:text-sm text-gray-500">From {from}</p>
      </motion.div>
    </div>
  );
}
