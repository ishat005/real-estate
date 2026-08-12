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
  FaStar
} from "react-icons/fa6";

const API_URL = import.meta.env.VITE_API_URL;

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  const [testimonialError, setTestimonialError] = useState("");

  const stats = [
    { value: "1200+", label: "Listed Properties" },
    { value: "4500+", label: "Happy Customers" },
    { value: "100+", label: "Awards Won" },
    { value: "15+", label: "Years of Experience" },
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoadingTestimonials(true);
        setTestimonialError("");

        const response = await fetch(
          `${API_URL}/api/testimonials`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch testimonials."
          );
        }

        setTestimonials(data.testimonials);
      } catch (error) {
        console.error("Fetch testimonials error:", error);
        setTestimonialError(error.message);
      } finally {
        setLoadingTestimonials(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-slate-100 text-slate-900">

      {/* Hero Section */}
      <section className="bg-[#dfeaf5] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-black text-slate-950">
            About La Maison
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Helping individuals and families discover homes that perfectly
            complement their lifestyle, aspirations, and future.
          </p>

          <Link
            to="/properties"
            className="mt-8 inline-block rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Explore Properties
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">
              Our Story
            </h2>

            <p className="mb-6 leading-8 text-slate-600">
              At <span className="font-semibold">La Maison</span>, we believe
              finding a home should be an exciting and stress-free journey.
              Our mission is to connect buyers, renters, and investors with
              carefully selected properties that meet their lifestyle and
              financial goals.
            </p>

            <p className="leading-8 text-slate-600">
              From modern apartments to luxury villas, every listing on our
              platform is chosen with quality, trust, and transparency in mind.
              We strive to make every step of your property journey simple,
              secure, and rewarding.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury Home"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <FaBullseye className="mb-5 text-4xl text-slate-900" />

            <h3 className="mb-4 text-2xl font-bold">
              Our Mission
            </h3>

            <p className="leading-8 text-slate-600">
              To simplify the real estate experience through trusted listings,
              innovative technology, and exceptional customer service.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <FaEye className="mb-5 text-4xl text-slate-900" />

            <h3 className="mb-4 text-2xl font-bold">
              Our Vision
            </h3>

            <p className="leading-8 text-slate-600">
              To become the most trusted destination for discovering premium
              homes while creating meaningful experiences for every client.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="mb-14 text-center text-4xl font-bold">
          Why Choose Us
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <FaShieldHalved className="mb-5 text-4xl text-slate-900" />

            <h3 className="mb-3 text-xl font-semibold">
              Verified Listings
            </h3>

            <p className="text-slate-600">
              Every property is carefully verified for quality and authenticity.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <FaLocationDot className="mb-5 text-4xl text-slate-900" />

            <h3 className="mb-3 text-xl font-semibold">
              Prime Locations
            </h3>

            <p className="text-slate-600">
              Discover homes in the most desirable cities and neighborhoods.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <FaHandshake className="mb-5 text-4xl text-slate-900" />

            <h3 className="mb-3 text-xl font-semibold">
              Trusted Service
            </h3>

            <p className="text-slate-600">
              Transparency and customer satisfaction are at the heart of what we do.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
            <FaGem className="mb-5 text-4xl text-slate-900" />

            <h3 className="mb-3 text-xl font-semibold">
              Luxury Experience
            </h3>

            <p className="text-slate-600">
              Explore premium homes crafted for modern lifestyles.
            </p>
          </div>

        </div>
      </section>

    {/* Testimonials */}
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Testimonials
          </p>

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Hear from homeowners and investors who trusted La Maison to
            find their perfect property.
          </p>
        </div>

        {/* Loading */}
        {loadingTestimonials ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-6 shadow-sm sm:p-7"
              >
                {/* Stars */}
                <div className="mb-6 h-5 w-28 animate-pulse rounded bg-slate-200" />

                {/* Review */}
                <div className="space-y-3">
                  <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                  <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                  <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200" />
                </div>

                {/* User */}
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
        ) : testimonialError ? (
          /* Error */
          <div className="mx-auto max-w-xl rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
            {testimonialError}
          </div>
        ) : testimonials.length === 0 ? (
          /* Empty */
          <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500">
            No testimonials available yet.
          </div>
        ) : (
          /* Testimonials Grid */
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial._id}
                className="flex h-full min-w-0 flex-col rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                {/* Stars */}
                <div className="mb-5 flex gap-1 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                {/* Review */}
                <p className="flex-1 break-words text-base leading-7 text-slate-600">
                  "{testimonial.message}"
                </p>

                {/* User */}
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

      </div>
    </section>
      {/* CTA */}
      <section className="bg-slate-900 py-20 text-center text-white">

        <div className="mx-auto max-w-4xl px-6">

          <FaHouse className="mx-auto mb-6 text-5xl" />

          <h2 className="text-4xl font-bold">
            Ready to Find Your Dream Home?
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Browse hundreds of carefully selected properties and begin your
            journey toward finding the perfect place to call home.
          </p>

          <Link
            to="/properties"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Explore Properties
          </Link>

        </div>

      </section>

    </div>
  );
};

export default About;