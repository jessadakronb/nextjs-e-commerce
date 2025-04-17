"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SearchBar from "../Header/SearchBar";
import MobileMenu from "../Header/MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full transition-all duration-300 ${
        isScrolled ? "sticky top-0 shadow-md bg-white z-50" : "bg-white"
      }`}
    >
      {/* E-Receipt Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-400 text-white py-2 px-4 text-sm">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center gap-y-2">
          <div className="flex items-center flex-wrap gap-x-4">
            <div className="flex items-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </span>
              <span className="font-bold">
                EASY <span className="text-yellow-300">E-Receipt 2.0 2568</span>
              </span>
            </div>
            <div>
              ซื้อที่ดูโฮมออนไลน์ ลดหย่อนภาษีสูงสุด{" "}
              <span className="text-primary">50,000 บาท</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <button className="bg-white text-primary px-4 py-1 rounded-full font-medium">
              คลิกเลย
            </button>
            <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center">
              ฿
            </div>
          </div>
        </div>
      </div>
      {/* Top bar */}
      <div className="border-b border-border py-1.5 hidden md:block bg-[#F8F8F8]">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
          <a href="#" className="text-sm text-grey-primary hover:text-primary">
            Link to B2B Website...
          </a>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-sm text-grey-primary hover:text-primary"
            >
              ดูโฮมการ์ด
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="#"
              className="flex items-center text-sm text-grey-primary hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mr-1"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              ค้นหาสาขา
            </a>
            <span className="text-gray-300">|</span>
            <div className="flex items-center">
              <Image
                src="/icons/ic-tracking.svg"
                width={20}
                height={15}
                alt="tracking"
                className="mr-1"
              />
              <span className="text-sm">ติดตามคำสั่งซื้อ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-y-2 ">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="DoHome Logo"
            width={48}
            height={54}
            className="object-contain"
          />
        </a>

        {/* Search bar - hidden on mobile */}
        <div className="hidden md:block flex-grow mx-4 max-w-2xl">
          <SearchBar />
        </div>

        {/* Cart, Login, Mobile Menu */}
        <div className="flex items-center gap-x-2">
          <a
            href="#"
            className="relative p-2 text-grey-primary hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              0
            </span>
          </a>
          <a
            href="#"
            className="hidden md:block px-4 py-2 text-sm font-medium bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md text-grey-primary"
          >
            เข้าสู่ระบบ/ลงทะเบียน
          </a>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Categories */}
      <div>
        <div className="max-w-screen-xl mx-auto flex items-center overflow-x-auto whitespace-nowrap px-4">
          <button className=" w-[241px] flex items-center space-x-2 py-3 px-4  bg-primary hover:bg-orange-500 text-white flex-shrink-0 rounded-t-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
            <span className="text-sm font-medium  ">หมวดหมู่สินค้าทั้งหมด</span>
          </button>
          <ul className="flex gap-x-4 overflow-x-auto text-sm font-medium py-3 pl-4">
            {[
              "แบรนด์",
              "เหล็ก - วัสดุก่อสร้าง",
              "โปรโมชั่นออนไลน์",
              "โปรโมชั่นสาขา",
              "บริการมาช่าง",
              "ดูโฮมเครดิต",
              "ดูโฮมการ์ด",
            ].map((cat) => (
              <li
                key={cat}
                className="whitespace-nowrap text-grey-primary hover:text-primary cursor-pointer"
              >
                <a href="#">{cat}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
}
