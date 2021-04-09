import styles from "./Shipping.module.css";

export default function Shipping({ className, free_shipping, logo }) {
  return !free_shipping ? null : (
    <div className={className || styles.Shipping}>
      <img
        className={styles.img}
        alt=""
        src={logo || "/images/ic_shipping.png"}
      />
    </div>
  );
}
