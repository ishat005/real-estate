import Hero from "../components/properties/Hero";
import PropertyCard from "../components/properties/PropertyCard";

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Banana Island, Lagos",
      propertyType: "Villa",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,400 sqft",
      price: "CAD 100,000,000",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      title: "Contemporary Apartment",
      location: "Eko Atlantic, Lagos",
      propertyType: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sqft",
      price: "CAD 75,000,000",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      title: "Elegant Family House",
      location: "Parkview Estate, Lagos",
      propertyType: "House",
      bedrooms: 5,
      bathrooms: 4,
      area: "3,200 sqft",
      price: "CAD 150,000,000",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      title: "Modern City Condo",
      location: "Victoria Island, Lagos",
      propertyType: "Condo",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,500 sqft",
      price: "CAD 60,000,000",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    },
  ];

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
                {properties.length}
              </span>{" "}
              premium properties
            </p>
          </div>

          <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900 sm:w-52">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Bedrooms</option>
          </select>
        </div>

        {/* Main Layout */}
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
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
              />
            </div>

            {/* Property Type */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-800">
                Property Type
              </label>

              <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900">
                <option>All</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>House</option>
                <option>Condo</option>
              </select>
            </div>

            {/* Budget */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-800">
                Budget
              </label>

              <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900">
                <option>Any</option>
                <option>Under $100,000</option>
                <option>$100k - $300k</option>
                <option>$300k - $500k</option>
                <option>$500k+</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-800">
                Bedrooms
              </label>

              <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-slate-800">
                Bathrooms
              </label>

              <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-900">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
              </select>
            </div>

            <button className="w-full rounded-xl bg-slate-950 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Apply Filters
            </button>

            <button className="mt-3 w-full rounded-xl border border-slate-300 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Reset Filters
            </button>
          </aside>

          {/* Property Grid */}
          <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;