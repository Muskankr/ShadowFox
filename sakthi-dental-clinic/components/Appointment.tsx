"use client";

import { motion } from "framer-motion";

export default function Appointment() {
  return (
    <section id="appointment" className="section">

      <motion.h2
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="title"
      >
        Book an Appointment
      </motion.h2>

      <div className="max-w-4xl mx-auto card p-10">

        <form className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="bg-slate-900 p-4 rounded-xl outline-none border border-slate-700"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-slate-900 p-4 rounded-xl outline-none border border-slate-700"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-slate-900 p-4 rounded-xl outline-none border border-slate-700"
          />

          <input
            type="date"
            className="bg-slate-900 p-4 rounded-xl outline-none border border-slate-700"
          />

          <select className="bg-slate-900 p-4 rounded-xl outline-none border border-slate-700">

            <option>General Checkup</option>

            <option>Root Canal</option>

            <option>Dental Implant</option>

            <option>Braces</option>

            <option>Teeth Cleaning</option>

          </select>

          <input
            type="time"
            className="bg-slate-900 p-4 rounded-xl outline-none border border-slate-700"
          />

          <textarea
            rows={5}
            placeholder="Additional Message"
            className="md:col-span-2 bg-slate-900 p-4 rounded-xl outline-none border border-slate-700"
          />

          <button
            className="btn btn-primary md:col-span-2"
          >
            Book Appointment
          </button>

        </form>

      </div>

    </section>
  );
}