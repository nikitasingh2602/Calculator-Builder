import React from "react";

const DraggableButton = ({ label }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", label);
  };

  return (
    <button
      draggable
      onDragStart={handleDragStart}
      className="bg-blue-500 text-white px-4 py-2 m-1 rounded shadow"
    >
      {label}
    </button>
  );
};

export default DraggableButton;
