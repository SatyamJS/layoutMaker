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
    const elementClassName = buttonName === "connector" || buttonName === "tbconnector" || buttonName==="btconnector" ? "element no-animation" : "element";
    const newElement = (
      <Draggable>
        <div className={elementClassName +" "+elementSrc.split(".")[0]} >
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

  const handleSimulateClick = () => {
    const connectorElement = document.querySelectorAll(".connector");
    const verticalConnectorElement = document.querySelectorAll(".tbconnector");
    const verticalBTConnectorElement = document.querySelectorAll(".btconnector")
    connectorElement.forEach((element) => {
      let Div = document.createElement("div");
      Div.className="goldendiv"
      element.insertBefore(Div, element.firstChild);
    });
    verticalConnectorElement.forEach((element) => {
      let Div = document.createElement("div");
      Div.className="goldendivVer"
      element.insertBefore(Div, element.secondChild);
    });
    verticalBTConnectorElement.forEach((element) => {
      let Div = document.createElement("div");
      Div.className="goldendivVerBT"
      element.insertBefore(Div, element.secondChild);
    });
    
  };

  return (
    <div>
      <div className="navbar">
        <button onClick={handleButtonClick}>Lathe</button>
        <button onClick={handleButtonClick}>Crane</button>
        <button onClick={handleButtonClick}>Compressor</button>
        <button onClick={handleButtonClick}>Connector</button>
        <button onClick={handleButtonClick}>TBconnector</button>
        <button onClick={handleButtonClick}>BTconnector</button>
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
