import React from "react";
import Image from "next/image";
import Link from "next/link";
export interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

type Props = {};

export default async function Products({}: Props) {
  const result = await fetch("https://dummyjson.com/products", {next: {revalidate: 10}});
  const data: Products = await result.json();

  return (
    <div className="mt-6 mb-6 p-3 border">
      <h2 className=" text-2xl">Products</h2>

      <div className="grid grid-cols-fluid gap-4 mt-3">
        {data.products.map((p, k) => {
          return (
            <Link  href={`/products/detail?id=${p.id}`} key={k} className="border h-[300px]">
              <Image
                src={p.thumbnail}
                alt={p.title}
                width={0}
                height={0}
                className="w-full h-[200px]  object-cover"
              ></Image>
              <div className="p-3">
                <p className="text-xl">{p.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
