import { useState } from "react";

const Color = ({ color, setSelectedColor, isSelected }) => {
  return (
    <div
      className={isSelected ? `${color} selected` : color}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === "red"}
        />
        <Color
          color="blue"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === "blue"}
        />
        <Color
          color="green"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === "green"}
        />
      </div>
    </div>
  );
};

export default App;
