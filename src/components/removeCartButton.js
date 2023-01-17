// import style from "../styles/cartButton.module.css";
import { useAppContext } from "./stateWrapper";
export default function RemoveCartButton({ item }) {
  const cart = useAppContext();
  function handleOnClick() {
    cart.removeItemFromCart(item);
  }
  return <button onClick={handleOnClick}>Remove</button>;
}
