import {
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
      py-12
      px-6
      bg-black/30
      border-t
      border-yellow-400/20
      "
    >

      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-yellow-400">
          CSKVerse
        </h2>

        <p className="text-gray-400 mt-4">
          Ultimate Chennai Super Kings Fan Hub
        </p>

        <div className="flex justify-center gap-6 mt-6 text-2xl">

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaTwitter />
          </a>

          <a href="#">
            <FaGithub />
          </a>

        </div>

        <p className="mt-8 text-gray-500">
          © 2026 CSKVerse | Created by Muskan  All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}