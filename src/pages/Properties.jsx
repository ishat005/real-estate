import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Hero from "../components/properties/Hero";
import PropertyCard from "../components/properties/PropertyCard";

const API_URL = import.meta.env.VITE_API_URL;

const Properties = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filters
  const [propertyType, setPropertyType] = useState(
    searchParams.get("propertyType") || "All"
  );

  const [location, setLocation] = useState(
    searchParams.get("location") || ""
  );

  const [budget, setBudget] = useState(
    searchParams.get("budget") || "Any"
  );

  const [bedrooms, setBedrooms] = useState("Any");
  const [bathrooms, setBathrooms] = useState("Any");

  // Sorting
  const [sortBy, setSortBy] = useState("Newest");

  // Fetch properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/api/properties`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch properties."
          );
        }

        const formattedProperties = data.properties.map(
          (property) => ({
            ...property,

            id: property._id,

            area: `${property.area.toLocaleString()} sqft`,

            image: property.images?.[0] || "",
          })
        );

        setProperties(formattedProperties);
      } catch (error) {
        console.error(
          "Fetch properties error:",
          error
        );

        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Reset all filters
  const resetFilters = () => {
    setPropertyType("All");
    setLocation("");
    setBudget("Any");
    setBedrooms("Any");
    setBathrooms("Any");

    // Remove filters from URL
    navigate("/properties", {
      replace: true,
    });
  };

  // Filter properties
  const filteredProperties = properties.filter(
    (property) => {
      // Property type
      const matchesPropertyType =
        propertyType === "All" ||
        property.propertyType === propertyType;

      // Location
      const matchesLocation =
        location.trim() === "" ||
        property.location
          .toLowerCase()
          .includes(
            location.toLowerCase().trim()
          );

      // Budget
      let matchesBudget = true;

      if (budget === "Under 100K") {
        matchesBudget =
          property.price < 100000;
      }

      if (budget === "100K - 500K") {
        matchesBudget =
          property.price >= 100000 &&
          property.price <= 500000;
      }

      if (budget === "500K - 1M") {
        matchesBudget =
          property.price > 500000 &&
          property.price <= 1000000;
      }

      if (budget === "Above 1M") {
        matchesBudget =
          property.price > 1000000;
      }

      // Bedrooms
      let matchesBedrooms = true;

      if (bedrooms !== "Any") {
        matchesBedrooms =
          property.bedrooms >=
          Number(bedrooms);
      }

      // Bathrooms
      let matchesBathrooms = true;

      if (bathrooms !== "Any") {
        matchesBathrooms =
          property.bathrooms >=
          Number(bathrooms);
      }

      return (
        matchesPropertyType &&
        matchesLocation &&
        matchesBudget &&
        matchesBedrooms &&
        matchesBathrooms
      );
    }
  );

  // Sort filtered properties
  const sortedProperties = [
    ...filteredProperties,
  ].sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price;
    }

    if (sortBy === "price-high") {
      return b.price - a.price;
    }

    if (sortBy === "bedrooms") {
      return b.bedrooms - a.bedrooms;
    }

    // Newest
    return (
      new Date(b.createdAt || 0) -
      new Date(a.createdAt || 0)
    );
  });

  return (
    <div className="bg-slate-100">
      <Hero />

      <section
        id="properties"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      >
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Available Properties
            </h2>

            <p className="mt-2 text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {sortedProperties.length}
              </span>{" "}
              premium properties
            </p>
          </div>

          {/* Sort */}
          <select
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900 sm:w-52"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
          >
            <option value="Newest">
              Newest
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="bedrooms">
              Bedrooms
            </option>
          </select>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-slate-500">
              Loading properties...
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">

            {/* Filters */}
            <aside className="h-fit rounded-3xl bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-6 text-xl font-bold text-slate-900">
                Filters
              </h3>

              {/* Location */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-slate-800">
                  Location
                </label>

                <input
                  type="text"
                  placeholder="Enter city"
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
                />
              </div>

              {/* Property Type */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-slate-800">
                  Property Type
                </label>

                <select
                  value={propertyType}
                  onChange={(e) =>
                    setPropertyType(e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                >
                  <option value="All">
                    All
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

              {/* Budget */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-slate-800">
                  Budget
                </label>

                <select
                  value={budget}
                  onChange={(e) =>
                    setBudget(e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                >
                  <option value="Any">
                    Any
                  </option>

                  <option value="Under 100K">
                    Under CAD 100K
                  </option>

                  <option value="100K - 500K">
                    CAD 100K - 500K
                  </option>

                  <option value="500K - 1M">
                    CAD 500K - 1M
                  </option>

                  <option value="Above 1M">
                    Above CAD 1M
                  </option>
                </select>
              </div>

              {/* Bedrooms */}
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-slate-800">
                  Bedrooms
                </label>

                <select
                  value={bedrooms}
                  onChange={(e) =>
                    setBedrooms(e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                >
                  <option value="Any">
                    Any
                  </option>

                  <option value="1">
                    1+
                  </option>

                  <option value="2">
                    2+
                  </option>

                  <option value="3">
                    3+
                  </option>

                  <option value="4">
                    4+
                  </option>
                </select>
              </div>

              {/* Bathrooms */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-slate-800">
                  Bathrooms
                </label>

                <select
                  value={bathrooms}
                  onChange={(e) =>
                    setBathrooms(e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900"
                >
                  <option value="Any">
                    Any
                  </option>

                  <option value="1">
                    1+
                  </option>

                  <option value="2">
                    2+
                  </option>

                  <option value="3">
                    3+
                  </option>
                </select>
              </div>

              {/* Reset */}
              <button
                type="button"
                onClick={resetFilters}
                className="mt-3 w-full rounded-xl border border-slate-300 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Reset Filters
              </button>
            </aside>

            {/* Property Grid */}
            <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2">
              {sortedProperties.length > 0 ? (
                sortedProperties.map(
                  (property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                    />
                  )
                )
              ) : (
                <div className="col-span-full flex min-h-[300px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      No properties found
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      We couldn't find any
                      properties matching your
                      filters.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Properties;