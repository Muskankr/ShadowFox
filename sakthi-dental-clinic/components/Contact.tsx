"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="title">Contact Us</h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        We'd love to hear from you. Whether you have questions, need an
        appointment, or simply want to know more about our services, our team is
        here to help.
      </p>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Contact Form */}

        <div className="card p-8">

          <h3 className="text-2xl font-bold mb-6 text-cyan-400">
            We would love to hear from you
          </h3>

          <form className="space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Name *
              </label>

              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-cyan-400"
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
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-cyan-400"
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
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Your Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
            >
              Submit
            </button>

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
                <span>
                  B2/8, SBM Layout,
                  <br />
                  Anthivadi,
                  <br />
                  Hosur,
                  <br />
                  Tamil Nadu - 635109,
                  <br />
                  India
                </span>
              </div>

              <div className="flex gap-4">
                <Mail className="text-cyan-400 mt-1" />
                <span>info@sakthidentalclinic.in</span>
              </div>

              <div className="flex gap-4">
                <Phone className="text-cyan-400 mt-1" />
                <div>
                  <p>+91 9862890897</p>
                  <p>+91 9363298118</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-cyan-400 mt-1" />
                <span>
                  <strong>Sunday - Saturday</strong>
                  <br />
                  9:00 AM - 7:00 PM
                </span>
              </div>

            </div>

          </div>

          {/* Google Map */}

          <div className="card overflow-hidden p-0">

            <iframe
              src="https://maps.google.com/maps?q=Hosur%20Tamil%20Nadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[350px]"
              loading="lazy"
            />

          </div>

        </div>

      </div>
    </section>
  );
}