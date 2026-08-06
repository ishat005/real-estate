import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative h-[60vh] min-h-[450px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
        alt="Luxury Property"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-200">
            Premium Collection
          </p>

          <h1 className="text-5xl font-black leading-tight text-white md:text-6xl">
            Discover Your
            <br />
            Dream Property
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            Browse our curated collection of apartments, villas, houses,
            and condos designed to suit every lifestyle and budget.
          </p>

          <a
            href="#properties"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
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
