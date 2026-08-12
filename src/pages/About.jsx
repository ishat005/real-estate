import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHouse,
  FaBullseye,
  FaEye,
  FaShieldHalved,
  FaLocationDot,
  FaHandshake,
  FaGem,
  FaStar,
  FaArrowRight,
} from "react-icons/fa6";

const API_URL = import.meta.env.VITE_API_URL;

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  const [testimonialError, setTestimonialError] = useState("");

  const values = [
    {
      icon: FaShieldHalved,
      title: "Verified Listings",
      description:
        "Every property is carefully verified for quality and authenticity.",
    },
    {
      icon: FaLocationDot,
      title: "Prime Locations",
      description:
        "Discover homes in the most desirable cities and neighborhoods.",
    },
    {
      icon: FaHandshake,
      title: "Trusted Service",
      description:
        "Transparency and customer satisfaction are at the heart of what we do.",
    },
    {
      icon: FaGem,
      title: "Luxury Experience",
      description: "Explore premium homes crafted for modern lifestyles.",
    },
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoadingTestimonials(true);
        setTestimonialError("");

        const response = await fetch(`${API_URL}/api/testimonials`);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch testimonials.");
        }

        setTestimonials(data.testimonials || []);
      } catch (error) {
        console.error("Fetch testimonials error:", error);
        setTestimonialError(error.message || "Unable to load testimonials.");
      } finally {
        setLoadingTestimonials(false);
      }
    };

    fetchTestimonials();
  }, []);

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
                About Us
              </span>
              <span className="h-px w-10 bg-slate-900" />
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              About La Maison
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Helping individuals and families discover homes that perfectly
              complement their lifestyle, aspirations, and future.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/properties"
                className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                Explore Properties
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ====================================================== */}
      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              <span className="h-px w-8 bg-slate-400" />
              Our Story
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A stress-free way to find home
            </h2>

            <p className="mt-6 leading-7 text-slate-600">
              At <span className="font-semibold text-slate-900">La Maison</span>,
              we believe finding a home should be an exciting and stress-free
              journey. Our mission is to connect buyers, renters, and
              investors with carefully selected properties that meet their
              lifestyle and financial goals.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              From modern apartments to luxury villas, every listing on our
              platform is chosen with quality, trust, and transparency in
              mind. We strive to make every step of your property journey
              simple, secure, and rewarding.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-300/40">
              <img
                src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=1400&q=85"
                alt="Luxury Home"
                className="h-[360px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ====================================================== */}
      <section className="mx-auto max-w-8xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
              <FaBullseye className="text-xl text-slate-900" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-950">
              Our Mission
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              To simplify the real estate experience through trusted
              listings, innovative technology, and exceptional customer
              service.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
              <FaEye className="text-xl text-slate-900" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-950">
              Our Vision
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              To become the most trusted destination for discovering premium
              homes while creating meaningful experiences for every client.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
      <section className="mx-auto max-w-8xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <span className="h-px w-8 bg-slate-400" />
            Why Choose Us
            <span className="h-px w-8 bg-slate-400" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            What Sets Us Apart
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <Icon className="text-xl text-slate-900" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}
      <section className="mx-auto max-w-8xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            <span className="h-px w-8 bg-slate-400" />
            Testimonials
            <span className="h-px w-8 bg-slate-400" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Hear from homeowners and investors who trusted La Maison to find
            their perfect property.
          </p>
        </div>

        {/* Loading */}
        {loadingTestimonials && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="mb-6 h-5 w-28 animate-pulse rounded bg-slate-200" />

                <div className="space-y-3">
                  <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                  <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                  <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200" />
                </div>

                <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="h-12 w-12 shrink-0 animate-pulse rounded-full bg-slate-200" />

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 h-4 w-32 animate-pulse rounded bg-slate-200" />
                    <div className="h-3 w-24 animate-pulse rounded bg-slate-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loadingTestimonials && testimonialError && (
          <div className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center">
            <h3 className="text-lg font-semibold text-red-900">
              Unable to load testimonials
            </h3>
            <p className="mt-2 text-sm text-red-600">{testimonialError}</p>
          </div>
        )}

        {/* Empty */}
        {!loadingTestimonials &&
          !testimonialError &&
          testimonials.length === 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <FaStar className="text-slate-500" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                No testimonials available yet
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Check back soon to hear from clients who found their perfect
                property with us.
              </p>
            </div>
          )}

        {/* Testimonials Grid */}
        {!loadingTestimonials &&
          !testimonialError &&
          testimonials.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial._id}
                  className="flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7"
                >
                  <div className="mb-5 flex gap-1 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>

                  <p className="flex-1 break-words text-base leading-7 text-slate-600">
                    "{testimonial.message}"
                  </p>

                  <div className="mt-8 flex min-w-0 items-center gap-4 border-t border-slate-100 pt-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />

                    <div className="min-w-0">
                      <h4 className="truncate font-semibold text-slate-900">
                        {testimonial.name}
                      </h4>

                      <p className="truncate text-sm text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="mx-auto max-w-8xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-10 lg:px-14">
          <FaHouse className="mx-auto mb-5 text-4xl text-white" />

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Your next chapter
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to find a place you can call home?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Browse hundreds of carefully selected properties and begin your
            journey toward finding the perfect place to call home.
          </p>

          <Link
            to="/properties"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Explore Properties
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;