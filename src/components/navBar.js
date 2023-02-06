import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
// import Link from "next/link";
import { useAppContext } from "./stateWrapper";
import logo from "../../public/img/mark.svg";
import Link from "next/link";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Store", href: "/store", current: false },
  { name: "About", href: "/faq", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const cart = useAppContext();
  function handleCart() {
    cart.isOpen ? cart.closeCart() : cart.openCart();
  }
  return (
    <Disclosure as="nav" className="fixed w-full z-20 top-0 left-0 bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                    width={500}
                    height={500}
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className=" inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="inset-y-0 right-0 flex items-center">
                  <a
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={handleCart}
                  >
                    <span className="sr-only">Shopping cart</span>
                    {cart.isOpen ? (
                      <XMarkIcon className="block h-6 w-6" />
                    ) : (
                      <>
                        <ShoppingCartIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                        ({cart.getNumberOfItems()})
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

// export default function Menu() {

//   return (
//     <nav className={style.menu}>
//       <div>
//         <Link href="/store" className={style.link}>
//           STORE
//         </Link>
//         <Link href="/faq" className={style.link}>
//           FAQ
//         </Link>
//       </div>
//       <div>
//         <a href="#" className={style.link} onClick={handleOpenCart}>
//           {" "}
//           Cart ({cart.getNumberOfItems()})
//         </a>
//       </div>
//     </nav>
//   );
// }
