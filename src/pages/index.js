/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/layout";
import { getLatestItems } from "@/services/itemService";
import Product from "@/components/product";
import Link from "next/link";
import Image from "next/image";
// import styleProduct from "../styles/product.module.css";
// import style from "../styles/home.module.css";

export default function Home({ items }) {
  return (
    <Layout title="welcome">
      <div>
        <div className="relative">
          <div className="sticky top-0 h-screen flex flex-col items-start justify-center bg-[url('/img/home/1.jpg')] bg-no-repeat bg-cover">
            <h1 className="mb-4 ml-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Vintage meets
            </h1>
            <h1 className="mb-4 ml-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              visionary
            </h1>
            <Link
              href="/store"
              className="ml-10 inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
            >
              Shop Collection
            </Link>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-start justify-center bg-[url('/img/home/2.jpg')] bg-no-repeat bg-cover">
            <h1 className="mb-4 ml-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
              20% off
            </h1>
            <h1 className="mb-4 ml-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
              + free shipping
            </h1>
            <Link
              href="/store"
              className="ml-10 inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
            >
              Shop Collection
            </Link>
          </div>
          <div className="sticky top-0 h-screen flex flex-col items-start justify-center bg-[url('/img/home/3.jpg')] bg-no-repeat bg-cover">
            <h1 className="mb-4 ml-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Warm up
            </h1>
            <h1 className="mb-4 ml-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              your winter
            </h1>
            <Link
              href="/store"
              className="ml-10 inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
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
            Trending products{" "}
          </h1>{" "}
          {/* <Link
            href="/store"
            className=" font-normal leading-none tracking-tight text-gray-900 text-4xl md:text-5xl lg:text-center dark:text-white "
          >
            - Go to store
          </Link> */}
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {items &&
              items.map((item) => (
                <Product key={item.id} item={item} showAs="latest" />
              ))}
          </div>
        </div>
      </div>

      <div className="relative bg-blue-300 overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Winter styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new winter collection will shelter you from the
                harsh elements of a world that doesn't care if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                          <Image
                            src="/img/products/8/1.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/img/products/9/1.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/img/products/9/2.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/img/products/9/3.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/img/products/9/4.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/img/products/9/5.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="w-44 h-64 rounded-lg overflow-hidden">
                          <Image
                            src="/img/products/9/6.jpg"
                            alt=""
                            className="w-full h-full object-center object-cover"
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/store"
                  className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
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
