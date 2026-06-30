"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaTooth } from "react-icons/fa";

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

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <div className="flex items-center gap-3">

          <FaTooth className="text-cyan-400 text-3xl" />

          <div>

            <h1 className="font-bold text-2xl">
              Sakthi Dental
            </h1>

            <p className="text-xs text-gray-400">
              Healthy Smile • Happy Life
            </p>

          </div>

        </div>

        <ul className="hidden lg:flex gap-8">

          {links.map((item) => (

            <li key={item}>

              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 duration-300"
              >
                {item}
              </a>

            </li>

          ))}

        </ul>

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
            >
              {item}
            </a>

          ))}

        </div>

      )}

    </nav>
  );
}