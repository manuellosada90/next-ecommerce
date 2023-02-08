import Image from "next/image";
import Layout from "../components/layout";

export default function About() {
  return (
    <div>
      <Layout>
        <section className="bg-white overflow-hidden mt-11">
          <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
            <svg
              className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="784"
                height="404"
                fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
              />
            </svg>

            <svg
              className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
              />
            </svg>

            <div className="relative lg:flex lg:items-center">
              <div className="hidden lg:block lg:flex-shrink-0">
                <Image
                  width={2000}
                  height={2000}
                  className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                  src="/img/profile.jpg"
                  alt=""
                />
              </div>

              <div className="relative lg:ml-10 max-w-3xl">
                <blockquote className="relative">
                  <div className="text-2xl leading-9 font-medium text-gray-900">
                    <p>
                      My name is Manuel Losada. I did this project to learn
                      NextJs and Tailwind, I really enjoyed doing it. I invite
                      you to see my links and contact me.
                    </p>
                  </div>
                  <footer className="mt-8">
                    <div className="flex">
                      <div className="flex-shrink-0 lg:hidden">
                        <Image
                          width={2000}
                          height={2000}
                          className="h-12 w-12 rounded-full"
                          src="/img/profile.jpg"
                          alt=""
                        />
                      </div>
                      <div className="ml-4 lg:ml-0">
                        <a
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-5"
                          href="https://manuellosada.vercel.app/"
                        >
                          Porfolio
                        </a>
                        <a
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-5"
                          href="https://www.linkedin.com/in/manuellosada/"
                        >
                          LinkedIn
                        </a>
                        <a
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          href="https://github.com/manuellosada90"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
