const express = require("express");

const { createContact } = require("../controllers/contactController");

const router = express.Router();

router.post("/", createContact);

module.exports = router;