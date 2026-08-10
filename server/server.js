const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "La Maison API is running",
  });
});

// Auth routes
app.use("/api/auth", require("./routes/authRoutes"));

// Property routes
app.use("/api/properties", require("./routes/propertyRoutes"));

// Testimonial routes
app.use("/api/testimonials", require("./routes/testimonialRoutes"));

// Contact routes
app.use("/api/contacts", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});