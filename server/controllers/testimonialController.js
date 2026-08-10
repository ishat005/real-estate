const Testimonial = require("../models/Testimonial");

const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      testimonials,
    });
  } catch (error) {
    console.error("Get testimonials error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch testimonials.",
    });
  }
};

module.exports = {
  getTestimonials,
};