import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaDiscord,
  FaReddit,
} from "react-icons/fa";
import emailjs from "emailjs-com";



export default function ContactForm() {

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Inside your handleSubmit function, replace the alert with:
    emailjs
      .send(
        "service_h1szao8",
        "template_gnxqa9b",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "CGrPB5OhOnc4dvqxa"
      )
      .then(() => {
        alert("Email sent!");
      })
      .catch((error: { text: string }) => {
        alert("Failed to send email: " + error.text);
      });

    alert("Implement email sending logic here!");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="flex flex-row mb-[30px] items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mr-[10px]">
          Send me a
        </h2>
        <img src="/public/message.png" alt="" className="w-[100px] h-[60px]" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl space-y-6"
        autoComplete="off"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-white mb-2 text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-3 bg-white text-black focus:outline-none"
              placeholder="Brian Clark"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-white mb-2 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md px-4 py-3 bg-white text-black focus:outline-none"
              placeholder="example@youremail.com"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-white mb-2 text-sm">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 bg-white text-black focus:outline-none"
            placeholder="Type your message here..."
            rows={4}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-300 text-white px-10 py-2 rounded-md font-semibold hover:bg-indigo-400 transition"
          >
            SHOOT &rarr;
          </button>
        </div>
      </form>

      <div className="mt-10 text-white text-center">
        <p className="mb-4">Or contact me with...</p>
        <div className="flex gap-6 justify-center text-2xl">
          <a href="#" className="hover:text-indigo-300">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-indigo-300">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-indigo-300">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-indigo-300">
            <FaTiktok />
          </a>
          <a href="#" className="hover:text-indigo-300">
            <FaDiscord />
          </a>
          <a href="#" className="hover:text-indigo-300">
            <FaReddit />
          </a>
        </div>
      </div>
    </div>
  );
}
