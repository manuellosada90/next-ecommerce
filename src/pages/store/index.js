import Layout from "../../components/layout";
import Product from "@/components/product";
import { getItems } from "@/services/itemService";
import { useState } from "react";
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
      <nav aria-label="Page navigation example" className="flex justify-center">
        <div className="inline-flex items-center -space-x-px">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span class="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              style={{
                backgroundColor: i + 1 === currentPage ? "blue" : "white",
                color: i + 1 === currentPage ? "white" : "black",
              }}
              onClick={() => handlePageChange(i + 1)}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {i + 1}
            </button>
          ))}

          <button
            href="#"
            className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
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
