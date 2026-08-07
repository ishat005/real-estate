import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-slate-100 text-slate-900">
      {/* Hero */}
      <section className="bg-[#dfeaf5] px-6 py-16 text-center">
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
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Get In Touch
              </h2>

              <p className="mt-2 text-slate-600">
                Reach out to us and one of our property specialists will
                get back to you shortly.
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
                    453 West 12th Avenue,,
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

                  <p className="mt-1 text-sm text-slate-600">
                    hello@lamaison.com
                  </p>
                </div>
              </div>

              {/* Hours */}
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

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Send Us a Message
              </h2>

              <p className="mt-2 text-slate-600">
                Fill out the form below and we'll get back to you.
              </p>
            </div>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What can we help you with?"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <FaPaperPlane size={13} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
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