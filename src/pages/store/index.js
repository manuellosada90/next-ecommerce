import Layout from "../../components/layout";
import Product from "@/components/product";
import { getItems } from "@/services/itemService";

export default function Index({ items }) {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {items &&
            items.map((item) => (
              <Product item={item} showAs="default" key={item.id} />
            ))}
        </div>
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
