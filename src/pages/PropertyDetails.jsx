import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `http://localhost:5000/api/properties/${id}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch property."
          );
        }

        setProperty(data.property);
      } catch (error) {
        console.error("Fetch property error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-slate-500">
          Loading property...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p className="text-red-500">{error}</p>

        <Link
          to="/properties"
          className="mt-4 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
        >
          Back to Properties
        </Link>
      </div>
    );
  }

  if (!property) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/properties"
        className="mb-6 inline-block text-sm font-semibold text-slate-700 hover:underline"
      >
        ← Back to Properties
      </Link>

      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <img
          src={property.images?.[0]}
          alt={property.title}
          className="h-[400px] w-full object-cover"
        />

        <div className="p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-950">
                {property.title}
              </h1>

              <p className="mt-2 text-slate-500">
                {property.location}
              </p>
            </div>

            <div className="text-2xl font-bold text-slate-950">
              CAD {property.price.toLocaleString()}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Type
              </p>
              <p className="mt-1 font-semibold">
                {property.propertyType}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Bedrooms
              </p>
              <p className="mt-1 font-semibold">
                {property.bedrooms}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Bathrooms
              </p>
              <p className="mt-1 font-semibold">
                {property.bathrooms}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">
                Area
              </p>
              <p className="mt-1 font-semibold">
                {property.area.toLocaleString()} sqft
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-slate-950">
              About this property
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {property.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;