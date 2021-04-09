import Link from "next/link";
import styles from "./ItemList.module.css";
import { Row, Col } from "reactstrap";
import { Shipping } from "../../components";

export default function ItemList({ item }) {
  const url = `/items/${item.id}`;
  return (
    <Row>
      <Col lg={3} md={3} xs={6}>
        <Link href={url}>
          <img src={item.picture} alt="" className={styles.img_picture} />
        </Link>
      </Col>
      <Col lg={4} md={4} xs={4}>
        <h4 className={styles.amount}>$ {item.price.amount}</h4>
        <Shipping free_shipping={item.free_shipping} />
        <Link href={url}>
          <p className={styles.title}>{item.title}</p>
        </Link>
      </Col>
      <Col></Col>
    </Row>
  );
}
