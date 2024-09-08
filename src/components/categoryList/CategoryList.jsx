// CategoryList.jsx
import React from "react";
import CategoryCard from "../categoryCard/CategoryCard"; // Import the CategoryCard component
// import { logo } from "../../assets/images/product_1.avif";
import logo1 from "../../assets/images/product_1.webp";
import logo2 from "../../assets/images/product_2.avif";
import logo3 from "../../assets/images/product_3.avif";
import logo4 from "../../assets/images/product_4.avif";
import logo5 from "../../assets/images/product_5.avif";
import logo6 from "../../assets/images/product_6.avif";
import logo7 from "../../assets/images/product_7.avif";
import logo8 from "../../assets/images/product_8.avif";

const categories = [
  { image: logo1, title: "Macbook/PCs", products: 15 },
  { image: logo2, title: "OLED/Smart TVs", products: 15 },
  { image: logo3, title: "Phone/Mobile", products: 14 },
  { image: logo4, title: "Tablets/Ipad Pro", products: 15 },
  { image: logo5, title: "Gamepad/Console", products: 7 },
  { image: logo6, title: "Camera/Photo", products: 6 },
  { image: logo7, title: "Heatsink PC", products: 11 },
  { image: logo8, title: "Home/Electronics", products: 7 },
];

const CategoryList = () => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <CategoryCard key={index} image={category.image} title={category.title} products={category.products} />
      ))}
    </div>
  );
};

export default CategoryList;
