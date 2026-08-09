const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    propertyType: {
      type: String,
      required: true,
      enum: ["Apartment", "Villa", "House", "Condo"],
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    bedrooms: {
      type: Number,
      required: true,
      min: 0,
    },

    bathrooms: {
      type: Number,
      required: true,
      min: 0,
    },

    area: {
      type: Number,
      required: true,
      min: 0,
    },

    images: {
      type: [String],
      default: [],
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;