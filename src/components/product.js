import { convertToPath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/product.module.css";
import CartButton from "./cartButton";
import RemoveCartButton from "./removeCartButton";

export default function Product({ item, showAs, qty }) {
  if (showAs === "Page") {
    return (
      <div className={style.page}>
        <div className={style.image}>
          <Image
            src={item.image}
            alt={item.description}
            width={500}
            height={500}
          />
        </div>
        <div className={style.info}>
          <div>
            <h2>{item.title}</h2>
          </div>
          <div className={style.price}>${item.price}</div>
          <div>{item.description}</div>
          <div>
            <CartButton item={item} />
          </div>
        </div>
      </div>
    );
  }
  if (showAs === "ListItem") {
    return (
      <div className={style.listItem}>
        <div>
          <Image
            src={item.image}
            alt={item.description}
            width={100}
            height={100}
          />
        </div>
        <div>
          <div>
            <h3>{item.title}</h3>
          </div>
          <div style={{ display: "flex" }}>
            ${item.price} ({qty === 0 ? "" : <div>{qty} units</div>})
          </div>
          {qty === 0 ? "" : <div>Subtotal: ${qty * item.price}</div>}
          <div>
            <RemoveCartButton item={item} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <Image
            src={item.image}
            alt={item.description}
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div>
        <h3>
          <Link href={`/store/${convertToPath(item.title)}`}>{item.title}</Link>
        </h3>
      </div>
      <div>${item.price}</div>
      <div>
        <CartButton item={item} />
      </div>
    </div>
  );
}
