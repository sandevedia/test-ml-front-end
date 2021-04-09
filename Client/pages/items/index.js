import { useRouter } from "next/router";
import { Container } from "reactstrap";
import ItemList from "../../components/ItemList";
import useApi from "../../customHooks/useApi";
import { search_items } from "../../services/config";
import { BreadCrumb } from "../../components";

function ItemsPage() {
  const router = useRouter();
  const search = router.query.search;
  const resItems = useApi(search_items + search, {});

  return resItems.response ? (
    <>
      <BreadCrumb cat={resItems.response.categories} />
      <Container style={{ backgroundColor: "#ffffff", padding: 0 }}>
        {resItems.response.items?.map(i => {
          return <ItemList item={i} key={i.id} />;
        })}
      </Container>
    </>
  ) : null;
}

export default ItemsPage;
