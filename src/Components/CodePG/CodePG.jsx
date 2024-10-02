import React, { useState } from "react";
import CODEIMG from "../../Assets/Site-Images/CODE.png";

const CodePG = () => {
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState("");
  const [progress, setProgress] = useState(0);

  //   Handle Code Run
  const runCode = () => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 200); // Update progress every 200ms
    setRunning(true);
    setTimeout(() => {
      setOutput("ok");
      setRunning(false);
      setProgress(0);
    }, 2000);
  };

  return (
    <div className="bg-sec-dark rounded-md mx-auto w-11/12 xl:w-[1100px] mt-32 lg:mt-64 relative overflow-hidden">
      {/* Progress bar */}
      {running && (
        <div className="w-full bg-gray-200 h-1 overflow-hidden">
          <div
            className="bg-pri h-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      <div className=" text-white w-full flex flex-col justify-between  p-4 lg:p-8">
        {/* Navigation bar */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        {/* Code Image */}
        <div className="mt-8">
          <img
            onContextMenu={(e) => e.preventDefault()}
            draggable={false}
            src={CODEIMG}
            className={`select-none cursor-text w-[90%] lg:w-[600px] ${
              running && "animate-pulse transition-opacity"
            }`}
            alt="CODE"
          />
        </div>

        {/* Run code button */}
        <div className="w-full flex justify-end">
          <button
            onClick={runCode}
            className="bg-pri hover:opacity-90 text-white flex items-center justify-center gap-3 rounded-lg shadow-lg transition-colors duration-300 disabled:bg-ter-dark w-[100px] h-10"
            disabled={running}
          >
            {running ? (
              <div className="w-5 h-5 border-4 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
            ) : (
              "RUN"
            )}
          </button>
        </div>

        {output && !running && (
          <div className=" bg-ter-dark bg-opacity-50 text-white text-center p-2 mt-8">
            <span className="font-bold text-green-500">Build successful!</span>{" "}
            Dreams in progress... Success expanding!
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePG;
