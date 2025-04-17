"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "../Header/NavLinks";
import SearchBar from "../Header/SearchBar";
import MobileMenu from "../Header/MobileMenu";

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
      {/* Top bar with contact info, language selection, etc. */}
      <div className="bg-muted py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <span>ติดต่อเรา: 1717</span>
            <span>|</span>
            <span>support@dohome.co.th</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <Link href="/track-order" className="hover:text-primary">
              ติดตามสถานะคำสั่งซื้อ
            </Link>
            <span>|</span>
            <Link href="/stores" className="hover:text-primary">
              สาขาของเรา
            </Link>
            <span>|</span>
            <div className="relative group">
              <button className="flex items-center hover:text-primary">
                TH <span className="ml-1">▼</span>
              </button>
              <div className="absolute right-0 mt-2 w-24 bg-background shadow-lg rounded-md overflow-hidden z-50 hidden group-hover:block">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-muted"
                >
                  EN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-10 w-40">
            <Image 
              src="/logo.png" 
              alt="DoHome Logo" 
              fill
              className="object-contain" 
            /> 
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-grow mx-8">
            <SearchBar />
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2 md:space-x-6">
            {/* Search for mobile */}
            <button className="md:hidden p-2">
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
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>

            {/* Account */}
            <Link href="/account" className="hidden md:flex items-center">
              <div className="relative p-2">
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
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="hidden md:block">
                <div className="text-xs text-muted-foreground">บัญชีของฉัน</div>
                <div className="text-sm font-medium">เข้าสู่ระบบ</div>
              </div>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center p-2 relative hover:text-primary"
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
              <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
              <span className="ml-2 hidden md:inline">ตะกร้า</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
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

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:block mt-4">
          <NavLinks />
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
}
