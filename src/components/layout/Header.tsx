"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Xizmatlar" },
    { href: "#specialists", label: "Shifokorlar" },
    { href: "#about", label: "Biz haqimizda" },
    { href: "#contact", label: "Bog'lanish" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        backgroundColor: scrolled ? "rgba(247,249,252,0.98)" : "rgba(247,249,252,0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(195,197,216,0.3)" : "1px solid rgba(195,197,216,0.1)",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 4px 24px rgba(25,28,30,0.08)" : "none",
      }}
    >
      <nav className="flex justify-between items-center px-5 md:px-12 py-3 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tighter font-headline text-primary">
            Monvital
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface opacity-70 font-headline font-bold tracking-tight hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="tel:+998555070007"
          className="hidden md:inline-block bg-tertiary text-on-tertiary px-6 py-3 rounded-xl font-headline font-bold tracking-tight hover:brightness-110 active:brightness-95 transition-all duration-300 shadow-md"
        >
          Qabulga yozilish
        </a>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="tel:+998555070007"
            className="bg-tertiary text-on-tertiary px-4 py-2 rounded-xl font-headline font-bold text-sm tracking-tight hover:brightness-110 transition-all duration-300 shadow-md"
          >
            Qabulga yozilish
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-surface-container-low transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-on-surface">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-1"
          style={{
            backgroundColor: "rgba(247,249,252,0.98)",
            borderTop: "1px solid rgba(195,197,216,0.2)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-on-surface font-headline font-bold tracking-tight hover:text-primary transition-colors duration-300 py-3 border-b border-outline-variant/10 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
