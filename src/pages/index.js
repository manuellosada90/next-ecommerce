import Layout from "../components/layout";
import { getLatestItems } from "@/services/itemService";
import Product from "@/components/product";
import styleProduct from "../styles/product.module.css";
import style from "../styles/home.module.css";

export default function Home({ items }) {
  return (
    <Layout title="welcome">
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
            <h2>Shop summer 2023</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              maiores praesentium vitae sequi consectetur itaque ea inventore
              architecto nemo. Enim id perspiciatis minus modi qui at commodi
              quos quisquam similique!
            </p>
          </div>
        </div>
      </div>
      <h3>Latest products</h3>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getLatestItems();
  return {
    props: {
      items: res,
    },
  };
}
