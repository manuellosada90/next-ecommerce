import Layout from "../../components/layout";
import Product from "@/components/product";
import { getItems } from "@/services/itemService";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
export default function Index({ items }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const itemsPerPage = 8;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageData = items.slice(startIndex, startIndex + itemsPerPage);
  return (
    <Layout>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {pageData &&
            pageData.map((item) => (
              <Product item={item} showAs="default" key={item.id} />
            ))}
        </div>
      </div>
      <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
        <div className="-mt-px w-0 flex-1 flex">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            <ArrowLeftIcon
              className="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </button>
        </div>
        <div className="hidden md:-mt-px md:flex">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              style={{
                backgroundColor: i + 1 === currentPage ? "blue" : "white",
                color: i + 1 === currentPage ? "white" : "black",
              }}
              onClick={() => handlePageChange(i + 1)}
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="-mt-px w-0 flex-1 flex justify-end">
          <button
            disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
            onClick={() => handlePageChange(currentPage + 1)}
            href="#"
            className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            Next
            <ArrowRightIcon
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>
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

//   <button
//   disabled={currentPage === 1}
//   onClick={() => handlePageChange(currentPage - 1)}
// >
//   Anterior
// </button>
// <div style={{ display: "flex" }}>
//   {[...Array(totalPages)].map((_, i) => (
//     <button
//       key={i + 1}
//       style={{
//         backgroundColor: i + 1 === currentPage ? "blue" : "white",
//         color: i + 1 === currentPage ? "white" : "black",
//       }}
//       onClick={() => handlePageChange(i + 1)}
//     >
//       {i + 1}
//     </button>
//   ))}
// </div>
// <button
//   disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
//   onClick={() => handlePageChange(currentPage + 1)}
// >
//   Siguiente
// </button>
