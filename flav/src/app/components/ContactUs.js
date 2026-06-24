"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

const details = [
  {
    icon: FaPhone,
    label: "Phone",
    value: "+233 592 080 783 · +233 261 713 604",
  },
  { icon: FaEnvelope, label: "Email", value: "Stevbaxter24@gmail.com" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Accra, Ghana" },
  { icon: FaInstagram, label: "Instagram", value: "@d_woodyshop" },
];

function ContactUs() {
  const [form, setForm] = useState({ name: "", emailOrPhone: "", message: "" });
  const [modal, setModal] = useState({ isOpen: false, success: false, message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: form.name,
      email: form.emailOrPhone,
      message: form.message,
    };

    emailjs
      .send(
        "service_jsj2pbh",
        "template_yhr3jti",
        templateParams,
        "7uyqi_nxvtb_UptMj"
      )
      .then(
        () => {
          setModal({
            isOpen: true,
            success: true,
            message: "Your message was sent successfully!",
          });
          setForm({ name: "", emailOrPhone: "", message: "" });
          setLoading(false);
        },
        () => {
          setModal({
            isOpen: true,
            success: false,
            message: "Failed to send your message. Please try again.",
          });
          setLoading(false);
        }
      );
  };

  const closeModal = () => setModal({ ...modal, isOpen: false });

  const inputClasses =
    "w-full rounded-xl border border-espresso/15 bg-cream/50 px-4 py-3.5 text-espresso placeholder:text-espresso/40 transition-all duration-200 focus:border-wood-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-wood-500/20";

  return (
    <section id="contact" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact details */}
          <div>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tightest text-espresso sm:text-5xl">
              Let&apos;s start a conversation.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-espresso/70">
              Have a question or a piece in mind? Reach out — we&apos;d love to
              hear about your project.
            </p>

            <ul className="mt-10 space-y-5">
              {details.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-wood-500/10 text-wood-600">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-espresso/50">
                      {label}
                    </p>
                    <p className="text-espresso">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-espresso/5 sm:p-10">
            <h3 className="font-serif text-2xl text-espresso">Send us a message</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-espresso/70"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="emailOrPhone"
                  className="mb-1.5 block text-sm font-medium text-espresso/70"
                >
                  Email or Phone
                </label>
                <input
                  type="text"
                  name="emailOrPhone"
                  id="emailOrPhone"
                  value={form.emailOrPhone}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="How can we reach you?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-espresso/70"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your project…"
                  rows="5"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-espresso px-6 py-4 text-sm font-medium text-cream transition-all duration-300 hover:bg-wood-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Loading modal */}
      {loading && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal/50 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-2xl bg-white px-6 py-5 shadow-2xl">
            <FontAwesomeIcon icon={faSpinner} spin className="text-2xl text-wood-600" />
            <span className="text-espresso">Sending…</span>
          </div>
        </div>
      )}

      {/* Result modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div
              className={`mx-auto grid h-14 w-14 place-items-center rounded-full text-2xl ${
                modal.success
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {modal.success ? "✓" : "!"}
            </div>
            <h3 className="mt-5 font-serif text-2xl text-espresso">
              {modal.success ? "Message sent" : "Something went wrong"}
            </h3>
            <p className="mt-2 text-espresso/70">{modal.message}</p>
            <button
              onClick={closeModal}
              className="mt-6 w-full rounded-full bg-espresso px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-wood-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactUs;
