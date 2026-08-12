const API_URL = import.meta.env.VITE_API_URL;

// ==========================================
// HELPER: PARSE RESPONSE SAFELY
// ==========================================
const parseResponse = async (response) => {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return await response.json();
  }

  const text = await response.text();

  return {
    message: text || "Unexpected server response.",
  };
};

// ==========================================
// GET USER FAVORITES
// GET /api/favorites
// ==========================================
export const getFavorites = async (token) => {
  try {
    const response = await fetch(`${API_URL}/api/favorites`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await parseResponse(response);

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to fetch favorites."
      );
    }

    return data.favorites || [];
  } catch (error) {
    console.error("Get favorites error:", error);
    throw error;
  }
};

// ==========================================
// ADD PROPERTY TO FAVORITES
// POST /api/favorites/:propertyId
// ==========================================
export const addFavorite = async (propertyId, token) => {
  try {
    const response = await fetch(
      `${API_URL}/api/favorites/${propertyId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await parseResponse(response);

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to add favorite."
      );
    }

    return data;
  } catch (error) {
    console.error("Add favorite error:", error);
    throw error;
  }
};

// ==========================================
// REMOVE PROPERTY FROM FAVORITES
// DELETE /api/favorites/:propertyId
// ==========================================
export const removeFavorite = async (propertyId, token) => {
  try {
    const response = await fetch(
      `${API_URL}/api/favorites/${propertyId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await parseResponse(response);

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to remove favorite."
      );
    }

    return data;
  } catch (error) {
    console.error("Remove favorite error:", error);
    throw error;
  }
};