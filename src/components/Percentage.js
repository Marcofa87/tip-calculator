export default function Percentage({
  children,
  onSatisfaction,
  onSetSatisfaction,
}) {
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
