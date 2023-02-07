import RemoveCartButton from "./removeCartButton";
import Image from "next/image";

export default function CartProducts({ item, qty }) {
  console.log("cartProduct", item);
  return (
    <li key={item.id} className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={item.images[0].imageSrc}
          alt={item.images[0].imageAlt}
          className="h-full w-full object-cover object-center"
          width={100}
          height={100}
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={item.href}> {item.title} </a>
            </h3>
            <p className="ml-4">{item.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {qty} units</p>

          <div className="flex">
            <RemoveCartButton item={item} />
          </div>
        </div>
      </div>
    </li>
  );
}
