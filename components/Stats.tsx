"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "5",
    title: "IPL Titles",
  },
  {
    number: "250+",
    title: "Matches Played",
  },
  {
    number: "140+",
    title: "Matches Won",
  },
  {
    number: "16+",
    title: "Years of Legacy",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="py-24 px-6 bg-[#071F45]"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-4">
          Team Statistics
        </h2>

        <p className="text-center text-gray-300 mb-16">
          Chennai Super Kings Legacy in Numbers
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="
              bg-white/5
              backdrop-blur-lg
              border
              border-white/10
              rounded-3xl
              p-10
              text-center
              hover:border-yellow-400
              hover:scale-105
              transition-all
              duration-300
              "
            >

              <h3 className="text-6xl font-extrabold text-yellow-400">
                {stat.number}
              </h3>

              <p className="mt-4 text-gray-300 text-lg">
                {stat.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}