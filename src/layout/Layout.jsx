import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";
import AssistWalkerIcon from "@mui/icons-material/AssistWalker";

function Layout({ children }) {
  const state = useSelector((store) => store.cart);

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Eli&Adrinna's Shop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          Developed by Bahman with Achila Achila <AssistWalkerIcon />
        </p>
      </footer>
    </>
  );
}

export default Layout;