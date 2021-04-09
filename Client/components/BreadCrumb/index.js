import styles from "./BreadCrumb.module.css";
import Link from "next/link";
import { getItemCategory } from "../../services/config";
import useApi from "../../customHooks/useApi";

export default function BreadCrumb({ cat }) {
  const resCategoria = useApi(getItemCategory + cat[0], {});

  return (
    <ul className={styles.ul}>
      {!resCategoria.response
        ? null
        : !resCategoria.response.path_from_root
        ? null
        : resCategoria.response.path_from_root.map((_cat, index) => {
            return (
              <li className={styles.li} key={index}>
                <Link href="/">
                  <a className={styles.link}>{_cat.name}</a>
                </Link>
                <div className={styles.icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                    <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
                  </svg>
                </div>
              </li>
            );
          })}
    </ul>
  );
}
