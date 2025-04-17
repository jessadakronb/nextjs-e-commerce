import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-grey-primary pt-8 pb-4 border-t">
      <div className="container max-w-[1200px] mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-6 gap-6">
          {/* Column 1 */}
          <div className="col-span-1">
            <div className="text-[14px] font-bold mb-3">
              ข้อมูลบริษัท DOHOME
            </div>
            <ul className="space-y-2 text-[12px] font-normal">
              <li>
                <Link href="/about" className="hover:text-primary-hover">
                  ประวัติโดม
                </Link>
              </li>
              <li>
                <Link
                  href="/investor-relations"
                  className="hover:text-primary-hover"
                >
                  นักลงทุนสัมพันธ์
                </Link>
              </li>
              <li>
                <Link href="/branches" className="hover:text-primary-hover">
                  ตำแหน่งสาขาโดม
                </Link>
              </li>
              <li>
                <Link
                  href="/news-activities"
                  className="hover:text-primary-hover"
                >
                  ข่าวสารและกิจกรรม
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-span-1">
            <div className="text-[14px] font-bold mb-3">ศูนย์ ช่วยออนไลน์</div>
            <ul className="space-y-2 text-[12px] font-normal">
              <li>
                <Link href="/how-to-buy" className="hover:text-primary-hover">
                  วิธีการสั่งซื้อออนไลน์และวิธีการชำระเงิน
                </Link>
              </li>
              <li>
                <Link
                  href="/payment-methods"
                  className="hover:text-primary-hover"
                >
                  เงื่อนไขการชำระเงินแบบผ่อนชำระ
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-primary-hover">
                  ติดตามสถานะการสั่งซื้อ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-1">
            <div className="text-[14px] font-bold mb-3">
              ดาวน์โหลด แคตตาล็อก
            </div>
            <ul className="space-y-2 text-[12px] font-normal">
              <li>
                <Link
                  href="/catalog-furniture"
                  className="hover:text-primary-hover"
                >
                  แคตตาล็อกวัสดุก่อสร้าง
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog-decorative"
                  className="hover:text-primary-hover"
                >
                  แคตตาล็อกการเมือง
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog-garden"
                  className="hover:text-primary-hover"
                >
                  แคตตาล็อกเกษตรสวน
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog-bathroom"
                  className="hover:text-primary-hover"
                >
                  แคตตาล็อกห้องน้ำ
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog-electrical"
                  className="hover:text-primary-hover"
                >
                  แคตตาล็อกเครื่องใช้ไฟฟ้า
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog-furniture"
                  className="hover:text-primary-hover"
                >
                  แคตตาล็อกเฟอร์นิเจอร์
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog-tools"
                  className="hover:text-primary-hover"
                >
                  แคตตาล็อกเครื่องมือช่าง
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-span-1">
            <div className="text-[14px] font-bold mb-3">
              การขายและบริการลูกค้าองค์กร
            </div>
            <ul className="space-y-2 text-[12px] font-normal">
              <li>
                <Link href="/copyright" className="hover:text-primary-hover">
                  ลูกค้าองค์กร
                </Link>
              </li>
              <li>
                <Link href="/trademark" className="hover:text-primary-hover">
                  รูปแบบการขายส่ง
                </Link>
              </li>
              <li>
                <Link href="/patents" className="hover:text-primary-hover">
                  ข้อเสนอราคา
                </Link>
              </li>
              <li>
                <Link
                  href="/intellectual-property"
                  className="hover:text-primary-hover"
                >
                  สถานะข้อมูลลูกค้าองค์กร
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="col-span-1">
            <div className="text-[14px] font-bold mb-3">นโยบาย</div>
            <ul className="space-y-2 text-[12px] font-normal">
              <li>
                <Link href="/delivery" className="hover:text-primary-hover">
                  เงื่อนไขการใช้งาน
                </Link>
              </li>
              <li>
                <Link href="/installation" className="hover:text-primary-hover">
                  เงื่อนไขการจัดส่งและการรับส่งสินค้า
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty-service"
                  className="hover:text-primary-hover"
                >
                  นโยบายความเป็นส่วนตัว
                </Link>
              </li>
              <li>
                <Link href="/home-service" className="hover:text-primary-hover">
                  นโยบายการยกเลิกและคืนสินค้า
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6 */}
          <div className="col-span-1">
            <div className="text-[14px] font-bold mb-3">ติดต่อเราบริษัท</div>
            <ul className="space-y-2 text-[12px] font-normal">
              <li>
                <Link href="/contact" className="hover:text-primary-hover">
                  เสนอสินค้า (คู่ค้าในประเทศ)
                </Link>
              </li>
              <li>
                <Link
                  href="/product-offering"
                  className="hover:text-primary-hover"
                >
                  Product Offering
                </Link>
              </li>
              <li>
                <Link href="/advertising" className="hover:text-primary-hover">
                  ร่วมงานกับเรา
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-primary-hover">
                  ร้องเรียนและติชม
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-primary-hover">
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <div>
                <div className="text-[13px] font-bold text-grey-primary">
                  ช่วยออนไลน์
                </div>
                <div className="flex items-center">
                  <span className="text-xl font-bold text-primary">
                    1746 กด 2
                  </span>
                  <span className="text-[12px] font-normal text-grey-primary ml-2">
                    เปิดบริการทุกวัน 09:00 - 18:00 น.
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <Link
                  href="https://www.facebook.com/dohometh"
                  target="_blank"
                  aria-label="Facebook"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/icons/ic-facebook.svg"
                    alt="Facebook"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/dohome.co.th"
                  target="_blank"
                  aria-label="Instagram"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/icons/ic-ig.svg"
                    alt="Instagram"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </Link>
                <Link
                  href="https://line.me/dohome"
                  target="_blank"
                  aria-label="Line"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/icons/ic-line.svg"
                    alt="Line"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/dohomechannel"
                  target="_blank"
                  aria-label="YouTube"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/icons/ic-youtube.svg"
                    alt="YouTube"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </Link>
                <Link
                  href="https://www.tiktok.com/@dohome"
                  target="_blank"
                  aria-label="TikTok"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/icons/ic-tiktok.svg"
                    alt="TikTok"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-[14px] font-bold mb-2">
                ดาวน์โหลดแอปพลิเคชั่น
              </div>
              <div className="flex items-center">
                <div className="bg-primary text-white rounded-md p-1 mr-2">
                  <Image
                    src="/logo.png"
                    alt="DoHome App"
                    width={30}
                    height={30}
                    className="w-8 h-8"
                  />
                </div>
                <div className="flex">
                  <Link
                    href="https://apps.apple.com/th/app/dohome"
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/icons/ic-apple-store.svg"
                      alt="App Store"
                      width={100}
                      height={30}
                      className="h-7 w-auto"
                    />
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.dohome"
                    target="_blank"
                    className="ml-1 hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/icons/ic-googleplay.svg"
                      alt="Google Play"
                      width={100}
                      height={30}
                      className="h-7 w-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-[12px] font-normal text-grey-primary">
          DoHome Public Company Limited, Copyright ©2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
