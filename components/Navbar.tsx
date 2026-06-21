"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 z-50 bg-[#041B3A]/80 backdrop-blur-lg border-b border-yellow-500/20">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <div className="flex items-center gap-4">

                    <div className="
    p-1
    bg-yellow-400
    rounded-full
    shadow-lg
    shadow-yellow-400/40
  ">

                        <Image
                            src="/images/logo.png"
                            alt="CSK Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />

                    </div>

                    <div>

                        <h1 className="
      text-2xl
      md:text-3xl
      font-extrabold
      text-yellow-400
      tracking-wide
    ">
                            CSKVerse
                        </h1>

                        <p className="
      text-[11px]
      text-gray-400
      hidden md:block
    ">
                            Ultimate Fan Experience
                        </p>

                    </div>

                </div>

                <ul className="hidden md:flex items-center gap-8 font-medium">

                    {[
                        ["Home", "#home"],
                        ["Overview", "#overview"],
                        ["Squad", "#squad"],
                        ["Schedule", "#schedule"],
                        ["Stats", "#stats"],
                        ["Fan Zone", "#fan-zone"],
                        ["News", "#news"],
                        ["Contact", "#contact"],
                    ].map(([label, href]) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="
        relative
        text-white/90
        hover:text-yellow-400
        transition-all
        duration-300
        hover:-translate-y-1
        after:absolute
        after:left-0
        after:-bottom-1
        after:w-0
        after:h-[2px]
        after:bg-yellow-400
        after:transition-all
        hover:after:w-full
        "
                            >
                                {label}
                            </a>
                        </li>
                    ))}

                </ul>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {menuOpen && (
                <div className="
  md:hidden
  bg-[#041B3A]/95
  backdrop-blur-xl
  border-t
  border-yellow-400/20
  p-6
  space-y-5
  ">

                    <a href="#home" className="block hover:text-yellow-400">Home</a>
                    <a href="#overview" className="block hover:text-yellow-400">Overview</a>
                    <a href="#squad" className="block hover:text-yellow-400">Squad</a>
                    <a href="#schedule" className="block hover:text-yellow-400">Schedule</a>
                    <a href="#stats" className="block hover:text-yellow-400">Stats</a>
                    <a href="#fan-zone" className="block hover:text-yellow-400">Fan Zone</a>
                    <a href="#news" className="block hover:text-yellow-400">News</a>
                    <a href="#contact" className="block hover:text-yellow-400">Contact</a>

                </div>
            )}
        </nav>
    );
}