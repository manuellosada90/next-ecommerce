export const product5 = {
  id: 5,
  title: "Velvet jacket",
  price: 100,
  image: "/img/octocat.webp",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
  images: [
    {
      id: 1,
      imageSrc: "/img/products/5/1.jpg",
      imageAlt: "velvet jacket",
      primary: true,
    },
    {
      id: 2,
      imageSrc: "/img/products/5/2.jpg",
      imageAlt: "velvet jacket",
      primary: false,
    },
    {
      id: 3,
      imageSrc: "/img/products/5/3.jpg",
      imageAlt: "velvet jacket",
      primary: false,
    },
    {
      id: 3,
      imageSrc: "/img/products/5/4.jpg",
      imageAlt: "velvet jacket",
      primary: false,
    },
  ],
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
  ],

  details: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors",
  ],
};
