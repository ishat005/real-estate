const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Testimonial = require("../models/Testimonial");
const testimonialData = require("../data/testimonialData");

dotenv.config();

const seedTestimonials = async () => {
  try {
    await connectDB();

    await Testimonial.deleteMany();

    await Testimonial.insertMany(testimonialData);

    console.log("Testimonials seeded successfully.");

    process.exit();
  } catch (error) {
    console.error("Error seeding testimonials:", error);
    process.exit(1);
  }
};

seedTestimonials();