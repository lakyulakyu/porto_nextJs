import React from "react";
import Link from "next/link";
import Image from "next/image";
import mylogo from "../public/image/logo.png";

export default function Header() {
  return (
    <header className="bg-slate-50  h-16 flex justify-center md:flex items-center md:justify-between">
      <div className="justify-between ">
        <Link href={"/"}>
          <Image
            src={mylogo}
            width="auto"
            height="30"
            className="ml-16 hidden md:block"
          ></Image>
        </Link>
      </div>
      <div>
        <Link
          href={"/"}
          className="text-slate-600 hover:text-slate-800 hover:font-medium  mr-8"
        >
          Dasboard
        </Link>
        <Link
          href={"/Home/produk"}
          className="text-slate-600 hover:text-slate-800 hover:font-medium mr-8 hover:underline-offset-8"
        >
          Produk
        </Link>
        <Link
          href={"/profile"}
          className="text-slate-600 hover:text-slate-800 hover:font-medium mr-8"
        >
          profile
        </Link>
      </div>
    </header>
  );
}
