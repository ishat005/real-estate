import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaLocationDot,
  FaHouse,
  FaDollarSign,
  FaMagnifyingGlass,
} from "react-icons/fa6";

const Home = () => {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchLocation, setSearchLocation] = useState("");
  const [searchPropertyType, setSearchPropertyType] = useState("All");
  const [searchBudget, setSearchBudget] = useState("Any");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/properties"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch properties."
          );
        }

        setProperties(data.properties);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
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

    navigate(`/properties?${queryParams.toString()}`);
  };

  // Featured properties first
  const popularHomes = properties
    .filter((property) => property.featured)
    .slice(0, 3);

  return (
    <div>
      {/* Hero / Intro Section */}
      <section className="mx-auto max-w-8xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Find A House That Suits You
            </h1>

            <p className="mt-4 max-w-xl text-slate-600">
              Want to find a home? We are ready to help you find
              one that suits your lifestyle and needs.
            </p>

            <Link
              to="/properties"
              className="mt-6 inline-block rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Get Started
            </Link>

            {/* Dynamic Stats */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div>
                <div className="text-3xl font-bold text-slate-950">
                  {properties.length}
                </div>

                <div className="text-sm text-slate-600">
                  Listed Properties
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-slate-950">
                  4500+
                </div>

                <div className="text-sm text-slate-600">
                  Happy Customers
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-slate-950">
                  100+
                </div>

                <div className="text-sm text-slate-600">
                  Awards
                </div>
              </div>
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

        {/* Search */}
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
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {/* Property Type */}
            <div className="relative">
              <FaHouse className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <select
                value={searchPropertyType}
                onChange={(e) => setSearchPropertyType(e.target.value)}
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
                value={searchBudget}
                onChange={(e) => setSearchBudget(e.target.value)}
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              >
                <option>Budget</option>
                <option>Under CAD 100K</option>
                <option>CAD 100K - 500K</option>
                <option>CAD 500K - 1M</option>
                <option>Above CAD 1M</option>
              </select>
            </div>

            {/* Search */}
            <button 
              onClick={handleSearch}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-lg"
            >
              <FaMagnifyingGlass />
              Search Now
            </button>
          </div>
        </div>
      </section>

      {/* Popular Homes */}
      <section className="mx-auto max-w-8xl px-4 pb-12 sm:px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <div className="mb-3 mt-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              <span className="h-px w-8 bg-slate-400"></span>
              <span>Popular</span>
            </div>

            <h2 className="text-3xl font-bold text-slate-950">
              Our Popular Homes
            </h2>
          </div>

          <Link
            to="/properties"
            className="text-sm font-semibold text-slate-700"
          >
            Explore All →
          </Link>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="py-12 text-center text-slate-500">
            Loading properties...
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {popularHomes.map((property) => (
              <div
                key={property._id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <img
                  src={property.images?.[0]}
                  alt={property.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-4">
                  <div className="mb-2 text-lg font-semibold text-slate-900">
                    {property.title}
                  </div>

                  <div className="mb-3 text-sm text-slate-500">
                    {property.location}
                  </div>

                  <div className="mb-4 flex gap-4 text-sm text-slate-600">
                    <span>
                      {property.bedrooms} Bed
                    </span>

                    <span>
                      {property.bathrooms} Bath
                    </span>

                    <span>
                      {property.area.toLocaleString()} sqft
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-950">
                      CAD {property.price.toLocaleString()}
                    </span>

                    <Link
                      to={`/properties/${property._id}`}
                      className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;