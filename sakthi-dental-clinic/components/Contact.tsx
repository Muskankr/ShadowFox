"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    e.currentTarget.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="section">

      <h2 className="title">
        Contact Us
      </h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        We'd love to hear from you. Whether you have questions,
        need an appointment or want to know more about our
        services, our team is always happy to help.
      </p>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Contact Form */}

        <div className="card p-8">

          <h3 className="text-2xl font-bold text-cyan-400 mb-6">
            We would love to hear from you
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>

              <label className="block mb-2 font-medium">
                Name *
              </label>

              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Email *
              </label>

              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Phone Number *
              </label>

              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Your Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
              />

            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
            >
              Submit
            </button>

            {submitted && (

              <div className="bg-green-500/20 border border-green-500 text-green-300 rounded-xl p-4">

                ✅ Thank you! Your message has been received successfully.
                Our team will contact you shortly.

              </div>

            )}

          </form>

        </div>

        {/* Contact Details */}

        <div className="space-y-8">

          <div className="card p-8">

            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Reach Us
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <MapPin className="text-cyan-400 mt-1" />

                <div>

                  <p className="font-semibold">
                    Address
                  </p>

                  <p className="text-gray-400">
                    B2/8, SBM Layout,
                    <br />
                    Anthivadi,
                    <br />
                    Hosur,
                    <br />
                    Tamil Nadu 635109,
                    <br />
                    India
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Mail className="text-cyan-400 mt-1" />

                <div>

                  <p className="font-semibold">
                    Email
                  </p>

                  <a
                    href="mailto:info@sakthidentalclinic.in"
                    className="text-gray-400 hover:text-cyan-400"
                  >
                    info@sakthidentalclinic.in
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <Phone className="text-cyan-400 mt-1" />

                <div>

                  <p className="font-semibold">
                    Phone
                  </p>

                  <a
                    href="tel:+919862890897"
                    className="block text-gray-400 hover:text-cyan-400"
                  >
                    +91 9862890897
                  </a>

                  <a
                    href="tel:+919363298118"
                    className="block text-gray-400 hover:text-cyan-400"
                  >
                    +91 9363298118
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock className="text-cyan-400 mt-1" />

                <div>

                  <p className="font-semibold">
                    Clinic Timings
                  </p>

                  <p className="text-gray-400">
                    Sunday - Saturday
                    <br />
                    <strong>9:00 AM - 7:00 PM</strong>
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Google Map */}

          <div className="card overflow-hidden p-0 rounded-2xl">

            <iframe
              src="https://maps.google.com/maps?q=B2/8%20SBM%20Layout%20Anthivadi%20Hosur%20Tamil%20Nadu%20635109&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[350px]"
              loading="lazy"
            />

          </div>

        </div>

      </div>

    </section>
  );
}