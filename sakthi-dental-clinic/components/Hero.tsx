"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-600/20"/>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <motion.h3

          initial={{opacity:0}}

          animate={{opacity:1}}

          transition={{duration:1}}

          className="text-cyan-400 text-xl"

        >

          Welcome To

        </motion.h3>

        <motion.h1

          initial={{y:40,opacity:0}}

          animate={{y:0,opacity:1}}

          transition={{duration:1}}

          className="text-6xl md:text-8xl font-black mt-5"

        >

          Sakthi Dental

          <br/>

          Clinic

        </motion.h1>

        <motion.p

          initial={{opacity:0}}

          animate={{opacity:1}}

          transition={{delay:1}}

          className="max-w-3xl mx-auto mt-8 text-gray-300 text-lg"

        >

          Experience exceptional dental care with modern technology,
          expert dentists, and a commitment to creating healthy,
          confident smiles for every patient.

        </motion.p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a

            href="#appointment"

            className="btn btn-primary"

          >

            Book Appointment

          </a>

          <a

            href="#services"

            className="btn btn-outline"

          >

            Explore Services

          </a>

        </div>

      </div>

    </section>
  );
}