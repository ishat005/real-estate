const Property = require("../models/Property");

// ==============================
// ADD PROPERTY TO FAVORITES
// ==============================
const addFavorite = async (req, res) => {
  try {
    const { propertyId } = req.params;

    // Check that property exists
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({
        message: "Property not found.",
      });
    }

    // Check if already favorited
    const alreadyFavorite = req.user.favorites?.some(
      (id) => id.toString() === propertyId
    );

    if (alreadyFavorite) {
      return res.status(400).json({
        message: "Property is already in your favorites.",
      });
    }

    // Add property to favorites
    req.user.favorites.push(propertyId);

    await req.user.save();

    res.status(200).json({
      message: "Property added to favorites.",
      favorites: req.user.favorites,
    });
  } catch (error) {
    console.error("Add favorite error:", error);

    res.status(500).json({
      message: "Failed to add property to favorites.",
    });
  }
};

// ==============================
// REMOVE PROPERTY FROM FAVORITES
// ==============================
const removeFavorite = async (req, res) => {
  try {
    const { propertyId } = req.params;

    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({
        message: "Property not found.",
      });
    }

    // Remove property from favorites
    req.user.favorites = (req.user.favorites || []).filter(
      (id) => id.toString() !== propertyId
    );

    await req.user.save();

    res.status(200).json({
      message: "Property removed from favorites.",
      favorites: req.user.favorites,
    });
  } catch (error) {
    console.error("Remove favorite error:", error);

    res.status(500).json({
      message: "Failed to remove property from favorites.",
    });
  }
};

// ==============================
// GET USER FAVORITES
// ==============================
const getFavorites = async (req, res) => {
  try {
    const user = await req.user.populate("favorites");

    res.status(200).json({
      favorites: user.favorites,
    });
  } catch (error) {
    console.error("Get favorites error:", error);

    res.status(500).json({
      message: "Failed to fetch favorites.",
    });
  }
};

module.exports = {
  addFavorite,
  removeFavorite,
  getFavorites,
};