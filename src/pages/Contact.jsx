import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  // ==============================
  // EMAILJS CONFIGURATION
  // ==============================
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // ==============================
  // HANDLE INPUT CHANGES
  // ==============================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Clear validation error when user starts correcting the field
    setValidationErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    // Clear general error when user changes something
    if (error) {
      setError("");
    }
  };

  // ==============================
  // FORM VALIDATION
  // ==============================
  const validateForm = () => {
    const errors = {};

    // ------------------------------
    // Email validation
    // ------------------------------
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    // ------------------------------
    // Phone validation
    // ------------------------------
    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

    if (formData.phone.trim()) {
      if (!phoneRegex.test(formData.phone.trim())) {
        errors.phone = "Please enter a valid phone number.";
      }
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // ==============================
  // HANDLE FORM SUBMISSION
  // ==============================
  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    // Validate before sending
    if (!validateForm()) {
      return;
    }

    setSending(true);

    try {
      // ==========================================
      // 1. SAVE CONTACT MESSAGE TO MONGODB
      // ==========================================
      const response = await fetch(
        `${API_URL}/api/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to save your message."
        );
      }

      // ==========================================
      // 2. SEND EMAIL THROUGH EMAILJS
      // ==========================================
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      // ==========================================
      // 3. SUCCESS MESSAGE
      // ==========================================
      setSuccess(
        "Your message has been sent successfully. We'll get back to you shortly."
      );

      // ==========================================
      // 4. RESET FORM
      // ==========================================
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setValidationErrors({});
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        error.message ||
          "Sorry, we couldn't send your message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      {/* ==========================================
          HERO
      ========================================== */}
      <section className="bg-[#dfeaf5] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Get In Touch
          </p>

          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Have a question about a property or need help finding your
            perfect home? Our team is here to help.
          </p>
        </div>
      </section>

      {/* ==========================================
          CONTACT CONTENT
      ========================================== */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* ======================================
              CONTACT INFORMATION
          ====================================== */}
          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Get In Touch
              </h2>

              <p className="mt-2 text-slate-600">
                Reach out to us and one of our property specialists
                will get back to you shortly.
              </p>
            </div>

            <div className="space-y-6">

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dfeaf5] text-slate-900">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Our Office
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    453 West 12th Avenue,
                    <br />
                    Vancouver, BC
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dfeaf5] text-slate-900">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Phone
                  </h3>

                  <p className="mt-1 text-sm text-slate-600">
                    +234 800 123 4567
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dfeaf5] text-slate-900">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Email
                  </h3>

                  <p className="mt-1 break-all text-sm text-slate-600">
                    tisha8357@gmail.com
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dfeaf5] text-slate-900">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Opening Hours
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Monday – Friday: 9:00 AM – 6:00 PM
                    <br />
                    Saturday: 10:00 AM – 4:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ======================================
              CONTACT FORM
          ====================================== */}
          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-8">

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Send Us a Message
              </h2>

              <p className="mt-2 text-slate-600">
                Fill out the form below and we'll get back to you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Success Message */}
              {success && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-700">
                  {success}
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
                  {error}
                </div>
              )}

              {/* ==================================
                  FULL NAME
              ================================== */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                />
              </div>

              {/* ==================================
                  EMAIL
              ================================== */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className={`h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 ${
                    validationErrors.email
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-200 focus:border-slate-900"
                  }`}
                />

                {validationErrors.email && (
                  <p className="mt-1.5 text-sm text-red-600">
                    {validationErrors.email}
                  </p>
                )}
              </div>

              {/* ==================================
                  PHONE
              ================================== */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  className={`h-11 w-full rounded-xl border bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 ${
                    validationErrors.phone
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-200 focus:border-slate-900"
                  }`}
                />

                {validationErrors.phone && (
                  <p className="mt-1.5 text-sm text-red-600">
                    {validationErrors.phone}
                  </p>
                )}

                <p className="mt-1.5 text-xs text-slate-400">
                  Example: +1 604 555 1234
                </p>
              </div>

              {/* ==================================
                  SUBJECT
              ================================== */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What can we help you with?"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                />
              </div>

              {/* ==================================
                  MESSAGE
              ================================== */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                />
              </div>

              {/* ==================================
                  SUBMIT
              ================================== */}
              <button
                type="submit"
                disabled={sending}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FaPaperPlane size={13} />

                {sending ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* ==========================================
          FAQ TEASER
      ========================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl bg-[#dfeaf5] px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-bold text-slate-950">
            Have More Questions?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-slate-600">
            Check out our frequently asked questions or get in touch
            with our team for more information.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;