"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Services",
    "Doctors",
    "Appointment",
    "Testimonials",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <div className="flex items-center gap-4">

          <Image
            src="/images/logo.png"
            alt="Sakthi Dental Clinic"
            width={170}
            height={55}
            priority
          />

        </div>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex gap-8">

          {links.map((item) => (

            <li key={item}>

              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition"
              >
                {item}
              </a>

            </li>

          ))}

        </ul>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {open && (

        <div className="lg:hidden bg-slate-900 px-8 py-6 space-y-5">

          {links.map((item) => (

            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>

          ))}

        </div>

      )}

    </nav>
  );
}