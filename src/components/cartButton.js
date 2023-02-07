import { useAppContext } from "./stateWrapper";
export default function CartButton({ item }) {
  const cart = useAppContext();
  function handleOnClick(e) {
    e.preventDefault();
    cart.addItemToCart(item);
    cart.openCart();
    console.log("cartButtton", item);
  }
  return (
    <button
      className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={handleOnClick}
    >
      Add to cart
    </button>
  );
}
