import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Row, Col, Nav, Container, InputGroup } from "reactstrap";
import Image from "next/image";
import styles from "./NavSearch.module.css";

export default function NavSearch({ txt }) {
  const router = useRouter();
  const [search, setSearch] = useState(txt);

  const handleSubmit = async event => {
    event.preventDefault();
    if (search) {
      router.push("/items?search=" + search);
    }
  };

  return (
    <Nav className={styles.navSearch}>
      <Container>
        <Col xs={1}></Col>
        <Col xs={12}>
          <Row>
            <Col lg={1} md={2} sm={2} xs={2} className={styles.padd0}>
              <a className="navbar-brand" href="/">
                <img src="/images/Logo_ML.png" alt="Logo" className="logo" />
              </a>
            </Col>
            <Col lg={11} md={10} sm={10} xs={10} className={styles.padd0}>
              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nunca dejes de buscar"
                    value={search || ""}
                    onChange={event => setSearch(event.target.value)}
                  />
                  <span className="input-group-append">
                    <button className="btn btn-light border" type="submit">
                      <Image
                        src="/images/ic_Search.png"
                        alt=""
                        width={15}
                        height={15}
                      />
                    </button>
                  </span>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Col>
      </Container>
    </Nav>
  );
}
