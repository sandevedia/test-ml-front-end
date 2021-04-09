export default function Prices({ amount, decimals, className }) {
  return (
    <div className={className}>
      <span id="amount">$ {amount}</span>
      {decimals !== 0 && <span id="decimals">{decimals}</span>}
    </div>
  );
}
