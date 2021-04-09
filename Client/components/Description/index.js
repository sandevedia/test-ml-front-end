import styles from "./Description.module.css";

export default function Description({ className, title, description }) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <p className={styles.whiteSpace}>{description}</p>
    </div>
  );
}
