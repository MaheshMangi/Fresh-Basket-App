import React from "react";
import "./AboutUs.css";
import { FaUtensils, FaUsers, FaListUl, FaBullseye, FaStar, FaQuestionCircle, FaPhoneAlt } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="card">
        <h1>
          <FaUtensils style={{ marginRight: "0.5rem", color: "#007bff" }} />
          About Us
        </h1>
        <p>
          Welcome to <strong>Food Court App</strong> — your one-stop destination for fresh, delicious, and diverse food options!
        </p>
      </div>

      <div className="card">
        <h2>
          <FaUsers style={{ marginRight: "0.5rem", color: "#007bff" }} />
          Who We Are
        </h2>
        <p>
          We're a passionate team of food lovers and tech enthusiasts committed to making your food shopping easy, fast, and reliable.
        </p>
      </div>

      <div className="card">
        <h2>
          <FaListUl style={{ marginRight: "0.5rem", color: "#007bff" }} />
          What We Offer
        </h2>
        <ul>
          <li>Fresh vegetables and non-veg items</li>
          <li>High-quality fruits and dairy products</li>
          <li>Seamless online ordering</li>
          <li>Quick delivery and tracking</li>
          <li>Dark mode interface</li>
        </ul>
      </div>

      <div className="card">
        <h2>
          <FaBullseye style={{ marginRight: "0.5rem", color: "#007bff" }} />
          Our Mission
        </h2>
        <p>
          Our mission is to deliver fresh, high-quality food products to your doorstep while supporting local farmers and vendors.
        </p>
      </div>

      <div className="card">
        <h2>
          <FaStar style={{ marginRight: "0.5rem", color: "#007bff" }} />
          Customer Testimonials
        </h2>
        <p>
          "Food Court App has completely changed the way I shop for groceries. The delivery is fast, and the quality is always excellent!"
        </p>
        <p>— Sarah, Happy Customer</p>
        <p>
          "I love the variety of options available. The dark mode is a nice touch!"  
        </p>
        <p>— Mark, Regular User</p>
      </div>

      <div className="card">
        <h2>
          <FaUsers style={{ marginRight: "0.5rem", color: "#007bff" }} />
          Meet the Team
        </h2>
        <p>
          Our team is composed of food enthusiasts, tech experts, and customer support specialists dedicated to making your shopping experience smooth and enjoyable.
        </p>
      </div>

      <div className="card">
        <h2>
          <FaQuestionCircle style={{ marginRight: "0.5rem", color: "#007bff" }} />
          FAQs
        </h2>
        <p>
          <strong>Q:</strong> How can I track my order?  
          <br />
          <strong>A:</strong> You can track your order through the "My Orders" section in your profile.
        </p>
        <p>
          <strong>Q:</strong> Can I cancel my order?  
          <br />
          <strong>A:</strong> Yes, you can cancel your order within 30 minutes of placing it.
        </p>
      </div>

      <div className="card">
        <h2>
          <FaPhoneAlt style={{ marginRight: "0.5rem", color: "#007bff" }} />
          Stay Connected
        </h2>
        <p>
          Have questions or suggestions? Visit our <a href="/contactUs">Contact Us</a> page — we’d love to hear from you!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
