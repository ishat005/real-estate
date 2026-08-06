import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.webp";

const Navbar = () => {
  return (
    <nav className="bg-[#dfeaf5] shadow-sm">
      <div className="mx-auto grid w-full max-w-8xl grid-cols-1 gap-5 px-6 py-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Real Estate Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              La Maison
            </span>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-2 md:gap-8 md:py-0">
          <NavLink
            to="/"
            className="text-base font-medium text-slate-700 transition hover:text-slate-950"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-base font-medium text-slate-700 transition hover:text-slate-950"
          >
            About Us
          </NavLink>

          <NavLink
            to="/properties"
            className="text-base font-medium text-slate-700 transition hover:text-slate-950"
          >
            Properties
          </NavLink>

          <NavLink
            to="/contact"
            className="text-base font-medium text-slate-700 transition hover:text-slate-950"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center justify-center gap-3 md:justify-end">
          <NavLink
            to="/login"
            className="rounded-lg border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="whitespace-nowrap rounded-lg bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;