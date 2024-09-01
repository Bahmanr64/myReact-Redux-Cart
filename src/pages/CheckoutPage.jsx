import BasketCard from "../components/BasketCard";
import Cart from "../assets/Cart.png";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import BasketSidebar from "../components/BasketSidebar";
import { useSelector } from "react-redux";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) {
    return (
      <div>
        <img
          src={Cart}
          style={{ position: "center", width: "1000", height: "1000" }}
        />
        <div>
          <h3>Cart is Empty</h3>
          <Link to="/">
            <FcHome style={{ width: "250px", height: "250px" }} />
            <h4>Back to Home</h4>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div>
        <BasketSidebar state={state} />
      </div>
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
