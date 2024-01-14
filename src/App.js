import { useState } from "react";
import "./index.css";

function App() {
  const [value, setValue] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [satisfaction2, setSatisfaction2] = useState(0);

  const showPrice = value > 0;

  function handleReset() {
    // eslint-disable-next-line no-restricted-globals
    confirm("Are you sure to reset all the values?");
    setValue(0);
    setSatisfaction(0);
    setSatisfaction2(0);
  }

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
      {showPrice && (
        <Price
          value={value}
          onSatisfaction={satisfaction}
          onSatisfactionFriend={satisfaction2}
        />
      )}
      <Reset onhandleReset={handleReset} />
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

function Reset({ onhandleReset }) {
  return (
    <>
      <button className="resetButton" onClick={onhandleReset}>
        Reset
      </button>
    </>
  );
}

export default App;
