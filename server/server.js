const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// ==============================
// DATABASE
// ==============================
connectDB();

// ==============================
// MIDDLEWARE
// ==============================
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.json());

// ==============================
// TEST ROUTE
// ==============================
app.get("/", (req, res) => {
  res.json({
    message: "La Maison API is running",
  });
});

// ==============================
// ROUTES
// ==============================

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/properties", require("./routes/propertyRoutes"));

app.use(
  "/api/testimonials",
  require("./routes/testimonialRoutes")
);

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use("/api/favorites", require("./routes/favoriteRoutes"));

// ==============================
// EXPORT APP
// ==============================

module.exports = app;