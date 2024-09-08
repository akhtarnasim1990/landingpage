// CategoryCard.jsx
import React from "react";
import "./CategoryCard.css"; // Import the CSS file for styling

const CategoryCard = ({ image, title, products }) => {
  return (
    <div className="category-card">
      <div className="category-image-container">
        <img src={image} alt={title} className="category-image" />
      </div>
      <div className="category-info">
        <h3 className="category-title">{title}</h3>
        <p className="category-products">{products} Products</p>
      </div>
    </div>
  );
};

export default CategoryCard;
