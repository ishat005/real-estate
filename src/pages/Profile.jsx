import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaShieldAlt,
  FaSignOutAlt,
  FaHeart,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
} from "react-icons/fa";

import { useAuth } from "../context/AuthContext";
import {
  getFavorites,
  removeFavorite,
} from "../services/favoriteService";

const Profile = () => {
  const { user, token, logout } = useAuth();

  const [favorites, setFavorites] = useState([]);
  const [loadingFavorites, setLoadingFavorites] = useState(true);
  const [removingId, setRemovingId] = useState(null);
  const [favoriteError, setFavoriteError] = useState("");

  // ==========================================
  // FETCH FAVORITES
  // ==========================================
  useEffect(() => {
    const fetchUserFavorites = async () => {
      if (!token) {
        setLoadingFavorites(false);
        return;
      }

      try {
        setFavoriteError("");

        const data = await getFavorites(token);

        setFavorites(data || []);
      } catch (error) {
        console.error("Fetch favorites error:", error);

        setFavoriteError(
          error.message || "Failed to load your favourites."
        );
      } finally {
        setLoadingFavorites(false);
      }
    };

    fetchUserFavorites();
  }, [token]);

  // ==========================================
  // REMOVE FAVORITE
  // ==========================================
  const handleRemoveFavorite = async (propertyId) => {
    if (!token || !propertyId) {
      return;
    }

    if (removingId) {
      return;
    }

    try {
      setRemovingId(propertyId);
      setFavoriteError("");

      await removeFavorite(propertyId, token);

      // Remove immediately from the screen
      setFavorites((prevFavorites) =>
        prevFavorites.filter(
          (property) => property._id !== propertyId
        )
      );
    } catch (error) {
      console.error("Remove favorite error:", error);

      setFavoriteError(
        error.message || "Failed to remove property from favourites."
      );
    } finally {
      setRemovingId(null);
    }
  };

  // ==========================================
  // USER CHECK
  // ==========================================
  if (!user) {
    return null;
  }

  // Generate initials
  const initials = user.name
    ? user.name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* ==========================================
            HEADER
        ========================================== */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Account
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your account information and preferences.
          </p>
        </div>

        {/* ==========================================
            PROFILE CARD
        ========================================== */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          {/* Profile Header */}
          <div className="bg-[#dfeaf5] px-6 py-8 sm:px-8">
            <div className="flex flex-col items-center gap-4 sm:flex-row">

              {/* Avatar */}
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-950 text-2xl font-bold text-white shadow-md">
                {initials}
              </div>

              {/* User Info */}
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-slate-950">
                  {user.name}
                </h2>

                <p className="mt-1 text-slate-600">
                  {user.email}
                </p>

                <span className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold capitalize text-slate-700">
                  {user.role || "User"}
                </span>
              </div>
            </div>
          </div>

          {/* ==========================================
              PERSONAL INFORMATION
          ========================================== */}
          <div className="p-6 sm:p-8">

            <h3 className="mb-5 text-xl font-bold text-slate-950">
              Personal Information
            </h3>

            <div className="space-y-4">

              {/* Name */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                  <FaUser className="text-slate-600" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Full Name
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {user.name}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                  <FaEnvelope className="text-slate-600" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Email Address
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Role */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                  <FaShieldAlt className="text-slate-600" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Account Type
                  </p>

                  <p className="mt-1 font-semibold capitalize text-slate-900">
                    {user.role || "User"}
                  </p>
                </div>
              </div>

            </div>

            {/* ==========================================
                MY FAVOURITES
            ========================================== */}
            <div className="mt-12 border-t border-slate-200 pt-10">

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">
                    My Favourites
                  </h3>

                  <p className="mt-1 text-slate-500">
                    Properties you have saved.
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                  <FaHeart className="text-red-500" />
                </div>
              </div>

              {/* Error */}
              {favoriteError && (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {favoriteError}
                </div>
              )}

              {/* Loading */}
              {loadingFavorites ? (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
                  <p className="text-slate-500">
                    Loading your favourites...
                  </p>
                </div>
              ) : favorites.length === 0 ? (
                /* Empty state */
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                    <FaHeart className="text-xl text-slate-300" />
                  </div>

                  <h4 className="mt-4 text-lg font-bold text-slate-900">
                    No favourites yet
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Save properties you love and they will appear here.
                  </p>

                  <Link
                    to="/properties"
                    className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Browse Properties
                  </Link>
                </div>
              ) : (
                /* Favourite properties */
                <div className="grid gap-6 md:grid-cols-2">

                  {favorites.map((property) => {
                    const propertyId = property._id;

                    // Your Property model uses images[]
                    const image =
                      property.images?.[0] ||
                      "https://via.placeholder.com/800x600?text=Property";

                    return (
                      <article
                        key={propertyId}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      >

                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={image}
                            alt={property.title}
                            className="h-full w-full object-cover"
                          />

                          {/* Remove favourite */}
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveFavorite(propertyId)
                            }
                            disabled={removingId === propertyId}
                            aria-label="Remove from favourites"
                            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <FaHeart
                              size={16}
                              className="text-red-500"
                            />
                          </button>
                        </div>

                        {/* Content */}
                        <div className="p-5">

                          {/* Property Type */}
                          <span className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {property.propertyType}
                          </span>

                          {/* Title */}
                          <h4 className="mt-3 line-clamp-2 text-xl font-bold text-slate-900">
                            {property.title}
                          </h4>

                          {/* Location */}
                          <div className="mt-3 flex items-start gap-2 text-sm text-slate-500">
                            <FaMapMarkerAlt className="mt-1 shrink-0 text-slate-400" />

                            <span>
                              {property.location}
                            </span>
                          </div>

                          {/* Details */}
                          <div className="my-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-4">

                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <FaBed className="text-slate-400" />
                              <span>
                                {property.bedrooms}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <FaBath className="text-slate-400" />
                              <span>
                                {property.bathrooms}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <FaRulerCombined className="text-slate-400" />
                              <span>
                                {property.area}
                              </span>
                            </div>

                          </div>

                          {/* Price + View */}
                          <div className="flex items-end justify-between gap-3">

                            <div>
                              <p className="text-xs text-slate-500">
                                Starting from
                              </p>

                              <p className="mt-1 text-xl font-bold text-slate-950">
                                CAD{" "}
                                {property.price?.toLocaleString()}
                              </p>
                            </div>

                            <Link
                              to={`/properties/${propertyId}`}
                              className="shrink-0 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                            >
                              View
                            </Link>

                          </div>

                        </div>
                      </article>
                    );
                  })}

                </div>
              )}
            </div>

            {/* ==========================================
                ACTIONS
            ========================================== */}
            <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row">

              <button
                onClick={logout}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <FaSignOutAlt />
                Logout
              </button>

              <Link
                to="/properties"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Browse Properties
              </Link>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;