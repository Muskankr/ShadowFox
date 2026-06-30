"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Can medication completely relieve tooth pain?",
    a: "Not entirely. While medications may offer temporary relief, lasting relief requires identifying and treating the root cause through professional dental care.",
  },
  {
    q: "Does teeth scaling damage enamel or create gaps?",
    a: "No. Scaling safely removes plaque and tartar without damaging enamel or creating gaps. Mild sensitivity after treatment is temporary.",
  },
  {
    q: "Can fluorosis stains be removed through scaling?",
    a: "Scaling removes only surface stains. Fluorosis is an intrinsic stain that may require bleaching, veneers, or crowns.",
  },
  {
    q: "Can painful teeth be treated with fillings?",
    a: "Not always. If decay reaches the pulp, Root Canal Treatment or extraction may be necessary. Fillings are suitable only for enamel and dentin damage.",
  },
  {
    q: "Is placing a crown necessary after Root Canal Treatment?",
    a: "Yes. A crown strengthens the treated tooth, prevents fractures, and restores chewing efficiency.",
  },
  {
    q: "Can milk teeth need Root Canal Treatment?",
    a: "Yes. If a milk tooth has severe decay but needs to remain for proper development, Root Canal Treatment can preserve it.",
  },
  {
    q: "How can I maintain good oral hygiene?",
    a: "Brush twice daily, floss regularly, rinse after meals, use fluoride toothpaste, and visit your dentist every six months.",
  },
  {
    q: "What is the best age to get braces?",
    a: "Braces are generally most effective between 12 and 14 years of age, although treatment may begin earlier depending on the condition.",
  },
  {
    q: "Do all wisdom teeth need removal?",
    a: "No. Removal is necessary only if the wisdom tooth is impacted, infected, or causing pain or crowding.",
  },
  {
    q: "Should missing teeth be replaced after extraction?",
    a: "Yes. Replacing missing teeth maintains proper bite alignment and prevents neighboring teeth from shifting.",
  },
  {
    q: "What are the benefits of dental implants?",
    a: "Dental implants restore appearance, improve chewing, and provide a durable, natural-looking replacement for missing teeth.",
  },
  {
    q: "Which toothbrush and toothpaste should I use?",
    a: "Use a soft or medium-bristled toothbrush with fluoride toothpaste and replace the brush every three months.",
  },
  {
    q: "What causes tooth sensitivity?",
    a: "Sensitivity may occur due to enamel wear, exposed roots, cavities, or small cracks in teeth.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "Routine dental check-ups every six months help maintain healthy teeth and gums.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
  id="faq"
  className="section"
>
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-300 mt-5 mb-14 max-w-3xl mx-auto">
          Everything you need to know about our treatments, oral hygiene,
          appointments, and dental procedures.
        </p>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="
rounded-2xl
bg-slate-900/60
backdrop-blur-md
border
border-cyan-400/20
shadow-lg
hover:border-cyan-400
transition
duration-300
overflow-hidden
"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="font-semibold text-lg text-white">
                  {faq.q}
                </span>

                {openIndex === index ? (
                  <Minus className="text-cyan-600" size={24} />
                ) : (
                  <Plus className="text-cyan-600" size={24} />
                )}

              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >

                <p className="px-6 pb-6 text-gray-300 leading-8">
                  {faq.a}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}