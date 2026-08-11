const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  addFavorite,
  removeFavorite,
  getFavorites,
} = require("../controllers/favoriteController");

const router = express.Router();

// Get logged-in user's favorites
router.get("/", protect, getFavorites);

// Add property to favorites
router.post("/:propertyId", protect, addFavorite);

// Remove property from favorites
router.delete("/:propertyId", protect, removeFavorite);

module.exports = router;