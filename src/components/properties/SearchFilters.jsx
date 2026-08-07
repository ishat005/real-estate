import {
  FaMapMarkerAlt,
  FaHome,
  FaDollarSign,
  FaSearch,
} from "react-icons/fa";

const SearchFilters = () => {
  return (
    <section className="-mt-16 relative z-20 px-6">
      <div className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Find Your Perfect Property
          </h2>
          <p className="mt-1 text-slate-500">
            Search from our collection of premium properties.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Location */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <FaMapMarkerAlt className="text-slate-500" />
              Location
            </label>

            <input
              type="text"
              placeholder="Enter city"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          {/* Property Type */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <FaHome className="text-slate-500" />
              Property Type
            </label>

            <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>House</option>
              <option>Condo</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <FaDollarSign className="text-slate-500" />
              Budget
            </label>

            <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200">
              <option>Select Budget</option>
              <option>Under $100,000</option>
              <option>$100,000 - $300,000</option>
              <option>$300,000 - $500,000</option>
              <option>$500,000+</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
              <FaSearch />
              Search Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;