import React from "react";
import "./ProductCards.css"; // Importing external CSS for styling
import cell1 from "../../assets/images/product_13.webp";
import cell2 from "../../assets/images/product_14.webp";

const ProductCards = () => {
  return (
    <div className="product-cards-container">
      {/* Cellphone Card */}
      <div className="product-card">
        <img
          src={cell1} // Placeholder image URL
          alt="Cellphone Ultra"
          className="product-image"
        />
        <div className="product-info">
          <h3>Super Sale</h3>
          <h3>Cellphone Ultra. Save $199.00</h3>
          <a href="/shop-cellphone" className="product-link">
            Shop Cellphone
          </a>
        </div>
      </div>

      {/* Headphone Card */}
      <div className="product-card">
        <img
          src={cell2} // Placeholder image URL
          alt="Bluetooth Headphone"
          className="product-image"
        />
        <div className="product-info">
          <h3>Deals Good</h3>
          <h3>Headphone Bluetooth 5.0</h3>
          <a href="/shop-headphone" className="product-link">
            Shop Headphone
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
