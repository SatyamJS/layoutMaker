import { useState } from "react";
import Draggable from "react-draggable";
import "./App.css";

function App() {
  const [elements, setElements] = useState([]);

  const handleButtonClick = (e) => {
    const buttonName = e.target.innerText.toLowerCase();
    const elementSrc = `${buttonName}.png`;
    const newElement = (
      <Draggable>
        <div className="element">
          <img src={elementSrc} alt={buttonName} />
          <div className="element-buttons">
            <button onClick={() => handleSizeChange(10)}>+</button>
            <button onClick={() => handleSizeChange(-10)}>-</button>
            <button onClick={() => handleDeleteElement(newElement)}>x</button>
          </div>
        </div>
      </Draggable>
    );
    setElements((prevState) => [...prevState, newElement]);
  };

  const handleDeleteElement = (elementToDelete) => {
    setElements((prevState) =>
      prevState.filter((element) => element !== elementToDelete)
    );
  };

  const handleSizeChange = (amount) => {
    const lastElement = elements[elements.length - 1];
    const elementStyle = window.getComputedStyle(lastElement);
    const currentWidth = parseInt(elementStyle.getPropertyValue("width"));
    const currentHeight = parseInt(elementStyle.getPropertyValue("height"));
    const newWidth = currentWidth + amount;
    const newHeight = currentHeight + amount;
    lastElement.style.width = `${newWidth}px`;
    lastElement.style.height = `${newHeight}px`;
  };

  return (
    <div>
      <div className="navbar">
        <button onClick={handleButtonClick}>Lathe</button>
        <button onClick={handleButtonClick}>Crane</button>
        <button onClick={handleButtonClick}>Compressor</button>
        <button onClick={handleButtonClick}>Conveyor Belt</button>
        <button onClick={handleButtonClick}>Pump</button>
        <button onClick={handleButtonClick}>Generator</button>
        
      </div>
      <div className="container">
        {elements.map((element, index) => (
          <div className="draggable-element" key={index}>
            {element}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;

