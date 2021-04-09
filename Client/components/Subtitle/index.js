export default function Subtitle({ condition, sold_quantity, className }) {
  return (
    <p className={className}>
      {condition === "new" ? "Nuevo" : "Usado"} - {sold_quantity}
      vendidos
    </p>
  );
}
