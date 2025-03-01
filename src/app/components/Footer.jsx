import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-[#530904] text-[#ffb400] py-10 px-6 md:px-36">
      <div className="container">
        <div className="w-full flex flex-wrap justify-between px-2">
          <h1 className="font-bold font-sans text-2xl md:text-3xl w-full md:w-1/2 mb-10 md:mb-0">
            Hello Dholera
          </h1>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 ">
            <div>
              <h1 className="font-semibold text-sm md:text-base mb-3 md:mb-5">Menu</h1>
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-sm md:text-base hover:underline">Home</Link>
                <Link href="/pages/Blogs" className="text-sm md:text-base hover:underline">blogs</Link>
                <Link href="/pages/properties" className="text-sm md:text-base hover:underline">Properties</Link>
                <Link href="/pages/about" className="text-sm md:text-base hover:underline">About</Link>
                <Link href="/pages/contact" className="text-sm md:text-base hover:underline">Contact</Link>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-sm md:text-base mb-3 md:mb-5">Social Media</h1>
              <div className="flex flex-col gap-4">
                <Link href="https://www.instagram.com/hello.dholera?igsh=bmw5YmRpdTRvNnpp" className="text-sm md:text-base hover:underline">Instagram</Link>
                <Link href="https://www.facebook.com/share/19vZkM9o4e/?mibextid=qi2Omg" className="text-sm md:text-base hover:underline">Facebook</Link>
                <Link href="https://www.linkedin.com/in/hello-dholera-78a84b351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-sm md:text-base hover:underline">LinkedIn</Link>
                <Link href="https://x.com/hellodholera?t=3K5ekZmg0CGcz_zDUOtDPA&s=09" className="text-sm md:text-base hover:underline">Twitter</Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <span className="text-center text-xs md:text-sm">© 2025 <Link href="/">Hello Dholera</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  );
};
export default Footer;