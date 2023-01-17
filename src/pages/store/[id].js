import Layout from "@/components/Layout";
import Product from "@/components/product";
import { getItemData, getPathsFromTitle } from "@/lib/utils";

export default function ProductPage({ productInfo }) {
  return (
    <Layout title={productInfo.data.title}>
      <Product item={productInfo.data} showAs="Page" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromTitle();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const productInfo = await getItemData(id);

  return {
    props: {
      productInfo,
    },
  };
}
