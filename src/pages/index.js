import Layout from "../components/layout";
import { getLatestItems } from "@/services/itemService";
import Product from "@/components/product";
import Link from "next/link";
// import styleProduct from "../styles/product.module.css";
// import style from "../styles/home.module.css";

export default function Home({ items }) {
  return (
    <Layout title="welcome">
      <div>
        <div className="relative">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[url('/img/home/1.jpg')] bg-no-repeat bg-cover">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              This is cool
            </h1>

            <Link
              href="/store"
              class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
            >
              Shop Collection
            </Link>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[url('/img/home/2.jpg')] bg-no-repeat bg-cover">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Fashion trends
            </h1>
            <Link
              href="/store"
              class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
            >
              Shop Collection
            </Link>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-[url('/img/home/3.jpg')] bg-no-repeat bg-cover">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Look good
            </h1>
            <Link
              href="/store"
              class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Trending products
          </h1>
          {/* <Link
            href="/store"
            className=" font-normal leading-none tracking-tight text-gray-900 text-4xl md:text-5xl lg:text-center dark:text-white "
          >
            - Go to store
          </Link> */}

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {items &&
              items.map((item) => (
                <Product key={item.id} item={item} showAs="item" />
              ))}
          </div>
        </div>
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
