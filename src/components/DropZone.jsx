import React from "react";
import useStore from "../store";

const DropZone = () => {
  const { components, addComponent } = useStore();

  const handleDrop = (e) => {
    e.preventDefault();
    const label = e.dataTransfer.getData("text/plain");
    addComponent({ id: Date.now(), label });
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-2 border-dashed p-4 min-h-[100px] flex flex-wrap gap-2"
    >
      {components.map((c) => (
        <button key={c.id} className="bg-gray-300 px-4 py-2 rounded shadow">
          {c.label}
        </button>
      ))}
    </div>
  );
};

export default DropZone;
