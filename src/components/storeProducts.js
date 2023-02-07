import Image from "next/image";
import Link from "next/link";
import { convertToPath } from "@/lib/utils";

export default function StoreProducts({ item }) {
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
