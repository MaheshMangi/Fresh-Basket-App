import React from 'react';
import './AboutUs.css'; // optional, if you want to style it

function AboutUs() {
  return (
    <div className="about-us-container" style={{ padding: '2rem' }}>
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Food Court App</strong> — your one-stop destination for fresh, delicious, and diverse food options! Whether you're craving farm-fresh veggies, tender non-veg items, sweet fruits, or daily dairy products, we've got you covered.
      </p>

      <h2>Who We Are</h2>
      <p>
        We're a passionate team of food lovers and tech enthusiasts committed to making your food shopping easy, fast, and reliable. Our goal is to bring convenience and quality right to your fingertips.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>✅ Wide selection of fresh vegetables and non-veg items</li>
        <li>✅ High-quality fruits and dairy products</li>
        <li>✅ Seamless online ordering experience</li>
        <li>✅ Quick delivery and real-time order tracking</li>
        <li>✅ Dark mode for a modern, user-friendly interface</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <p>
        At Food Court App, quality and customer satisfaction are our top priorities. We partner with trusted vendors and use secure payment gateways to ensure a smooth and safe shopping experience.
      </p>

      <h2>Stay Connected</h2>
      <p>
        Have questions or suggestions? Visit our <a href="/cantactUs">Contact Us</a> page — we’d love to hear from you!
      </p>

      <p style={{ marginTop: '2rem' }}>
        Thank you for choosing <strong>Food Court App</strong>. Let’s make mealtime better, together!
      </p>
    </div>
  );
}

export default AboutUs;
