import React from "react";
import "./Footer.css";
import card1 from "../../assets/images/card_1.avif";
import card2 from "../../assets/images/card_2.avif";
import card3 from "../../assets/images/card_3.avif";
import card4 from "../../assets/images/card_4.avif";
import card5 from "../../assets/images/card_5.avif";
import card6 from "../../assets/images/card_6.avif";
import card7 from "../../assets/images/card_7.avif";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Newsletter Section */}
      <div className="newsletter">
        <h2>Sign Up to Newsletter</h2>
        <p>Enter your email address to get $10 off your first order and free shipping.</p>
        <p>Updates information on Sales and Offers.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Your email address..." />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Got Question? Call us 24/7</p>
          <h4>+222-1800-2628</h4>
          <p>268 St, South New York/NY 98944, United States.</p>
          <p>blueskytechcompany@gmail.com</p>
          <div className="social-icons">
            <i className="fa fa-instagram"></i>
            <i className="fa fa-tiktok"></i>
            <i className="fa fa-youtube"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-facebook"></i>
          </div>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Our Stores</li>
            <li>Contact Us</li>
            <li>Size Guide</li>
            <li>My Account</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Shipping & Return</li>
            <li>Term & Conditions</li>
            <li>Theme FAQs</li>
            <li>Store Locations</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Shop By Categories</h3>
          <ul>
            <li>Smartphone</li>
            <li>Headphones</li>
            <li>Computer & Desktop</li>
            <li>Cameras & Photos</li>
            <li>Laptop & Ipad</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li>Blog</li>
            <li>My Account</li>
            <li>Wishlist</li>
            <li>Terms Of Service</li>
            <li>Purchase Theme</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="language-currency">
          <select>
            <option>English</option>
          </select>
          <select>
            <option>United States (USD $)</option>
          </select>
        </div>
        <p>© 2024 Umino Store. All Rights Reserved</p>
        <div className="payment-methods">
          <img src={card1} alt="Visa" />
          {/* <img src={card2} alt="MasterCard" /> */}
          {/* <img src={card3} alt="PayPal" />
          <img src={card3} alt="PayPal" />
          <img src={card3} alt="PayPal" />
          <img src={card3} alt="PayPal" />
          <img src={card3} alt="PayPal" />
          <img src={card3} alt="PayPal" />
          <img src={card3} alt="PayPal" /> */}
          {/* Add more payment method logos */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
