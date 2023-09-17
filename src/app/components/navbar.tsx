"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const path = usePathname();
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Next App
          </span>
        </Link>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${!toggle ? "hidden" : ""} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link
              href="/"
              className={`${path === "/" ? " text-orange-300":"text-white"} block py-2 pl-3 pr-4 text-gray-900 md:hover:text-orange-600 `}
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href={"/hooks"}
              className={`${path === "/hooks" ? " text-orange-300":"text-white"} block py-2 pl-3 pr-4 text-gray-900 md:hover:text-orange-600 `}

            >
              Hooks
            </Link>
            <Link
              href={"/products"}
              className={`${path === "/products" ? " text-orange-300":"text-white"} block py-2 pl-3 pr-4 text-gray-900 md:hover:text-orange-600 `}

            >
              Products
            </Link>

            <Link
              href="/contact"
              className={`${path === "/contact" ? " text-orange-300":"text-white"} block py-2 pl-3 pr-4 text-gray-900 md:hover:text-orange-600 `}
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
