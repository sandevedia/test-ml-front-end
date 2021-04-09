import Head from "next/head";
import NavSearch from "../../components/NavSearch";
import { Container } from "reactstrap";

export default function DefaultLayout(props) {
  return (
    <Container fluid={true} style={{ backgroundColor: "#EEEEEE" }}>
      <Head>
        <title>Test Front-End ML</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavSearch />
      <Container>{props.children}</Container>
    </Container>
  );
}
