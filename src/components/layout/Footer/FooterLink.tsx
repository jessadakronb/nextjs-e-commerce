import Link from "next/link";

export default function FooterLinks() {
  const footerLinks = [
    {
      title: "ข้อมูลเกี่ยวกับเรา",
      links: [
        { name: "เกี่ยวกับ DoHome", href: "/about" },
        { name: "สาขาของเรา", href: "/stores" },
        { name: "ติดต่อเรา", href: "/contact" },
        { name: "ร่วมงานกับเรา", href: "/careers" },
        { name: "ข่าวสารและกิจกรรม", href: "/news" },
      ],
    },
    {
      title: "ช่วยเหลือ",
      links: [
        { name: "วิธีการสั่งซื้อ", href: "/how-to-order" },
        { name: "การจัดส่งสินค้า", href: "/shipping" },
        { name: "ติดตามสถานะคำสั่งซื้อ", href: "/track-order" },
        { name: "การคืนสินค้าและเงิน", href: "/return-refund" },
        { name: "คำถามที่พบบ่อย", href: "/faq" },
      ],
    },
  ];

  return (
    <>
      {footerLinks.map((section) => (
        <div key={section.title}>
          <h3 className="font-bold text-lg mb-4">{section.title}</h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
