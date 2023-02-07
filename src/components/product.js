import CartProducts from "./cartProducts";
import LatestProducts from "./latestProducts";
import ProductDetail from "./productDetail";
import StoreProducts from "./storeProducts";

export default function Product({ item, showAs, qty }) {
  if (showAs === "Page") {
    return <ProductDetail item={item} />;
  }
  if (showAs === "ListItem") {
    return <CartProducts item={item} qty={qty} />;
  }
  if (showAs === "latest") {
    return <LatestProducts item={item} />;
  }
  return <StoreProducts item={item} />;
}
