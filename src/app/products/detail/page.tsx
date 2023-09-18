"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Product } from "../page";
import Image from "next/image";
import { GetProductDetail } from "@/app/services/api";
import { useQuery } from "react-query";

type Props = {};

export default function ProductDetail({}: Props) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState<Product>();

  // const getProductDetail = async () => {
  //   try {
  //     const response = await GetProductDetail(String(id));
  //     setData(response.data)
  //   } catch (err) {

  //   }
  // };

  // useEffect(() => {
  //   getProductDetail();
  // }, [String(id)]);

  // if (!data) {
  //   return "Loading...";
  // }

  const getProductDetail = useQuery({
    queryKey: ["getProductDetail"],
    queryFn: async () => {
      return ((await GetProductDetail(String(id))).data)
    },
    enabled: !!String(id),
    refetchOnWindowFocus: false
  });

  if(getProductDetail.isLoading){
    return "Loading..."
  }
  return (
    <>
    {getProductDetail.data && getProductDetail.data.title}
      {/* {data && (
        <div className="mt-6">
          <h1 className=" text-4xl font-semibold">{data.title}</h1>
          <Image
            src={data.thumbnail}
            alt=""
            width="0"
            height="0"
            className="w-full h-[300px] object-contain"
          ></Image>
          <div className="mt-6 flex justify-between">
            <p className="text-xl text-orange-600 font-bold">
              Price: $ {data.price}
            </p>
            <p className="text-lg">Stock: {data.stock}</p>
          </div>
          <p className="mt-6">{data.description}</p>
        </div>
      )} */}
    </>
  );
}
