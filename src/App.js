import { useState } from "react";
import "./index.css";
import Reset from "./components/Reset";
import Price from "./components/Price";
import Percentage from "./components/Percentage";
import Bill from "./components/Bill";

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

export default App;
