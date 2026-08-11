const API_URL = "http://localhost:5000/api/favorites";

// ==========================================
// GET USER FAVORITES
// ==========================================
export const getFavorites = async (token) => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch favorites."
    );
  }

  return data.favorites;
};

// ==========================================
// ADD PROPERTY TO FAVORITES
// ==========================================
export const addFavorite = async (propertyId, token) => {
  const response = await fetch(
    `${API_URL}/${propertyId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to add favorite."
    );
  }

  return data;
};

// ==========================================
// REMOVE PROPERTY FROM FAVORITES
// ==========================================
export const removeFavorite = async (propertyId, token) => {
  const response = await fetch(
    `${API_URL}/${propertyId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to remove favorite."
    );
  }

  return data;
};