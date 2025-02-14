import React, { useState } from "react";
import useStore from "../store";

const Calculator = () => {
  const { components, clearCalculator } = useStore();
  const [expression, setExpression] = useState("");

  const handleClick = (label) => {
    if (label === "=") {
      try {
        setExpression(eval(expression).toString());
      } catch {
        setExpression("Error");
      }
    } else if (label === "Clear") {
      setExpression("");
    } else {
      setExpression((prev) => prev + label);
    }
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded w-64">
      <div className="border p-2 mb-2 text-right">{expression}</div>
      <div className="grid grid-cols-4 gap-2">
        {components.map((c) => (
          <button
            key={c.id}
            onClick={() => handleClick(c.label)}
            className="bg-gray-300 p-2 rounded shadow"
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="flex mt-2">
        <button
          onClick={clearCalculator}
          className="bg-red-500 p-2 flex-1 text-white"
        >
          Clear
        </button>
        <button
          onClick={() => handleClick("=")}
          className="bg-green-500 p-2 flex-1 text-white"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
