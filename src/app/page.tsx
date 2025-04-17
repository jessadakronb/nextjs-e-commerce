import Link from "next/link";

export default function Home() {
  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: "โซฟารูปตัว L สีเทาอ่อน",
      price: 15900,
      originalPrice: 19900,
      discountPercentage: 20,
      image: "/images/sofa.jpg", // ใช้รูปตัวอย่าง
      slug: "l-shaped-sofa-light-grey",
      category: "furniture",
    },
    {
      id: 2,
      name: "โต๊ะกลางไม้สักทรงกลม",
      price: 4500,
      originalPrice: 4500,
      discountPercentage: 0,
      image: "/images/table.jpg", // ใช้รูปตัวอย่าง
      slug: "round-teak-coffee-table",
      category: "furniture",
    },
    {
      id: 3,
      name: "เตียงนอนไม้ 6 ฟุต",
      price: 12900,
      originalPrice: 15900,
      discountPercentage: 19,
      image: "/images/bed.jpg", // ใช้รูปตัวอย่าง
      slug: "wooden-bed-king-size",
      category: "furniture",
    },
    {
      id: 4,
      name: "โคมไฟตั้งพื้นทรงสูง",
      price: 2300,
      originalPrice: 2900,
      discountPercentage: 21,
      image: "/images/lamp.jpg", // ใช้รูปตัวอย่าง
      slug: "tall-floor-lamp",
      category: "home-decor",
    },
  ];

  // Sample categories with images
  const categories = [
    {
      name: "เฟอร์นิเจอร์",
      slug: "furniture",
      image: "/images/category-furniture.jpg", // ใช้รูปตัวอย่าง
    },
    {
      name: "ของตกแต่งบ้าน",
      slug: "home-decor",
      image: "/images/category-decor.jpg", // ใช้รูปตัวอย่าง
    },
    {
      name: "เครื่องใช้ไฟฟ้า",
      slug: "electronics",
      image: "/images/category-electronics.jpg", // ใช้รูปตัวอย่าง
    },
    {
      name: "ห้องครัว",
      slug: "kitchen",
      image: "/images/category-kitchen.jpg", // ใช้รูปตัวอย่าง
    },
    {
      name: "ห้องน้ำ",
      slug: "bathroom",
      image: "/images/category-bathroom.jpg", // ใช้รูปตัวอย่าง
    },
  ];

  // Sample promotions
  const promotions = [
    {
      title: "ลดสูงสุด 50%",
      description: "โปรโมชั่นสุดพิเศษประจำเดือน สำหรับสินค้าเฟอร์นิเจอร์",
      image: "/images/promo1.jpg", // ใช้รูปตัวอย่าง
      link: "/promotions/furniture-sale",
    },
    {
      title: "ซื้อ 1 แถม 1",
      description: "สำหรับสินค้าของตกแต่งบ้านที่ร่วมรายการ",
      image: "/images/promo2.jpg", // ใช้รูปตัวอย่าง
      link: "/promotions/buy-one-get-one",
    },
    {
      title: "ฟรีค่าจัดส่ง",
      description: "เมื่อซื้อครบ 3,000 บาท",
      image: "/images/promo3.jpg", // ใช้รูปตัวอย่าง
      link: "/promotions/free-shipping",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 h-[400px] md:h-[500px] relative flex items-center">
          <div className="container">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                ยกระดับบ้านของคุณ
                <br />
                ด้วยสินค้าคุณภาพจาก DoHome
              </h1>
              <p className="text-lg mb-6">
                ส่วนลดสูงสุด 50% พิเศษสำหรับสมาชิกใหม่
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            หมวดหมู่ยอดนิยม
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group"
              >
                <div className="bg-muted rounded-lg overflow-hidden relative aspect-square">
                  {/* ใช้สีพื้นหลังแทนรูปภาพ */}
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 group-hover:scale-105 transition-transform duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-medium text-lg text-center bg-background/80 px-3 py-2 rounded">
                      {category.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">สินค้าแนะนำ</h2>
            <Link
              href="/products"
              className="text-primary hover:underline font-medium"
            >
              ดูทั้งหมด
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <Link href={`/products/${product.category}/${product.slug}`}>
                  <div className="aspect-square relative bg-muted">
                    {/* ใช้สีพื้นหลังแทนรูปภาพ */}
                    <div className="w-full h-full bg-gradient-to-br from-muted to-primary/10 group-hover:scale-105 transition-transform duration-300" />

                    {product.discountPercentage > 0 && (
                      <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                        -{product.discountPercentage}%
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">
                        ฿{product.price.toLocaleString()}
                      </span>
                      {product.discountPercentage > 0 && (
                        <span className="text-muted-foreground line-through text-sm">
                          ฿{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            โปรโมชั่นเด่น
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Link key={index} href={promo.link} className="block group">
                <div className="bg-muted rounded-lg overflow-hidden relative aspect-[4/3]">
                  {/* ใช้สีพื้นหลังแทนรูปภาพ */}
                  <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 group-hover:scale-105 transition-transform duration-300" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="font-bold text-xl mb-2">{promo.title}</h3>
                    <p className="text-muted-foreground">{promo.description}</p>
                    <span className="mt-4 text-primary font-medium">
                      ดูเพิ่มเติม →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      
    </>
  );
}
