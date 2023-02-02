import Layout from "../components/layout";
import { getLatestItems } from "@/services/itemService";
import Product from "@/components/product";
// import styleProduct from "../styles/product.module.css";
// import style from "../styles/home.module.css";

export default function Home({ items }) {
  return (
    <Layout title="welcome">
      <div>
        <div className="relative">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[url('/img/home/1.jpg')] bg-no-repeat bg-cover">
            <h2 className="text-7xl">The First Title</h2>
            <p>Scroll Down</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[url('/img/home/2.jpg')] bg-no-repeat bg-cover">
            <h2 className="text-4xl">The Second Title</h2>
            <p>Scroll Down</p>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[url('/img/home/3.jpg')] bg-no-repeat bg-cover">
            <h2 className="text-4xl">The Third Title</h2>
            <p>Scroll Down</p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {items &&
              items.map((item) => (
                <Product key={item.id} item={item} showAs="item" />
              ))}
          </div>
        </div>
      </div>
      {/* <div className={style.banner}>
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
      </div> */}
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
