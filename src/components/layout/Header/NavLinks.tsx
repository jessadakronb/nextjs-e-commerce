"use client";

import { useState } from "react";
import Link from "next/link";

// Define navigation structure with categories and subcategories
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

export default function NavLinks() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryMouseEnter = (slug: string) => {
    setActiveCategory(slug);
  };

  const handleCategoryMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="relative">
      <ul className="flex items-center space-x-8">
        {categories.map((category) => (
          <li
            key={category.slug}
            className="relative py-2"
            onMouseEnter={() => handleCategoryMouseEnter(category.slug)}
            onMouseLeave={handleCategoryMouseLeave}
          >
            <Link
              href={`/products/${category.slug}`}
              className={`font-medium hover:text-primary ${
                category.slug === "sale" ? "text-primary" : ""
              }`}
            >
              {category.name}
              {category.subcategories.length > 0 && (
                <span className="ml-1">▼</span>
              )}
            </Link>

            {/* Dropdown for subcategories */}
            {category.subcategories.length > 0 &&
              activeCategory === category.slug && (
                <div className="absolute left-0 top-full mt-1 min-w-[250px] bg-background shadow-lg rounded-md z-50 p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.slug}
                        href={`/products/${category.slug}/${subcategory.slug}`}
                        className="block py-2 px-3 hover:bg-muted rounded-md transition-colors"
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                    <div className="mt-2 pt-2 border-t">
                      <Link
                        href={`/products/${category.slug}`}
                        className="block py-2 px-3 text-primary font-medium hover:bg-muted rounded-md transition-colors"
                      >
                        ดูทั้งหมดใน{category.name} →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
}
