export const product8 = {
  id: 8,
  title: "Plain shirt",
  price: 100,
  image: "/img/octocat.webp",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia maiores praesentium vitae sequi consectetur itaque ea inventore architecto nemo. Enim id perspiciatis minus modi qui at commodi quos quisquam similique!",
  images: [
    {
      id: 1,
      imageSrc: "/img/products/8/1.jpg",
      imageAlt: "plain shirt",
      primary: true,
    },
    {
      id: 2,
      imageSrc: "/img/products/8/2.jpg",
      imageAlt: "plain shirt",
      primary: false,
    },
    {
      id: 3,
      imageSrc: "/img/products/8/3.jpg",
      imageAlt: "plain shirt",
      primary: false,
    },
    {
      id: 3,
      imageSrc: "/img/products/8/4.jpg",
      imageAlt: "plain shirt",
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
