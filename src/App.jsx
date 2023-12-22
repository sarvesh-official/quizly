import QuestionBox from "./components/QuestionBox";
import { useEffect, useState } from "react";
function App() {
  //Theme Change

  let [darkmode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  return (
    <>
      <div className="header flex justify-between">
        <h1 id="logo" className="text-stroke text-6xl">
          QUIZLY
        </h1>
        <button
          onClick={() => setDarkMode(!darkmode)}
          className="modeChange p-4 mr-40 "
        >
          <img
            src={
              darkmode ? "../public/dark/mode.png" : "../public/light/mode.png"
            }
          />
        </button>
      </div>
      <div className="main flex justify-center align-middle mt-20 ">
        <QuestionBox />
      </div>
    </>
  );
}

export default App;
