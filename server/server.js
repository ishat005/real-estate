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
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://lamaisonreal-estate.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error(`CORS policy: Origin ${origin} is not allowed`)
      );
    },
    credentials: true,
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