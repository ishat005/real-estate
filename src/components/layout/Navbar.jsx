import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-[#dfeaf5] shadow-sm">
      <div className="mx-auto grid w-full max-w-8xl grid-cols-1 items-center gap-3 px-6 py-4 md:grid-cols-[1fr_auto_1fr]">

        {/* Logo */}
        <div className="flex items-center justify-start gap-3">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Real Estate Logo"
              className="h-8 w-8 object-contain sm:h-10 sm:w-10"
            />

            <span className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              La Maison
            </span>
          </NavLink>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-2 py-3 sm:gap-3 md:gap-7 md:py-0">
          <NavLink
            to="/"
            className="text-[14px] font-medium text-slate-700 hover:text-slate-950 sm:text-sm"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-[14px] font-medium text-slate-700 hover:text-slate-950 sm:text-sm"
          >
            About Us
          </NavLink>

          <NavLink
            to="/properties"
            className="text-[14px] font-medium text-slate-700 hover:text-slate-950 sm:text-sm"
          >
            Properties
          </NavLink>

          <NavLink
            to="/contact"
            className="text-[14px] font-medium text-slate-700 hover:text-slate-950 sm:text-sm"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Authentication */}
        <div className="mt-2 flex items-center justify-end gap-3 md:mt-0">

          {isAuthenticated ? (
            <>
              {/* Profile */}
              <NavLink
                to="/profile"
                className="font-semibold text-slate-900 hover:text-slate-700"
              >
                {user?.name}
              </NavLink>

              {/* Logout */}
              <button
                onClick={logout}
                className="rounded-md bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800 sm:px-4 sm:py-2 sm:text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <NavLink
                to="/login"
                className="rounded-md border border-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-900 transition hover:bg-slate-100 sm:px-4 sm:py-2 sm:text-sm"
              >
                Login
              </NavLink>

              {/* Sign Up */}
              <NavLink
                to="/signup"
                className="rounded-md bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800 sm:px-4 sm:py-2 sm:text-sm"
              >
                Sign Up
              </NavLink>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;