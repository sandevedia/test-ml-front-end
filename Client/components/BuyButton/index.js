//import styles from "./BuyButton.module.css";

export default function BuyButton({ className, title }) {
  const handleButtom = () => {
    alert("Do Something...");
  };

  return (
    <button className={className} onClick={handleButtom}>
      {title}
    </button>
  );
}
