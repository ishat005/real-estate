import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import backgroundImage from "../assets/images/backgroundImage.jfif";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ==============================
  // HANDLE INPUT CHANGES
  // ==============================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==============================
  // EMAIL / PASSWORD LOGIN
  // ==============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid email or password.");
      }

      await login(data, rememberMe);

      navigate("/");
    } catch (error) {
      setError(error.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // GOOGLE LOGIN
  // ==============================
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      setError("");
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/google`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            credential: credentialResponse.credential,
            isSignup: false,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Google login failed.");
      }

      await login(data, rememberMe);

      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);

      setError(error.message || "Google login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ==============================
          BACKGROUND
      ============================== */}
      <img
        src={backgroundImage}
        alt="Luxury Villa"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ==============================
          LOGIN CONTENT
      ============================== */}
      <div className="relative flex min-h-screen items-center justify-center px-4 py-8">
        <div className="w-full max-w-[420px] rounded-3xl border border-white/20 bg-white/75 p-7 shadow-2xl backdrop-blur-xl">

          {/* Logo / Brand */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              La Maison
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Welcome back! Sign in to continue exploring premium homes.
            </p>
          </div>

          {/* ==============================
              ERROR MESSAGE
          ============================== */}
          {error && (
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* ==============================
              GOOGLE LOGIN
          ============================== */}
          <div className="mt-6 flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => {
                setError("Google login failed. Please try again.");
              }}
            />
          </div>

          {/* ==============================
              DIVIDER
          ============================== */}
          <div className="my-6 flex items-center">
            <div className="h-px flex-1 bg-slate-300" />

            <span className="mx-4 text-xs font-medium uppercase tracking-wider text-slate-500">
              Or
            </span>

            <div className="h-px flex-1 bg-slate-300" />
          </div>

          {/* ==============================
              LOGIN FORM
          ============================== */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Email
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white/90 pl-11 pr-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white/90 pl-11 pr-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            </div>

            {/* Remember Me / Forgot Password */}
            <div className="flex items-center justify-between gap-4 text-sm">

              <label className="flex cursor-pointer items-center gap-2 text-slate-700">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded accent-slate-900"
                />

                <span>Remember me</span>
              </label>

              <Link
                to="/forgot-password"
                className="font-medium text-slate-900 transition hover:text-slate-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="h-11 w-full rounded-xl bg-slate-900 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-slate-800 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>

          {/* ==============================
              SIGN UP
          ============================== */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-slate-900 transition hover:text-slate-600 hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;