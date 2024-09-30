import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");

  const colors = [
    "red",
    "green",
    "blue",
    "olive",
    "gray",
    "yellow",
    "pink",
    "purple",
    "lavender",
    "white",
    "black",
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          {colors.map((color) => (
            <button
              onClick={() => setColor(color)}
              className="outline-none px-6 py-2 font-bold rounded-full shadow-lg"
              style={{ backgroundColor: color }}
            >
              {color}
            </button>
          ))}

          {/* 
          <button
            onClick={() => setColor("red")}
            className="outline-none px-6 py-2 text-white rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-6 py-2 text-white rounded-full shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-6 py-2 text-white rounded-full shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-6 py-2 text-white rounded-full shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
           */}
        </div>
      </div>
    </div>
  );
};

export default App;
