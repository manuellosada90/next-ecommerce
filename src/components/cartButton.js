import style from "../styles/cartButton.module.css";
import { useAppContext } from "./stateWrapper";
export default function CartButton({ item }) {
  const cart = useAppContext();
  function handleOnClick() {
    cart.addItemToCart(item);
    cart.openCart();
  }
  return (
    <button className={style.button} onClick={handleOnClick}>
      Add to cart
    </button>
  );
}
