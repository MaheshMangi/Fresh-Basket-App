import React from 'react';
import './ContactUs.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="title-green">Get in Touch</h2>
        <p><FaEnvelope className="icon-red" /> <strong>Email:</strong> maheshmangi07@gmail.com</p>
        <p><FaPhone className="icon-green" /> <strong>Phone:</strong> 9347567136</p>
        <p><FaMapMarkerAlt className="icon-red" /> <strong>Address:</strong> Danthalapalli, Warangal</p>
        
        <h3 className="follow-title">Follow Us</h3>
        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
        </div>
      </div>

      <div className="contact-right">
        <h2>Send Us a Message</h2>
        <form>
          <lable>Name:</lable>
          <input type="text" placeholder='Enter Your Name'/>
          <lable>Mail:</lable>
          <input type ="email" placeholder="Enter your email" />
          <textarea rows="5" placeholder="Your message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
