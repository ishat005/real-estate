import { NavLink } from "react-router-dom";
import { FaUser, FaArrowRightFromBracket } from "react-icons/fa6";
import logo from "../../assets/images/logo.webp";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-full max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 p-1.5 shadow-sm transition duration-300 group-hover:scale-105">
            <img
              src={logo}
              alt="La Maison"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="hidden sm:block">
            <div className="text-lg font-bold tracking-tight text-slate-950">
              La Maison
            </div>

            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Real Estate
            </div>
          </div>
        </NavLink>

        {/* Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-slate-100 text-slate-950"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-2 sm:gap-3">
          {isAuthenticated ? (
            <>
              {/* Profile */}
              <NavLink
                to="/profile"
                className="group flex items-center gap-2 rounded-xl px-2 py-2 transition hover:bg-slate-100 sm:px-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-hover:bg-slate-200">
                  <FaUser className="text-sm" />
                </div>

                <div className="hidden max-w-[120px] sm:block">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {user?.name || "Profile"}
                  </p>

                  <p className="text-[11px] text-slate-400">
                    My Account
                  </p>
                </div>
              </NavLink>

              {/* Logout */}
              <button
                onClick={logout}
                className="group flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-900 hover:bg-slate-950 hover:text-white sm:px-4"
              >
                <FaArrowRightFromBracket className="text-xs transition group-hover:translate-x-0.5" />

                <span className="hidden sm:inline">
                  Logout
                </span>
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <NavLink
                to="/login"
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 sm:px-4"
              >
                Login
              </NavLink>

              {/* Sign Up */}
              <NavLink
                to="/signup"
                className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md sm:px-5"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="border-t border-slate-100 md:hidden">
        <div className="mx-auto flex max-w-8xl items-center justify-center gap-1 overflow-x-auto px-3 py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition ${
                  isActive
                    ? "bg-slate-950 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;