import {
  FaHeart,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <article className="min-w-0 overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        {/* Featured */}
        {property.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
            Featured
          </span>
        )}

        {/* Favourite */}
        <button
          type="button"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition hover:bg-slate-950 hover:text-white"
          aria-label="Add to favourites"
        >
          <FaHeart size={15} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Property Type */}
        <span className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {property.propertyType}
        </span>

        {/* Title */}
        <h3 className="mt-3 line-clamp-2 min-h-[56px] text-xl font-bold leading-7 text-slate-900">
          {property.title}
        </h3>

        {/* Location */}
        <div className="mt-3 flex items-start gap-2 text-sm text-slate-500">
          <FaMapMarkerAlt className="mt-1 shrink-0 text-slate-400" />

          <span className="line-clamp-2">
            {property.location}
          </span>
        </div>

        {/* Property Details */}
        <div className="my-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-4">
          <div className="flex min-w-0 items-center gap-2 text-sm text-slate-600">
            <FaBed className="shrink-0 text-slate-400" />

            <span className="truncate">
              {property.bedrooms} Beds
            </span>
          </div>

          <div className="flex min-w-0 items-center gap-2 text-sm text-slate-600">
            <FaBath className="shrink-0 text-slate-400" />

            <span className="truncate">
              {property.bathrooms} Baths
            </span>
          </div>

          <div className="flex min-w-0 items-center gap-2 text-sm text-slate-600">
            <FaRulerCombined className="shrink-0 text-slate-400" />

            <span className="truncate">
              {property.area}
            </span>
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs text-slate-500">
              Starting from
            </p>

            <p className="mt-1 break-words text-xl font-bold text-slate-950">
              {property.price}
            </p>
          </div>

          <button
            type="button"
            className="shrink-0 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;