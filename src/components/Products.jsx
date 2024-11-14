import React from "react";
import { FaStar } from "react-icons/fa";
import ProductCard from "./ProductCard";
import Title from "./Title";

const producrs = [
  {
    name: "Nike Running shoe",
    img: "./images/img_2.png",
    price: 100,
    soldOutPrice: 500,
    reviews: "(11.6k Reviews)",
    star: <FaStar />,
  },
  {
    name: "Nike shoe Airmax",
    img: "/images/img_3.png",
    price: 115,
    soldOutPrice: 100,
    reviews: "(11.6k Reviews)",
    star: <FaStar />,
  },
  {
    name: "Jordan Sneaker",
    img: "/images/img_4.png",
    price: 50,
    soldOutPrice: 150,
    reviews: "(11.6k Reviews)",
    star: <FaStar />,
  },
  {
    name: "Nike Running shoe 2",
    img: "/images/img_5.png",
    price: 220,
    soldOutPrice: 210,
    reviews: "(11.6k Reviews)",
    star: <FaStar />,
  },
];

function Products() {
  return (
    <div className="px-20 pb-20">
      <Title className="py-14 text-nowrap">Popular products</Title>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {producrs.map((product) => (
            <div className="w-[192px]" key={product.name}>
                <ProductCard {...product} />
            </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
