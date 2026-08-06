import backgroundImage from "../assets/images/backgroundImage.jfif";
import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

const Signup = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={backgroundImage}
        alt="Luxury Villa"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Card */}
      <div className="relative flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-[420px] rounded-3xl border border-white/20 bg-white/70 p-7 shadow-2xl backdrop-blur-xl">

          {/* Heading */}
          <h1 className="text-center text-4xl font-bold text-slate-900">
            La Maison
          </h1>

          <p className="mt-2 mb-6 text-center text-gray-600">
            Join La Maison today.
          </p>

          {/* Google */}
          <button className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white font-medium transition-all duration-300 hover:bg-gray-100 hover:shadow-md">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500">OR</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          {/* Form */}
          <form className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Full Name
              </label>

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="h-11 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="password"
                  placeholder="Create a password"
                  className="h-11 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Confirm Password
              </label>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="h-11 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="h-4 w-4 rounded accent-slate-900"
              />

              <span>
                I agree to the{" "}
                <button
                  type="button"
                  className="font-semibold text-slate-900 hover:underline"
                >
                  Terms
                </button>{" "}
                &
                <button
                  type="button"
                  className="ml-1 font-semibold text-slate-900 hover:underline"
                >
                  Privacy Policy
                </button>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="h-11 w-full rounded-xl bg-slate-900 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-slate-900 hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;