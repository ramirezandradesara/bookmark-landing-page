import Image from "next/image";
import Link from "next/link";
import React from "react";

// TODO style for mobile 

const Navbar = () => {
  return (
    <nav className="max-w-screen-lg mx-auto flex justify-between items-center mt-[60px] px-8">
      <Image
        src={"/images/logo-bookmark.svg"}
        alt="logo"
        width={148}
        height={25}
      />
      <div className="flex gap-16 items-center ">
        <ul className="flex gap-16">
          {navigation.map(({ href, name }, index) => (
            <li key={index}>
              <Link
                href={href}
                className="text-gray text-base uppercase tracking-widest font-medium"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-red text-base uppercase tracking-widest text-white py-4 px-10 rounded-md shadow-md">
          login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

const navigation = [
  { href: "/features", name: "Features" },
  { href: "/pricing", name: "Pricing" },
  { href: "/contact", name: "Contact" },
];
