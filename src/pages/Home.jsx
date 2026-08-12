import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaLocationDot,
  FaHouse,
  FaDollarSign,
  FaMagnifyingGlass,
  FaArrowRight,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa6";

const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const [searchLocation, setSearchLocation] = useState("");
  const [searchPropertyType, setSearchPropertyType] = useState("All");
  const [searchBudget, setSearchBudget] = useState("Any");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setFetchError("");

        const response = await fetch(`${API_URL}/api/properties`);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch properties."
          );
        }

        setProperties(data.properties || []);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
        setFetchError(
          error.message || "Unable to load properties."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (searchLocation.trim()) {
      queryParams.set("location", searchLocation.trim());
    }

    if (searchPropertyType !== "All") {
      queryParams.set("propertyType", searchPropertyType);
    }

    if (searchBudget !== "Any") {
      queryParams.set("budget", searchBudget);
    }

    const queryString = queryParams.toString();

    navigate(
      `/properties${queryString ? `?${queryString}` : ""}`
    );
  };

  /*
   * Show featured properties first.
   * If there are no featured properties,
   * fall back to the first three properties.
   */
  const featuredProperties = properties
    .filter((property) => property.featured)
    .slice(0, 3);

  const popularHomes =
    featuredProperties.length > 0
      ? featuredProperties
      : properties.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-white">

        {/* Decorative background */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-8xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

            {/* LEFT CONTENT */}
            <div>

              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-slate-900" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Find Your Place
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Find a house
                <span className="block text-slate-500">
                  that suits you.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Discover beautiful homes in desirable locations,
                carefully selected to match your lifestyle, needs,
                and budget.
              </p>

              {/* CTA */}
              <div className="mt-7 flex flex-wrap items-center gap-3">

                <Link
                  to="/properties"
                  className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
                >
                  Explore Properties

                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/about"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50"
                >
                  Learn More
                </Link>

              </div>

              {/* STATS */}
              <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-slate-200 pt-7">

                <div>
                  <div className="text-2xl font-bold text-slate-950 sm:text-3xl">
                    {properties.length}+
                  </div>

                  <div className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Listed Properties
                  </div>
                </div>

                <div className="border-l border-slate-200 pl-4 sm:pl-6">
                  <div className="text-2xl font-bold text-slate-950 sm:text-3xl">
                    4500+
                  </div>

                  <div className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Happy Customers
                  </div>
                </div>

                <div className="border-l border-slate-200 pl-4 sm:pl-6">
                  <div className="text-2xl font-bold text-slate-950 sm:text-3xl">
                    100+
                  </div>

                  <div className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Awards
                  </div>
                </div>

              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative">

              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-sm" />

              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-300/40">

                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85"
                  alt="Luxury modern home"
                  className="h-[360px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[480px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-md">

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Featured Collection
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-950">
                      Luxury homes, thoughtfully selected
                    </p>
                  </div>

                  <Link
                    to="/properties"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-slate-800"
                  >
                    <FaArrowRight className="text-xs" />
                  </Link>

                </div>
              </div>
            </div>

          </div>

          {/* =====================================================
              SEARCH PANEL
          ====================================================== */}
          <div className="relative z-10 mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-6">

            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Property Search
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-950">
                Find your next home
              </h2>
            </div>

            <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr_1fr_auto]">

              {/* LOCATION */}
              <div className="relative">

                <FaLocationDot className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="City, neighbourhood or location"
                  value={searchLocation}
                  onChange={(e) =>
                    setSearchLocation(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
                />

              </div>

              {/* PROPERTY TYPE */}
              <div className="relative">

                <FaHouse className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <select
                  value={searchPropertyType}
                  onChange={(e) =>
                    setSearchPropertyType(e.target.value)
                  }
                  className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
                >
                  <option value="All">
                    All Property Types
                  </option>

                  <option value="Apartment">
                    Apartment
                  </option>

                  <option value="Villa">
                    Villa
                  </option>

                  <option value="House">
                    House
                  </option>

                  <option value="Condo">
                    Condo
                  </option>
                </select>

              </div>

              {/* BUDGET */}
              <div className="relative">

                <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <select
                  value={searchBudget}
                  onChange={(e) =>
                    setSearchBudget(e.target.value)
                  }
                  className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
                >
                  <option value="Any">
                    Any Budget
                  </option>

                  <option value="Under CAD 100K">
                    Under CAD 100K
                  </option>

                  <option value="CAD 100K - 500K">
                    CAD 100K - 500K
                  </option>

                  <option value="CAD 500K - 1M">
                    CAD 500K - 1M
                  </option>

                  <option value="Above CAD 1M">
                    Above CAD 1M
                  </option>
                </select>

              </div>

              {/* SEARCH BUTTON */}
              <button
                type="button"
                onClick={handleSearch}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                <FaMagnifyingGlass />

                Search
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          POPULAR HOMES
      ====================================================== */}
      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">

              <span className="h-px w-8 bg-slate-400" />

              Popular

            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Our Popular Homes
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Explore a selection of properties chosen for their
              location, design, and lifestyle appeal.
            </p>

          </div>

          <Link
            to="/properties"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
          >
            Explore All

            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>

        {/* Loading */}
        {loading && (
          <div className="grid gap-6 md:grid-cols-3">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="h-64 animate-pulse bg-slate-200" />

                <div className="space-y-3 p-5">

                  <div className="h-5 w-3/4 animate-pulse rounded bg-slate-200" />

                  <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />

                  <div className="h-4 w-full animate-pulse rounded bg-slate-200" />

                  <div className="h-10 w-full animate-pulse rounded bg-slate-200" />

                </div>
              </div>
            ))}

          </div>
        )}

        {/* Error */}
        {!loading && fetchError && (
          <div className="rounded-2xl border border-red-100 bg-red-50 p-8 text-center">

            <h3 className="text-lg font-semibold text-red-900">
              Unable to load properties
            </h3>

            <p className="mt-2 text-sm text-red-600">
              {fetchError}
            </p>

            <Link
              to="/properties"
              className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Browse Properties
            </Link>

          </div>
        )}

        {/* No properties */}
        {!loading &&
          !fetchError &&
          popularHomes.length === 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <FaHouse className="text-slate-500" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                No properties available yet
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                We are currently adding new properties to our
                collection. Explore all available properties to
                see what's currently listed.
              </p>

              <Link
                to="/properties"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View Properties
                <FaArrowRight className="text-xs" />
              </Link>

            </div>
          )}

        {/* Property cards */}
        {!loading &&
          !fetchError &&
          popularHomes.length > 0 && (
            <div className="grid gap-6 md:grid-cols-3">

              {popularHomes.map((property) => {

                const image =
                  property.images?.[0] ||
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80";

                const price = Number(property.price || 0);
                const area = Number(property.area || 0);

                return (
                  <article
                    key={property._id}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
                  >

                    {/* Image */}
                    <div className="relative overflow-hidden">

                      <img
                        src={image}
                        alt={property.title || "Property"}
                        className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />

                      {/* Featured badge */}
                      {property.featured && (
                        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur">
                          Featured
                        </div>
                      )}

                    </div>

                    {/* Content */}
                    <div className="p-5">

                      <h3 className="line-clamp-1 text-lg font-bold text-slate-950">
                        {property.title || "Beautiful Property"}
                      </h3>

                      <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                        <FaLocationDot className="text-xs text-slate-400" />

                        <span className="line-clamp-1">
                          {property.location || "Location unavailable"}
                        </span>
                      </div>

                      {/* Property details */}
                      <div className="mt-4 flex items-center gap-4 border-y border-slate-100 py-4 text-sm text-slate-600">

                        <span className="flex items-center gap-1.5">
                          <FaBed className="text-slate-400" />
                          {property.bedrooms ?? 0} Beds
                        </span>

                        <span className="flex items-center gap-1.5">
                          <FaBath className="text-slate-400" />
                          {property.bathrooms ?? 0} Baths
                        </span>

                        <span className="flex items-center gap-1.5">
                          <FaRulerCombined className="text-slate-400" />
                          {area.toLocaleString()} sqft
                        </span>

                      </div>

                      {/* Bottom */}
                      <div className="mt-5 flex items-center justify-between gap-3">

                        <div>
                          <p className="text-xs text-slate-400">
                            Starting from
                          </p>

                          <p className="mt-0.5 text-lg font-bold text-slate-950">
                            CAD {price.toLocaleString()}
                          </p>
                        </div>

                        <Link
                          to={`/properties/${property._id}`}
                          className="group/button inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
                        >
                          Details

                          <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover/button:translate-x-1" />
                        </Link>

                      </div>

                    </div>
                  </article>
                );
              })}

            </div>
          )}

      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="mx-auto max-w-8xl px-4 pb-16 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-10 lg:px-14">

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                Your next chapter
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to find a place you can call home?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Browse our latest listings and discover a property
                that fits your lifestyle.
              </p>

            </div>

            <Link
              to="/properties"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Browse Properties

              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;