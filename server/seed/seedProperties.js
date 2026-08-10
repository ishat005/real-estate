const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Property = require("../models/Property");
const properties = require("../data/propertyData");

dotenv.config();

const seedProperties = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Property.deleteMany();

    await Property.insertMany(properties);

    console.log(`${properties.length} properties inserted successfully`);

    await mongoose.connection.close();

    console.log("MongoDB connection closed");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedProperties();