import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-800 text-center text-gray-400">

      <h2 className="text-2xl font-bold text-cyan-400">
        Sakthi Dental Clinic
      </h2>

      <p className="mt-3">
        Healthy Smiles • Happy Lives
      </p>

      <div className="mt-6 flex justify-center gap-6 text-sm">

        <Link
          href="/privacy"
          className="hover:text-cyan-400 transition"
        >
          Privacy Policy
        </Link>

        <a
          href="#contact"
          className="hover:text-cyan-400 transition"
        >
          Contact
        </a>

        <a
          href="#appointment"
          className="hover:text-cyan-400 transition"
        >
          Book Appointment
        </a>

      </div>

      <p className="mt-6 text-sm">
        © 2026 Sakthi Dental Clinic. All Rights Reserved.
      </p>

    </footer>
  );
}