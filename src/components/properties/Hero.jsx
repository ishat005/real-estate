import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden sm:min-h-[500px] lg:h-[60vh] lg:min-h-[450px]">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
        alt="Luxury Property"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[520px] items-center px-6 py-12 sm:min-h-[500px] lg:h-full lg:min-h-0 lg:max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-200 sm:text-base">
            Premium Collection
          </p>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Discover Your
            <br />
            Dream Property
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
            Browse our curated collection of apartments, villas, houses,
            and condos designed to suit every lifestyle and budget.
          </p>

          <a
            href="#properties"
            className="mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100 sm:mt-8 sm:px-6"
          >
            Browse Listings
            <FaArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;