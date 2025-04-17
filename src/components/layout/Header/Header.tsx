"use client";

import { useState, useEffect } from "react";
// import Link from "next/link";
import Image from "next/image";
import SearchBar from "../Header/SearchBar";
import MobileMenu from "../Header/MobileMenu";
// import NavLinks from "../Header/NavLinks";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
        isScrolled
          ? "sticky top-0 shadow-md bg-background z-50"
          : "bg-background"
      }`}
    >
      {/* Banner Area - E-Receipt*/}
      <div className="bg-gradient-to-r from-orange-500 to-amber-400 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center flex-wrap">
            <div className="flex items-center mr-4">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </span>
              <span className="font-bold text-sm md:text-base">
                EASY <span className="text-yellow-300">E-Receipt 2.0 2568</span>
              </span>
            </div>
            <div className="text-sm md:text-base">
              ซื้อที่ดูโฮมออนไลน์ ลดหย่อนภาษีสูงสุด{" "}
              <span className="text-primary">50,000 บาท</span>
            </div>
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <button className="bg-white text-primary px-4 py-1 rounded-full text-sm font-medium mr-2">
              คลิกเลย
            </button>
            <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center text-sm">
              <span>฿</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top bar with B2B link, account, store locator, language selection */}
      <div className="border-b border-border py-1.5 hidden md:block bg-[#F8F8F8]">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a
              href="#"
              className="text-sm text-grey-primary hover:text-primary"
            >
              Link to B2B Website...
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center text-sm text-grey-primary hover:text-primary"
            >
              {/* <Image
                src="/api/placeholder/20/20"
                width={20}
                height={20}
                alt="User"
                className="mr-1"
              /> */}
              ดูโฮมการ์ด
            </a>
            <span className="mx-4 text-gray-300">|</span>
            <a
              href="#"
              className="flex items-center text-sm text-grey-primary hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              ค้นหาสาขา
            </a>
            <span className="mx-4 text-gray-300">|</span>
            <div className="flex items-center">
              <Image
                src="/icons/ic-tracking.svg"
                width={20}
                height={15}
                alt="Thai flag"
                className="mr-1"
              />
              <span className="text-sm">ติดตามคำสั่งซื้อ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header with logo, search and cart */}
      <div className="container mx-auto py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="DoHome Logo"
              width={53}
              height={60}
              className="object-contain"
            />
          </a>

          {/* Search Bar with Component - fixed gap to 32px */}
          <div className="flex-grow ml-8 mr-8 max-w-3xl">
            <SearchBar />
          </div>

          {/* Cart and Login/Register */}
          <div className="flex items-center ml-2">
            {/* Cart */}
            <a
              href="#"
              className="p-2 relative text-grey-primary hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </a>

            {/* Login/Register Button */}
            <a
              href="#"
              className="hidden md:block ml-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-sm font-medium text-grey-primary"
            >
              เข้าสู่ระบบ/ลงทะเบียน
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="ml-2 md:hidden p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div>
        <div className="container mx-auto">
          <div className="flex items-center">
            {/* All Categories Button with hamburger icon */}
            <button className="flex items-center space-x-2 py-3 px-4 bg-gray-50 hover:bg-gray-100 border-r border-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
              <span className="font-medium text-sm">หมวดหมู่สินค้าทั้งหมด</span>
            </button>

            {/* Main Categories */}
            <ul className="flex overflow-x-auto whitespace-nowrap">
              <li className="px-4 py-3 hover:text-primary cursor-pointer font-medium text-sm">
                <a href="#" className="text-grey-primary hover:text-primary">
                  แบรนด์
                </a>
              </li>
              <li className="px-4 py-3 hover:text-primary cursor-pointer font-medium text-sm">
                <a href="#" className="text-grey-primary hover:text-primary">
                  เหล็ก - วัสดุก่อสร้าง
                </a>
              </li>
              <li className="px-4 py-3 hover:text-primary cursor-pointer font-medium text-sm">
                <a href="#" className="text-grey-primary hover:text-primary">
                  โปรโมชั่นออนไลน์
                </a>
              </li>
              <li className="px-4 py-3 hover:text-primary cursor-pointer font-medium text-sm">
                <a href="#" className="text-grey-primary hover:text-primary">
                  โปรโมชั่นสาขา
                </a>
              </li>
              <li className="px-4 py-3 hover:text-primary cursor-pointer font-medium text-sm">
                <a href="#" className="text-grey-primary hover:text-primary">
                  บริการมาช่าง
                </a>
              </li>
              <li className="px-4 py-3 hover:text-primary cursor-pointer font-medium text-sm">
                <a href="#" className="text-grey-primary hover:text-primary">
                  ดูโฮมเครดิต
                </a>
              </li>
              <li className="px-4 py-3 hover:text-primary cursor-pointer font-medium text-sm">
                <a href="#" className="text-grey-primary hover:text-primary">
                  ดูโฮมการ์ด
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
}
