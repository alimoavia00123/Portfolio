import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebookF, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id",     // 🔹 Replace with your EmailJS Service ID
        "template_id",    // 🔹 Replace with your EmailJS Template ID
        form.current,
        "user_api_key"    // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <footer className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-gray-300 py-16 px-6 md:px-20 text-center">
      
      {/* ===== Contact Form Section ===== */}
      <div className="max-w-lg mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-6 text-[#38BDF8]">Get In Touch</h2>
        <p className="text-gray-400 mb-6">
          Have a project idea or want to collaborate? Send me a quick message 👇
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-[#1E293B]/70 border border-gray-600 text-white outline-none focus:border-[#38BDF8]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-[#1E293B]/70 border border-gray-600 text-white outline-none focus:border-[#38BDF8]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded-lg bg-[#1E293B]/70 border border-gray-600 text-white outline-none focus:border-[#38BDF8]"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#38BDF8] hover:bg-[#34D399] transition-all text-[#0F172A] font-semibold"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-green-400 mt-3">
              ✅ Message sent successfully! I’ll reply soon.
            </p>
          )}
        </form>
      </div>

      {/* ===== Social Links & Footer Info ===== */}
      <div className="flex justify-center gap-6 text-xl mb-6">
        <a href="https://facebook.com" target="_blank" className="hover:text-[#38BDF8]">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" className="hover:text-[#38BDF8]">
          <FaXTwitter />
        </a>
        <a href="https://github.com" target="_blank" className="hover:text-[#34D399]">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-[#34D399]">
          <FaLinkedin />
        </a>
      </div>

      <p className="text-gray-400 text-sm mb-1">
        Email: <span className="text-[#38BDF8]">alimoavia00123@gmail.com</span>
      </p>
      <p className="text-gray-500 text-xs">
        © {new Date().getFullYear()} Moavia Ali — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
