import { useState } from "react";
import "./index.css";

function App() {
  const [value, setValue] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [satisfaction2, setSatisfaction2] = useState(0);

  return (
    <div className="container">
      <Bill value={value} onSetValue={setValue} />
      <Percentage
        onSatisfaction={satisfaction}
        onSetSatisfaction={setSatisfaction}
      >
        <p className="question">How did you like the service</p>
      </Percentage>
      <Percentage
        onSatisfaction={satisfaction2}
        onSetSatisfaction={setSatisfaction2}
      >
        <p className="question">How did your friend like the service?</p>
      </Percentage>
      <Price
        value={value}
        onSatisfaction={satisfaction}
        onSatisfactionFriend={satisfaction2}
      />
      <Reset />
    </div>
  );
}

function Bill({ value, onSetValue }) {
  return (
    <>
      <label>
        How much was the bill? {value}
        <input
          value={value}
          type="text"
          onChange={(e) => {
            onSetValue(Number(e.target.value));
          }}
        ></input>
      </label>
    </>
  );
}

function Percentage({ children, onSatisfaction, onSetSatisfaction }) {
  console.log(onSatisfaction);

  return (
    <>
      {children}
      <select
        className="percentageSelect" // Applica la classe CSS qui
        value={onSatisfaction}
        onChange={(e) => onSetSatisfaction(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>It was amazing(20%)</option>
      </select>
    </>
  );
}

function Price({ value, onSatisfaction, onSatisfactionFriend }) {
  const tip = (value * (onSatisfaction + onSatisfactionFriend)) / 100;
  const totalAmount = value + tip;

  return (
    <>
      <p className="price">
        You paid: ${totalAmount} ($({value}) + $({tip}) tip)
      </p>
    </>
  );
}

function Reset() {
  return (
    <>
      <button className="resetButton">Reset</button>
    </>
  );
}

export default App;
