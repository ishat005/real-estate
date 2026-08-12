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
  FaArrowRight,
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

      setFavorites((prevFavorites) =>
        prevFavorites.filter(
          (property) => property._id !== propertyId
        )
      );
    } catch (error) {
      console.error("Remove favorite error:", error);

      setFavoriteError(
        error.message ||
          "Failed to remove property from favourites."
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

  // ==========================================
  // INITIALS
  // ==========================================
  const initials = user.name
    ? user.name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* ==========================================
            PAGE INTRO
        ========================================== */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Account
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Manage your account information and keep track of
            properties you love.
          </p>
        </div>

        {/* ==========================================
            PROFILE CARD
        ========================================== */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          {/* Profile Header */}
          <div className="relative overflow-hidden bg-[#dfeaf5] px-6 py-8 sm:px-8 sm:py-10">

            {/* Decorative circle */}
            <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-white/30" />

            <div className="relative flex flex-col items-center gap-5 sm:flex-row">

              {/* Avatar */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-slate-950 text-2xl font-bold text-white shadow-lg ring-4 ring-white/60">
                {initials}
              </div>

              {/* User Info */}
              <div className="text-center sm:text-left">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Welcome back
                </p>

                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  {user.name}
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                  {user.email}
                </p>

                <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold capitalize text-slate-700 shadow-sm">
                  {user.role || "User"}
                </span>
              </div>
            </div>
          </div>

          {/* ==========================================
              PROFILE CONTENT
          ========================================== */}
          <div className="p-6 sm:p-8">

            {/* Personal Information */}
            <div>
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Account Details
                </p>

                <h3 className="mt-1 text-xl font-bold text-slate-950">
                  Personal Information
                </h3>
              </div>

              <div className="grid gap-4 md:grid-cols-3">

                {/* Name */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                    <FaUser className="text-slate-600" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Full Name
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {user.name}
                  </p>
                </div>

                {/* Email */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                    <FaEnvelope className="text-slate-600" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Email Address
                  </p>

                  <p className="mt-1 break-all font-semibold text-slate-900">
                    {user.email}
                  </p>
                </div>

                {/* Role */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                    <FaShieldAlt className="text-slate-600" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Account Type
                  </p>

                  <p className="mt-1 font-semibold capitalize text-slate-900">
                    {user.role || "User"}
                  </p>
                </div>

              </div>
            </div>

            {/* ==========================================
                FAVOURITES
            ========================================== */}
            <div className="mt-12 border-t border-slate-200 pt-10">

              {/* Section Header */}
              <div className="mb-6 flex items-start justify-between gap-4">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Saved Properties
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-950">
                    My Favourites
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Properties you have saved for later.
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50">
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
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
                  <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />

                  <p className="text-sm text-slate-500">
                    Loading your favourites...
                  </p>
                </div>
              ) : favorites.length === 0 ? (

                /* Empty State */
                <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                    <FaHeart className="text-xl text-slate-300" />
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-slate-900">
                    No favourites yet
                  </h4>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                    Save properties you love and they will appear
                    here so you can easily find them again.
                  </p>

                  <Link
                    to="/properties"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Browse Properties
                    <FaArrowRight className="text-xs" />
                  </Link>

                </div>

              ) : (

                /* Favourite Properties */
                <div className="grid gap-6 md:grid-cols-2">

                  {favorites.map((property) => {
                    const propertyId = property._id;

                    const image =
                      property.images?.[0] ||
                      "https://via.placeholder.com/800x600?text=Property";

                    return (
                      <article
                        key={propertyId}
                        className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >

                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden">

                          <img
                            src={image}
                            alt={property.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />

                          {/* Image Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />

                          {/* Property Type */}
                          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                            {property.propertyType}
                          </span>

                          {/* Remove Favourite */}
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveFavorite(propertyId)
                            }
                            disabled={
                              removingId === propertyId
                            }
                            aria-label="Remove from favourites"
                            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <FaHeart
                              size={15}
                              className="text-red-500"
                            />
                          </button>

                        </div>

                        {/* Content */}
                        <div className="p-5">

                          {/* Title */}
                          <h4 className="line-clamp-2 text-xl font-bold text-slate-900">
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
                          <div className="my-5 grid grid-cols-3 gap-3 border-y border-slate-100 py-4">

                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <FaBed className="text-slate-400" />
                              <span>
                                {property.bedrooms} Bed
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <FaBath className="text-slate-400" />
                              <span>
                                {property.bathrooms} Bath
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <FaRulerCombined className="text-slate-400" />
                              <span>
                                {property.area} sqft
                              </span>
                            </div>

                          </div>

                          {/* Price + View */}
                          <div className="flex items-end justify-between gap-4">

                            <div>
                              <p className="text-xs text-slate-400">
                                Starting from
                              </p>

                              <p className="mt-1 text-xl font-bold text-slate-950">
                                CAD{" "}
                                {property.price?.toLocaleString()}
                              </p>
                            </div>

                            <Link
                              to={`/properties/${propertyId}`}
                              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                            >
                              View
                              <FaArrowRight className="text-xs" />
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
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Browse Properties
                <FaArrowRight className="text-xs" />
              </Link>

            </div>

          </div>
        </section>

        {/* Bottom spacing */}
        <div className="h-6" />

      </div>
    </div>
  );
};

export default Profile;