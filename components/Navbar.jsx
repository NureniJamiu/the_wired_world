import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { category: "Web Development", slug: "web-dev" },
    { category: "Networking", slug: "networking" },
    { category: "Cybersecurity", slug: "cybersecurity" },
  ];
  return (
    <nav className="container mx-auto px-20 pt-5 pb-3 mb-8 shadow flex justify-between items-center rounded-b-3xl">
      <div className="cursor-pointer">
        <Image
          src="/assets/logo.png"
          alt="The Wired World Logo"
          width={130}
          height={100}
        />
      </div>
      <div className="flex gap-5 text-sm font-Nunito">
        {links.map((link, index) => (
          <Link key={index} href={`/category/${link.slug}`}>
            <span className="hover:border-b-2 border-red-400 pb-2 transition-all duration-100 hover:text-red-600">
              {link.category}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
