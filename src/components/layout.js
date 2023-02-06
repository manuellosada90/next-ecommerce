import Head from "next/head";
import Footer from "./footer";
// import style from "../styles/layout.module.css";
import NavBar from "./navBar";
import ShoppingCart from "./shoppingCart";

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title ? `Github merch | ${title}` : "Github merch"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div>{children}</div>
      <ShoppingCart />
      <Footer />
    </div>
  );
}
