"use client";

import { useState } from "react";
import Link from "next/link";

// Define the same categories as in NavLinks
const categories = [
  {
    name: "เฟอร์นิเจอร์",
    slug: "furniture",
    subcategories: [
      { name: "โซฟาและเก้าอี้", slug: "sofas-chairs" },
      { name: "โต๊ะ", slug: "tables" },
      { name: "ชั้นวางของ", slug: "shelves" },
      { name: "เตียง", slug: "beds" },
      { name: "ตู้เสื้อผ้า", slug: "wardrobes" },
    ],
  },
  {
    name: "ของตกแต่งบ้าน",
    slug: "home-decor",
    subcategories: [
      { name: "โคมไฟ", slug: "lamps" },
      { name: "พรม", slug: "rugs" },
      { name: "ภาพและกรอบรูป", slug: "frames-art" },
      { name: "เครื่องหอม", slug: "fragrances" },
      { name: "ดอกไม้ประดิษฐ์", slug: "artificial-plants" },
    ],
  },
  {
    name: "เครื่องใช้ไฟฟ้า",
    slug: "electronics",
    subcategories: [
      { name: "เครื่องใช้ไฟฟ้าในครัว", slug: "kitchen-appliances" },
      { name: "ทีวีและเครื่องเสียง", slug: "tv-audio" },
      { name: "เครื่องปรับอากาศ", slug: "air-conditioners" },
      { name: "เครื่องซักผ้า", slug: "washing-machines" },
      { name: "ตู้เย็น", slug: "refrigerators" },
    ],
  },
  {
    name: "ห้องครัว",
    slug: "kitchen",
    subcategories: [
      { name: "ชุดครัว", slug: "kitchen-sets" },
      { name: "อุปกรณ์ทำครัว", slug: "cookware" },
      { name: "จาน ชาม และแก้ว", slug: "dinnerware" },
      { name: "เครื่องครัวเล็ก", slug: "kitchen-tools" },
      { name: "อ่างล้างจาน", slug: "sinks" },
    ],
  },
  {
    name: "ห้องน้ำ",
    slug: "bathroom",
    subcategories: [
      { name: "สุขภัณฑ์", slug: "toilets" },
      { name: "อ่างล้างหน้า", slug: "sinks" },
      { name: "ฝักบัวและก๊อกน้ำ", slug: "showers-faucets" },
      { name: "ตู้เก็บของ", slug: "cabinets" },
      { name: "อุปกรณ์ห้องน้ำ", slug: "accessories" },
    ],
  },
  {
    name: "สินค้าลดราคา",
    slug: "sale",
    subcategories: [],
  },
];

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (slug: string) => {
    if (expandedCategory === slug) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(slug);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto md:hidden">
      <div className="container py-4">
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="font-bold text-xl">เมนู</div>
          <button onClick={onClose} className="p-2" aria-label="Close menu">
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile Search */}
        <div className="mb-6">
          <form className="relative">
            <input
              type="text"
              placeholder="ค้นหาสินค้า..."
              className="w-full px-4 py-2 border rounded-md"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 text-primary"
            >
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
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </form>
        </div>

        {/* Account and Cart links - mobile specific */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Link
            href="/account"
            className="flex items-center justify-center p-3 border rounded-md"
            onClick={onClose}
          >
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
              className="mr-2"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>บัญชีของฉัน</span>
          </Link>
          <Link
            href="/cart"
            className="flex items-center justify-center p-3 border rounded-md"
            onClick={onClose}
          >
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
              className="mr-2"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span>ตะกร้า</span>
          </Link>
        </div>

        {/* Mobile Categories */}
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.slug} className="border-b pb-2">
              <div className="flex items-center justify-between">
                <Link
                  href={`/products/${category.slug}`}
                  className={`py-3 font-medium ${
                    category.slug === "sale" ? "text-primary" : ""
                  }`}
                  onClick={
                    category.subcategories.length === 0 ? onClose : undefined
                  }
                >
                  {category.name}
                </Link>
                {category.subcategories.length > 0 && (
                  <button
                    onClick={() => toggleCategory(category.slug)}
                    className="p-2"
                    aria-label={`Toggle ${category.name} subcategories`}
                  >
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
                      className={`transition-transform ${
                        expandedCategory === category.slug ? "rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                )}
              </div>
              {expandedCategory === category.slug && (
                <div className="pl-4 space-y-2 mt-2 mb-4">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory.slug}
                      href={`/products/${category.slug}/${subcategory.slug}`}
                      className="block py-2 hover:text-primary"
                      onClick={onClose}
                    >
                      {subcategory.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Mobile Links */}
        <div className="mt-6 space-y-4">
          <Link
            href="/track-order"
            className="block py-2 hover:text-primary"
            onClick={onClose}
          >
            ติดตามสถานะคำสั่งซื้อ
          </Link>
          <Link
            href="/stores"
            className="block py-2 hover:text-primary"
            onClick={onClose}
          >
            สาขาของเรา
          </Link>
          <div className="py-2 flex items-center justify-between">
            <span>ภาษา</span>
            <div className="flex items-center space-x-4">
              <button className="font-medium">TH</button>
              <button className="text-muted-foreground">EN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
