export default function Price({ value, onSatisfaction, onSatisfactionFriend }) {
  const tip = (value * (onSatisfaction + onSatisfactionFriend)) / 100;
  const totalAmount = value + tip;

  return (
    <>
      <p className="price" style={tip > 10 ? { color: "blue" } : {}}>
        You paid: ${totalAmount} ($({value}) + $({tip}) tip)
      </p>
    </>
  );
}
