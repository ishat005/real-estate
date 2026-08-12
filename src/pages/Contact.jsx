import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaArrowRight,
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
      const response = await fetch(`${API_URL}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save your message.");
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

  const contactDetails = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Office",
      lines: ["453 West 12th Avenue,", "Vancouver, BC"],
    },
    {
      icon: FaPhoneAlt,
      title: "Phone",
      lines: ["+234 800 123 4567"],
    },
    {
      icon: FaEnvelope,
      title: "Email",
      lines: ["tisha8357@gmail.com"],
      breakAll: true,
    },
    {
      icon: FaClock,
      title: "Opening Hours",
      lines: ["Monday – Friday: 9:00 AM – 6:00 PM", "Saturday: 10:00 AM – 4:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-white">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-slate-900" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Get In Touch
              </span>
              <span className="h-px w-10 bg-slate-900" />
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Have a question about a property or need help finding your
              perfect home? Our team is here to help.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}
      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="grid gap-6 lg:grid-cols-2">

          {/* ======================================
              CONTACT INFORMATION
          ====================================== */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <span className="h-px w-8 bg-slate-400" />
              Contact Info
            </div>

            <h2 className="text-2xl font-bold text-slate-950">
              Get In Touch
            </h2>

            <p className="mt-2 text-slate-600">
              Reach out to us and one of our property specialists will get
              back to you shortly.
            </p>

            <div className="mt-8 space-y-6">
              {contactDetails.map(({ icon: Icon, title, lines, breakAll }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
                    <Icon />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {title}
                    </h3>

                    <p
                      className={`mt-1 text-sm leading-6 text-slate-600 ${
                        breakAll ? "break-all" : ""
                      }`}
                    >
                      {lines.map((line, index) => (
                        <span key={line}>
                          {line}
                          {index < lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ======================================
              CONTACT FORM
          ====================================== */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <span className="h-px w-8 bg-slate-400" />
              Send a Message
            </div>

            <h2 className="text-2xl font-bold text-slate-950">
              Send Us a Message
            </h2>

            <p className="mt-2 text-slate-600">
              Fill out the form below and we'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

              {/* Success Message */}
              {success && (
                <div className="rounded-xl border border-green-100 bg-green-50 p-4 text-sm leading-6 text-green-700">
                  {success}
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm leading-6 text-red-700">
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
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
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
                  className={`h-12 w-full rounded-xl border bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                    validationErrors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/5"
                      : "border-slate-200 focus:border-slate-900 focus:ring-slate-900/5"
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
                  className={`h-12 w-full rounded-xl border bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                    validationErrors.phone
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/5"
                      : "border-slate-200 focus:border-slate-900 focus:ring-slate-900/5"
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
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
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
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
                />
              </div>

              {/* ==================================
                  SUBMIT
              ================================== */}
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg disabled:pointer-events-none disabled:opacity-60 disabled:hover:translate-y-0"
              >
                <FaPaperPlane size={13} />
                {sending ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ TEASER
      ====================================================== */}
      <section className="mx-auto max-w-8xl px-4 pb-16 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-10 lg:px-14">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Still curious
          </p>

          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have More Questions?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Check out our frequently asked questions or get in touch with
            our team for more information.
          </p>

          <a
            href="mailto:tisha8357@gmail.com"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Email Us
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </a>

        </div>

      </section>
    </div>
  );
};

export default Contact;