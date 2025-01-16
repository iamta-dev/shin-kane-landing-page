"use client";

import { MapPin, Clock, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

// Image Slider Component
const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </>
  );
};

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3">
            <img src="/logo.png" alt="" className="h-12" />
            <a href="#" className="font-heading text-xl font-bold text-primary">
              Shin Kane
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <a href="#" className="transition hover:text-primary">
              หน้าแรก
            </a>
            <a href="#menu" className="transition hover:text-primary">
              เมนูอาหาร
            </a>
            <a href="#promotion" className="transition hover:text-primary">
              โปรโมชั่น
            </a>
            <a href="#contact" className="transition hover:text-primary">
              ติดต่อเรา
            </a>
            <button className="rounded-full bg-primary px-6 py-2 font-semibold text-white transition hover:bg-opacity-90">
              สั่งอาหาร
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <a href="#" className="transition hover:text-primary">
                หน้าแรก
              </a>
              <a href="#menu" className="transition hover:text-primary">
                เมนูอาหาร
              </a>
              <a href="#promotion" className="transition hover:text-primary">
                โปรโมชั่น
              </a>
              <a href="#contact" className="transition hover:text-primary">
                ติดต่อเรา
              </a>
              <button className="rounded-full bg-primary px-6 py-2 font-semibold text-white transition hover:bg-opacity-90">
                สั่งอาหาร
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {" "}
        {/* Add padding-top to prevent content from going under navbar */}
        {/* Hero Section */}
        <section className="relative bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <h1 className="mb-6 font-heading text-4xl font-bold text-gray-900 lg:text-6xl">
                  สั่งอาหารญี่ปุ่นแท้ ส่งตรงถึงบ้านคุณ
                </h1>
                <p className="mb-8 text-lg text-gray-600 lg:text-xl">
                  อร่อยทุกคำ ส่งตรงถึงบ้านคุณ 🍱 สด สะอาด รวดเร็ว
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <button className="rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:bg-opacity-90">
                    สั่งอาหารเลย
                  </button>
                  <button className="rounded-full border-2 border-primary bg-white px-8 py-4 font-semibold text-primary transition hover:bg-gray-50">
                    ดูเมนูทั้งหมด
                  </button>
                </div>
              </div>
              {/* Image Slider */}
              <div className="relative h-96 overflow-hidden rounded-2xl bg-gray-100">
                <ImageSlider />
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="bg-gray-50 py-16" id="menu">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-heading text-3xl font-bold lg:text-4xl">
              ทำไมต้องสั่งกับ Shin Kane? 🤔
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary bg-opacity-10">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-center font-heading text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-center text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Promotion Section */}
        <section className="bg-primary bg-opacity-5 py-16" id="promotion">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 font-heading text-3xl font-bold lg:text-4xl">
              โปรโมชั่นพิเศษ 🎉
            </h2>
            <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
              <p className="mb-4 text-2xl font-semibold text-primary">
                สั่งครบ 500 บาท ส่งฟรี! 🚚
              </p>
              <p className="mb-6 text-gray-600">
                พิเศษเฉพาะการสั่งผ่านเว็บไซต์เท่านั้น
              </p>
              <button className="rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:bg-opacity-90">
                สั่งเลย
              </button>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-900 py-12 text-white" id="contact">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Contact Info */}
              <div>
                <h3 className="mb-4 font-heading text-xl font-semibold">
                  ติดต่อเรา
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p>
                      82/655 หมู่ 20 ต.บางพลีใหญ่ อ.บางพลี จ.สมุทรปราการ 10540
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <p>เปิดทุกวัน 10:00 - 21:00 น.</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="mb-4 font-heading text-xl font-semibold">
                  ลิงก์ด่วน
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#menu" className="transition hover:text-primary">
                      เมนูแนะนำ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#promotion"
                      className="transition hover:text-primary"
                    >
                      โปรโมชั่น
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-primary">
                      พื้นที่ให้บริการ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-primary">
                      เงื่อนไขการใช้บริการ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="mb-4 font-heading text-xl font-semibold">
                  ติดตามเรา
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="transition hover:text-primary">
                    Facebook
                  </a>
                  <a href="#" className="transition hover:text-primary">
                    Line
                  </a>
                  <a href="#" className="transition hover:text-primary">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

// Features data
const features = [
  {
    title: "การันตีความสด",
    description: "วัตถุดิบคุณภาพ สด สะอาด ทุกวัน",
    icon: <span className="text-2xl">🍣</span>,
  },
  {
    title: "จัดส่งรวดเร็ว",
    description: "ส่งด่วนภายใน 30 นาที",
    icon: <span className="text-2xl">🚚</span>,
  },
  {
    title: "สั่งง่ายผ่านไลน์",
    description: "แอดไลน์ สั่งง่าย ไม่ยุ่งยาก",
    icon: <span className="text-2xl">📱</span>,
  },
  {
    title: "โปรโมชั่นประจำวัน",
    description: "มีโปรโมชั่นพิเศษทุกวัน",
    icon: <span className="text-2xl">🎉</span>,
  },
];
