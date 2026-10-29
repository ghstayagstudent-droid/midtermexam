import React, { useState } from "react";
import "./App.css";


function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      disabled
    />
  );
}


function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  const [displayText, setDisplayText] = useState("10 Things That Require Zero Talent");

  const handleClick = (e) => {
    e.preventDefault();
    const value = e.target.innerText;

    if (value === "1") setDisplayText("1 - Being On Time");
    else if (value === "2") setDisplayText("2 - Making An Effort");
    else if (value === "3") setDisplayText("3 - Being High Energy");
    else if (value === "4") setDisplayText("4 - Having A Positive Attitude");
    else if (value === "5") setDisplayText("5 - Being Passionate");
    else if (value === "6") setDisplayText("6 - Using Good Body Language");
    else if (value === "7") setDisplayText("7 - Being Coachable");
    else if (value === "8") setDisplayText("8 - Doing A Little Extra");
    else if (value === "9") setDisplayText("9 - Being Prepared");
    else if (value === "0") setDisplayText("0 - Having A Strong Work Ethic");
    else if (value === "NAME") setDisplayText("GIN HANNER TAYAG");
    else if (value === "SUBJ") setDisplayText("C-PCIT9");
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">GIN HANNER TAYAG - BIST-DA3A</h1>

        <Display value={displayText} />

        <div className="buttons">
          <Button label={"7"} onClick={handleClick} />
          <Button label={"8"} onClick={handleClick} />
          <Button label={"9"} onClick={handleClick} />

          <Button label={"4"} onClick={handleClick} />
          <Button label={"5"} onClick={handleClick} />
          <Button label={"6"} onClick={handleClick} />

          <Button label={"1"} onClick={handleClick} />
          <Button label={"2"} onClick={handleClick} />
          <Button label={"3"} onClick={handleClick} />

          <Button label={"NAME"} onClick={handleClick} />
          <Button label={"0"} onClick={handleClick} />
          <Button label={"SUBJ"} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
