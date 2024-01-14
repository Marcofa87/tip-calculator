export default function Bill({ value, onSetValue }) {
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
