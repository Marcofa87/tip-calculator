export default function Reset({ onhandleReset }) {
  return (
    <>
      <button className="resetButton" onClick={onhandleReset}>
        Reset
      </button>
    </>
  );
}
