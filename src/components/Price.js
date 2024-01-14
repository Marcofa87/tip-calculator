export default function Price({ value, onSatisfaction, onSatisfactionFriend }) {
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
