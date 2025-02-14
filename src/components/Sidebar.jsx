import { useDrag } from "react-dnd";

const DraggableItem = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BUTTON",
    item: { type, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`cursor-pointer bg-blue-500 text-white p-2 rounded shadow ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {label}
    </div>
  );
};

const components = [
  { type: "number", label: "1" },
  { type: "number", label: "2" },
  { type: "number", label: "3" },
  { type: "number", label: "4" },
  { type: "number", label: "5" },
  { type: "number", label: "6" },
  { type: "number", label: "7" },
  { type: "number", label: "8" },
  { type: "number", label: "9" },
  { type: "number", label: "0" },
  { type: "operator", label: "+" },
  { type: "operator", label: "-" },
  { type: "operator", label: "*" },
  { type: "operator", label: "/" },
  { type: "action", label: "=" },
];

const Sidebar = () => {
  return (
    <div className="w-1/4 p-4 bg-gray-200">
      {components.map((comp, index) => (
        <DraggableItem key={index} {...comp} />
      ))}
    </div>
  );
};

export default Sidebar;
