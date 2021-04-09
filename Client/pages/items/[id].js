import { useRouter } from "next/router";
import useApi from "../../customHooks/useApi";
import { get_item_api } from "../../services/config";
import { ItemDetails, Loader, BreadCrumb } from "../../components";
import { useState } from "react";

function ItemDetailPage() {
  const router = useRouter();
  let id = router.query.id;
  const resItem = useApi(get_item_api + id, {});

  if (!resItem.response) {
    return null;
  }

  return (
    <>
      {resItem.response.item ? (
        <>
          <BreadCrumb cat={""} />
          <ItemDetails
            item={resItem.response.item}
            description={resItem.response.description}
          />
        </>
      ) : (
        <div className="text-center mt-5">
          <p>Parece que esta página no existe</p>
        </div>
      )}
    </>
  );
}

export default ItemDetailPage;
