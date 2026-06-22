"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-blue-500/20"></div>

            <div className="text-center px-6 relative z-10">

                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-yellow-400 text-xl mb-4"
                >
                    WHISTLE PODU 💛
                </motion.h3>

                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="
text-6xl
md:text-8xl
lg:text-9xl
font-black
leading-none
tracking-tight
drop-shadow-lg
"
                >
                    CHENNAI
                    <br />
                    SUPER KINGS
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="max-w-3xl mx-auto mt-8 text-lg text-gray-300"
                >
                    The Official Fan Hub dedicated to the
                    five-time IPL Champions. Explore squad,
                    schedules, statistics, history and latest
                    updates from the pride of Chennai.
                </motion.p>

                <div className="mt-10">

                    <div
                        className="
    inline-block
    bg-yellow-400
    text-black
    px-8
    py-4
    rounded-2xl
    font-bold
    "
                    >
                        Next Match in: 5 Days
                    </div>

                </div>

                <div className="mt-10 flex justify-center gap-4 flex-wrap">

                    <a
                        href="#squad"
                        className="
px-8
py-4
bg-yellow-400
text-black
rounded-full
font-bold
hover:scale-110
hover:shadow-xl
hover:shadow-yellow-400/30
transition-all
duration-300
"
                    >
                        Explore Squad
                    </a>

                    <a
                        href="#overview"
                        className="
px-8
py-4
bg-yellow-400
text-black
rounded-full
font-bold
hover:scale-110
hover:shadow-xl
hover:shadow-yellow-400/30
transition-all
duration-300
"
                    >
                        Learn More
                    </a>

                </div>

            </div>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                    backgroundImage: "url('/images/csk-stadium.jpg')",
                }}
            ></div>

            <div
                className="
  absolute
  w-[500px]
  h-[500px]
  bg-yellow-400/10
  blur-[120px]
  rounded-full
  top-1/2
  left-1/2
  -translate-x-1/2
  -translate-y-1/2
  "
            ></div>
        </section>
    );
}