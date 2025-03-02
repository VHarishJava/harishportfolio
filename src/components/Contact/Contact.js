import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp message function
  const sendWhatsAppMessage = () => {
    const phoneNumber = "+916305504594"; // Your WhatsApp number
    const message = `Hello, my name is ${formData.name}. My email is ${formData.email}. Message: ${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank"); // Opens WhatsApp chat in a new tab
  };

  return (
    <section className="contact">
      <div className="container">
        {/* Left - Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Contact Me</h2>
          <p>Let's work together!</p>
          <div className="contact-item"><FaPhone /> +91 6305504594</div>
          <div className="contact-item"><FaEnvelope /> harishshankarvilasagaram@gmail.com</div>
          <div className="contact-item"><FaMapMarkerAlt /> Hyderabad, India</div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.form
          className="contact-form"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

          {/* WhatsApp Button */}
          <button type="button" onClick={sendWhatsAppMessage} className="whatsapp-button">
            <FaWhatsapp /> Contact via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
