import React, { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";
import LOGO from "../assests/hd_logo.png"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const handleMenu = () => {
    document.body.classList.toggle("overflow-hidden");
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div>

      <nav
        className={`py-4 fixed md:px-32 top-0 left-0 right-0 z-20 ${
          navBg ? "bg-[#530904] shadow-lg" : "bg-[#530904]"
        }`}
        >
        <div className="container mx-auto flex justify-between items-center  px-4">
          <Link href="/" >
            <Image src={LOGO} alt="Logo" width={70} height={70}  />  
          </Link>
          <div className="md:hidden">
            <HiOutlineMenu className="w-7 h-7 cursor-pointer" onClick={handleMenu} />
          </div>
          <div className="hidden md:flex items-center  text-[#ffb400] gap-5">
            <Link className="text-sm font-medium hover:text-blue-500" href="/">Home</Link>
            <Link className="text-sm font-medium hover:text-blue-500" href="/post/Project">Properties</Link>
            <Link className="text-sm font-medium hover:text-blue-500" href="/post/Blog">Blog</Link>
            <Link className="text-sm font-medium hover:text-blue-500" href="/Contact">Contact</Link>
          </div>
        </div>
      </nav>
      <Sidebar isOpen={isOpen} handleMenu={handleMenu} />
        </div>
    </>
  );
};

export default Navigation;
