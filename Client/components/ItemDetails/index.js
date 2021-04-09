import { Container, Row, Col } from "reactstrap";
import { BuyButton, Description, Prices, Subtitle } from "../../components";
import styles from "./ItemDetails.module.css";

export default function ItemDetails({ item, description }) {
  return (
    <Container className="white-bg">
      <Row>
        <Col md={8}>
          <figure className={styles.figure_picture}>
            <img src={item.picture} alt="" className={styles.img_picture} />
          </figure>
        </Col>
        <Col md={4}>
          <div className={styles.resumeBox}>
            <Subtitle
              condition={item.condition}
              sold_quantity={item.sold_quantity}
              className={styles.Subtitle}
            />
            <h1 className={styles.title}>{item.title}</h1>
            <Prices
              amount={item.price.amount}
              decimals={item.price.decimals}
              className={styles.prices}
            />
            <BuyButton className={styles.buy_btn} title="Comprar" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Description
            className={styles.description}
            title="Descripción del producto"
            description={description}
          />
        </Col>
      </Row>
    </Container>
  );
}
