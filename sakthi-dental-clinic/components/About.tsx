"use client";

import { motion } from "framer-motion";
import { Award, Clock3, HeartHandshake, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Award size={32} />,
    title: "Experienced Dentists",
    desc: "Highly qualified professionals with years of expertise."
  },
  {
    icon: <Clock3 size={32} />,
    title: "Flexible Timings",
    desc: "Appointments designed around your busy schedule."
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Patient First",
    desc: "Comfortable and caring treatment for every patient."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Safe Treatment",
    desc: "Modern sterilization and international safety standards."
  }
];

export default function About() {
  return (
    <section id="about" className="section">

      <motion.h2
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className="title"
      >
        About Our Clinic
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        <div>

          <h3 className="text-4xl font-bold mb-6 text-cyan-400">
            Creating Healthy Smiles Since 2012
          </h3>

          <p className="text-gray-300 leading-8">
            Sakthi Dental Clinic provides world-class dental care using
            advanced technology, experienced specialists, and personalized
            treatment plans. We believe every smile deserves expert care in a
            safe, comfortable, and friendly environment.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6">

          {features.map((item,index)=>(

            <motion.div
              key={index}
              whileHover={{scale:1.05}}
              className="card p-6 text-center"
            >

              <div className="text-cyan-400 flex justify-center mb-4">
                {item.icon}
              </div>

              <h4 className="font-bold mb-3">
                {item.title}
              </h4>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}