import { convertToPath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/product.module.css";
import CartButton from "./cartButton";
import RemoveCartButton from "./removeCartButton";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import {
  CurrencyDollarIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product({ item, showAs, qty }) {
  const policies = [
    {
      name: "International delivery",
      icon: GlobeEuropeAfricaIcon,
      description: "Get your order in 2 years",
    },
    {
      name: "Loyalty rewards",
      icon: CurrencyDollarIcon,
      description: "Don't look at other tees",
    },
  ];
  const [selectedColor, setSelectedColor] = useState(item.colors[0]);
  const [selectedSize, setSelectedSize] = useState(item.sizes[2]);

  if (showAs === "Page") {
    return (
      <div className="bg-white mt-10">
        <div className="pt-6 pb-16 sm:pb-24">
          <div className="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
              <div className="lg:col-start-8 lg:col-span-5">
                <div className="flex justify-between">
                  <h1 className="text-xl font-medium text-gray-900">
                    {item.title}
                  </h1>
                  <p className="text-xl font-medium text-gray-900">
                    ${item.price}
                  </p>
                </div>
              </div>

              {/* Image gallery */}
              <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
                <h2 className="sr-only">Images</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                  {item.images.map((image) => (
                    <Image
                      key={image.id}
                      src={image.imageSrc}
                      alt={image.imageAlt}
                      width={1000}
                      height={1000}
                      className={classNames(
                        image.primary
                          ? "lg:col-span-2 lg:row-span-2"
                          : "hidden lg:block",
                        "rounded-lg"
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8 lg:col-span-5">
                <form>
                  {/* Color picker */}
                  <div>
                    <h2 className="text-sm font-medium text-gray-900">Color</h2>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-2"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {item.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedColor,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="p" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.bgColor,
                                "h-8 w-8 border border-black border-opacity-10 rounded-full"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Size picker */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-medium text-gray-900">
                        Size
                      </h2>
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        See sizing chart
                      </a>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-2"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                        {item.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            className={({ active, checked }) =>
                              classNames(
                                size.inStock
                                  ? "cursor-pointer focus:outline-none"
                                  : "opacity-25 cursor-not-allowed",
                                active
                                  ? "ring-2 ring-offset-2 ring-indigo-500"
                                  : "",
                                checked
                                  ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                                  : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                                "border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                              )
                            }
                            disabled={!size.inStock}
                          >
                            <RadioGroup.Label as="p">
                              {size.name}
                            </RadioGroup.Label>
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <CartButton item={item} />
                </form>

                {/* Product details */}
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">
                    Description
                  </h2>

                  <div
                    className="mt-4 prose prose-sm text-gray-500"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h2 className="text-sm font-medium text-gray-900">
                    Fabric &amp; Care
                  </h2>

                  <div className="mt-4 prose prose-sm text-gray-500">
                    <ul role="list">
                      {item.details.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Policies */}
                <section aria-labelledby="policies-heading" className="mt-10">
                  <h2 id="policies-heading" className="sr-only">
                    Our Policies
                  </h2>

                  <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {policies.map((policy) => (
                      <div
                        key={policy.name}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center"
                      >
                        <dt>
                          <policy.icon
                            className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="mt-4 text-sm font-medium text-gray-900">
                            {policy.name}
                          </span>
                        </dt>
                        <dd className="mt-1 text-sm text-gray-500">
                          {policy.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (showAs === "ListItem") {
    return (
      <div className={style.listItem}>
        <div>
          <Image
            src={item.image}
            alt={item.description}
            width={100}
            height={100}
          />
        </div>
        <div>
          <div>
            <h3>{item.title}</h3>
          </div>
          <div style={{ display: "flex" }}>
            ${item.price} ({qty === 0 ? "" : <div>{qty} units</div>})
          </div>
          {qty === 0 ? "" : <div>Subtotal: ${qty * item.price}</div>}
          <div>
            <RemoveCartButton item={item} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Link href={`/store/${convertToPath(item.title)}`} className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
          <Image
            src={item.images[0].imageSrc}
            alt={item.description}
            width={1300}
            height={1300}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      </Link>
    </div>
  );
}
