import React from "react";
import { useState } from "react";
import Draggable from "react-draggable";
import "./App.css";

function App() {
  const [elements, setElements] = useState([]);

  const handleButtonClick = (e) => {
    const buttonName = e.target.innerText.toLowerCase();
    const elementSrc = `${buttonName}.png`;
    const elementRef = React.createRef();
    const elementClassName = buttonName === "connector" || buttonName === "vertical connector" ? "element no-animation" : "element";
    const newElement = (
      <Draggable>
        <div className={elementClassName}>
          <img src={elementSrc} alt={buttonName} ref={elementRef} />
          <div className="element-buttons">
            <button onClick={() => handleSizeChange(elementRef.current, 10)}>+</button>
            <button onClick={() => handleSizeChange(elementRef.current, -10)}>-</button>
            <button onClick={() => handleDeleteElement(newElement)}>x</button>
          </div>
        </div>
      </Draggable>
    );
    ;
    setElements((prevState) => [...prevState, newElement]);
  };

  const handleDeleteElement = (elementToDelete) => {
    setElements((prevState) =>
      prevState.filter((element) => element !== elementToDelete)
    );
  };

  const handleSizeChange = (element, amount) => {
    const elementStyle = window.getComputedStyle(element);
    const currentWidth = parseInt(elementStyle.getPropertyValue("width"));
    const currentHeight = parseInt(elementStyle.getPropertyValue("height"));
    const newWidth = currentWidth + amount;
    const newHeight = currentHeight + amount;
    element.style.width = `${newWidth}px`;
    element.style.height = `${newHeight}px`;
  };

  const handleConnectClick = () => {
    // Add logic to handle the "Connect" button click here
  };

  const handleSimulateClick = () => {
    const noAnimationElements = document.querySelectorAll(".no-animation");
    noAnimationElements.forEach((element) => {
      const goldenDiv = document.createElement("div");
      goldenDiv.className="goldendiv"
      element.insertBefore(goldenDiv, element.firstChild);
      element.insertBefore(goldenDiv, element.firstChild);
      element.insertBefore(goldenDiv, element.firstChild);
    });
  };

  return (
    <div>
      <div className="navbar">
        <button onClick={handleButtonClick}>Lathe</button>
        <button onClick={handleButtonClick}>Crane</button>
        <button onClick={handleButtonClick}>Compressor</button>
        <button onClick={handleButtonClick}>Connector</button>
        <button onClick={handleButtonClick}>Vertical Connector</button>
        <button onClick={handleButtonClick}>Pump</button>
        <button onClick={handleButtonClick}>Generator</button>
      </div>
      <div className="container">
        {elements.map((element, index) => (
          <div className="draggable-element" key={index}>
            {React.cloneElement(element, {
              key: index,
              handleSizeChange: handleSizeChange,
              handleDeleteElement: handleDeleteElement,
            })}
          </div>
        ))}
      </div>
      <div className="buttons-container">
        <button className="simulate-button" onClick={handleSimulateClick}>Simulate</button>
      </div>
    </div>
  );
}

export default App;
