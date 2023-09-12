import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Products",
  description: "",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className=" bg-red-200 p-4 text-center">Product Header Only</h2>
      {children}
    </>
  );
}
