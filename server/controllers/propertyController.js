const Property = require("../models/Property");

const getProperties = async (req, res) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 });

    res.status(200).json({
      count: properties.length,
      properties,
    });
  } catch (error) {
    console.error("Get properties error:", error);

    res.status(500).json({
      message: "Failed to fetch properties",
    });
  }
};

const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if(!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.status(200).json(
      {property}
    );
  } catch (error) {
    console.error("Get property by ID error:", error);

    res.status(500).json({
      message: "Failed to fetch property",
    });
  }
};

module.exports = {
  getProperties,
  getPropertyById,
};