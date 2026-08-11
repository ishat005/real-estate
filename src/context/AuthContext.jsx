import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getFavorites } from "../services/favoriteService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==============================
  // INITIALIZE AUTHENTICATION
  // ==============================
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken =
          localStorage.getItem("token") ||
          sessionStorage.getItem("token");

        const storedUser =
          localStorage.getItem("user") ||
          sessionStorage.getItem("user");

        // No stored login
        if (!storedToken || !storedUser) {
          setLoading(false);
          return;
        }

        const parsedUser = JSON.parse(storedUser);

        setToken(storedToken);
        setUser(parsedUser);

        // ==============================
        // LOAD USER FAVORITES
        // ==============================
        try {
          const userFavorites =
            await getFavorites(storedToken);

          setFavorites(userFavorites || []);
        } catch (error) {
          console.error(
            "Failed to load favorites:",
            error
          );

          setFavorites([]);
        }
      } catch (error) {
        console.error(
          "Failed to initialize authentication:",
          error
        );

        // Clear invalid stored authentication
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");

        setUser(null);
        setToken(null);
        setFavorites([]);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // ==============================
  // LOGIN
  // ==============================
  const login = async (data, rememberMe = false) => {
    const storage = rememberMe
      ? localStorage
      : sessionStorage;

    storage.setItem("token", data.token);
    storage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    setToken(data.token);
    setUser(data.user);

    // Load favorites immediately after login
    try {
      const userFavorites = await getFavorites(
        data.token
      );

      setFavorites(userFavorites || []);
    } catch (error) {
      console.error(
        "Failed to load favorites after login:",
        error
      );

      setFavorites([]);
    }
  };

  // ==============================
  // LOGOUT
  // ==============================
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    setUser(null);
    setToken(null);
    setFavorites([]);
  };

  // ==============================
  // AUTH STATUS
  // ==============================
  const isAuthenticated =
    !!token && !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        favorites,
        setFavorites,
        isAuthenticated,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ==============================
// USE AUTH HOOK
// ==============================
export const useAuth = () => {
  return useContext(AuthContext);
};