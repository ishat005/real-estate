import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaHouse,
  FaDollarSign,
  FaMagnifyingGlass,
} from "react-icons/fa6";

const Home = () => {
  const stats = [
    { value: "1200+", label: "Listed Properties" },
    { value: "4500+", label: "Happy Customers" },
    { value: "100+", label: "Awards" },
  ];

  const homes = [
    {
      title: "Banana Island, Lagos",
      price: "CAD 100,000,000",
      beds: "4 Bed",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Parkview Estate, Lagos",
      price: "CAD 200,000,000",
      beds: "5 Bed",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Eko Atlantic, Lagos",
      price: "CAD 500,000,000",
      beds: "3 Bed",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Eko Atlantic, Lagos",
      price: "CAD 500,000,000",
      beds: "3 Bed",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-8xl bg-[#dfeaf5] px-4 py-8 sm:px-6 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Find A House That Suits You
            </h1>
            <p className="mt-4 max-w-lg text-base text-slate-600 sm:text-lg">
              Want to find a home? We are ready to help you find one that suits your lifestyle and needs.
            </p>

            <Link
              to="/properties"
              className="mt-6 inline-block rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Get Started
            </Link>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label}>
                  <div className="text-3xl font-bold text-slate-950">{item.value}</div>
                  <div className="text-sm text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury property"
              className="h-[320px] w-full object-cover sm:h-[420px]"
            />
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-4 shadow-sm sm:p-5">
          <div className="mb-3 text-lg font-semibold text-slate-900">
            Search for available properties
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {/* Location */}
            <div className="relative">
              <FaLocationDot className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Location"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Property Type */}
            <div className="relative">
              <FaHouse className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <select
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              >
                <option>Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </div>

            {/* Budget */}
            <div className="relative">
              <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <select
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              >
                <option>Budget</option>
                <option>Under CAD 100K</option>
                <option>CAD 100K - 500K</option>
                <option>CAD 500K - 1M</option>
                <option>Above CAD 1M</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-lg">
              <FaMagnifyingGlass />
              Search Now
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-4 pb-12 sm:px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mt-10 mb-3">
              <span className="h-px w-8 bg-slate-400"></span>
              <span>Popular</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-950">Our Popular Homes</h2>
          </div>
          <Link to="/properties" className="text-sm font-semibold text-slate-700">Explore All →</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {homes.slice(0, 3).map((home) => (
            <div key={home.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img src={home.image} alt={home.title} className="h-64 w-full object-cover" />
              <div className="p-4">
                <div className="mb-3 text-lg font-semibold text-slate-900">{home.title}</div>
                <div className="mb-4 flex gap-4 text-sm text-slate-600">
                  <span>{home.beds}</span>
                  <span>10x10 m</span>
                  <span>1600 m²</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-950">{home.price}</span>
                  <button className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;