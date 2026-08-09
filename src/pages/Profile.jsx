import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaShieldAlt, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

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
      <div className="mx-auto max-w-3xl">

        {/* Header */}
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

        {/* Profile Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          {/* Profile Header */}
          <div className="bg-[#dfeaf5] px-6 py-8 sm:px-8">
            <div className="flex flex-col items-center gap-4 sm:flex-row">

              {/* Avatar */}
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-950 text-2xl font-bold text-white shadow-md">
                {initials}
              </div>

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

          {/* Personal Information */}
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

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

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