import Layout from "@/components/Layout";
import Product from "@/components/product";
import { getItems } from "@/services/itemService";
import styleItems from "../../styles/product.module.css";

export default function Index({ items }) {
  return (
    <Layout>
      <div className={styleItems.items}>
        {items &&
          items.map((item) => (
            <Product item={item} showAs="default" key={item.id} />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();
  return {
    props: {
      items: res,
    },
  };
}
