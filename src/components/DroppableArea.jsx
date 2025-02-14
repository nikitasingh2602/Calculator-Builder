import useCalculatorStore from "../store";

const DroppableArea = () => {
  const { items, addItem, removeItem } = useCalculatorStore();

  const [, drop] = useDrop(() => ({
    accept: "BUTTON",
    drop: (item) => addItem(item),
  }));

  return (
    <div
      ref={drop}
      className="border-2 border-dashed p-4 min-h-[200px] bg-gray-100"
    >
      {items.length === 0 ? (
        <p className="text-gray-500">Drop components here</p>
      ) : (
        items.map((item, index) => (
          <button
            key={index}
            className="bg-gray-800 text-white px-4 py-2 m-1 rounded"
            onClick={() => removeItem(index)}
          >
            {item.label} ❌
          </button>
        ))
      )}
    </div>
  );
};

const calculateResult = (items) => {
  const expression = items.map((item) => item.label).join("");
  try {
    return eval(expression); // ⚠️ Be cautious with eval(), use safer alternatives in production!
  } catch (error) {
    return "Error";
  }
};

const handleClick = (index) => {
  const item = items[index];

  if (item.label === "=") {
    const result = calculateResult(items.slice(0, -1));
    setItems([{ type: "result", label: result }]);
  } else {
    removeItem(index);
  }
};

export default DroppableArea;
