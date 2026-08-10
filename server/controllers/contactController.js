const Contact = require("../models/Contact");
console.log("Contact model:", Contact);
console.log("Contact.create:", Contact.create);

const createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "Please fill in all required fields.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({
      message: "Your message has been sent successfully.",
      contact,
    });
  } catch (error) {
    console.error("Create contact error:", error);

    res.status(500).json({
      message: "Failed to send your message.",
    });
  }
};

module.exports = {
  createContact,
};