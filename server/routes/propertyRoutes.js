const express = require("express");
const { getProperties,   getPropertyById } = require("../controllers/propertyController");

const router = express.Router();

router.get("/", getProperties);
router.get("/:id", getPropertyById);

module.exports = router;