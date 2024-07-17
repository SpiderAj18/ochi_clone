import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

function Landingpage() {
  var maskerText = ["we create", "eye-openeing", "presentation"];

  return (
    <div className="w-full h-screen bg-zinc-950 pt-1">
      <div className="textstructure mt-52 px-20">
        {maskerText.map((item, index) => (
          <div className="masker ">
            <div className="w-fit flex items-end">
              {index===1&&(<div className="mr-5 w-[8vw] rounded-[20px] h-[5.7vw] relative -top-[1.2vw] bg-red-500 flex items-center justify-center text-5xl"><FaGooglePlay/></div>)}
              <h1 className="pt-[1vw] -mb-[1vw] text-[9vw] flex items-center font-['Founders_Grotesk_X-Condensed'] font-bold leading-[7vw]  uppercase">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <div
            key={index}
            className="font-light tracking-tight text-lg py-4 px-16 mt-2 opacity-60"
          >
            {item}
          </div>
        ))}
        <div className="start flex justify-center items-center">
          <div className="px-5 py-1 border-[1px] rounded-3xl border-zinc-500 font-light tracking-tight text-lg opacity-60 uppercase">
            Start the project{" "}
          </div>
          <div className="w-8 h-8 m-2 rounded-full border-[1px] border-zinc-500 flex justify-center items-center">
            <span className="rotate-45">
              {" "}
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
