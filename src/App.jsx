import React from "react";
import DraggableButton from "./components/DraggableButton";
import DropZone from "./components/DropZone";
import Calculator from "./components/Calculator";

const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "+",
  "Clear",
  "=",
];

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">
        Drag & Drop Calculator Builder
      </h1>
      <div className="flex gap-2 mb-4">
        {buttons.map((label) => (
          <DraggableButton key={label} label={label} />
        ))}
      </div>
      <DropZone />
      <Calculator />
    </div>
  );
};

export default App;
