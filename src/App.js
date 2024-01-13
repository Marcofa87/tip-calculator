import { useState } from "react";

function App() {
  const [value, setValue] = useState("0");
  return (
    <>
      <Bill value={value} onSetValue={setValue} />
      <Percentage>
        <p>How did you like the service</p>
      </Percentage>
      <Percentage>
        <p>How did your friend like the service?</p>
      </Percentage>
      <Price value={value} />
      <Reset />
    </>
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
            onSetValue(e.target.value);
          }}
        ></input>
      </label>
    </>
  );
}

function Percentage({ children }) {
  const [satisfaction, setSatisfaction] = useState(0);
  console.log(satisfaction);

  return (
    <>
      {children}
      <select
        value={satisfaction}
        onChange={(e) => setSatisfaction(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>It was amazing(20%)</option>
      </select>
    </>
  );
}

function Price({ value }) {
  return (
    <>
      <p>You paid:${value} ($(X) + $(X) tip)</p>
    </>
  );
}

function Reset() {
  return (
    <>
      <button>Reset</button>
    </>
  );
}
export default App;
