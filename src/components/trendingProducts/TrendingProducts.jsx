import React, { useState } from "react";
import "./TrendingProducts.css";
import ptoduct_1 from "../../assets/images/product_18.webp";
import ptoduct_2 from "../../assets/images/product_19.webp";
import ptoduct_3 from "../../assets/images/product_20.webp";
import ptoduct_4 from "../../assets/images/product_21.webp";
import ptoduct_5 from "../../assets/images/product_22.webp";
import ptoduct_6 from "../../assets/images/product_23.webp";
// import ptoduct_1 from "../../assets/images/product_24.webp";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const TrendingProducts = () => {
  const products = [
    {
      id: 1,
      image: ptoduct_1, // Replace with actual image URL
      name: "Galaxy S21 Ultra 5G 128GB Unlocked International Version",
      brand: "UMINO",
      price: "$126.00",
      oldPrice: "$136.00",
      discount: "-7%",
      rating: 5,
    },
    {
      id: 2,
      image: ptoduct_2, // Replace with actual image URL
      name: "Logitech Watch Aluminum Case - Pride Edition",
      brand: "LOGITECH",
      price: "$126.00",
      oldPrice: null,
      discount: null,
      rating: 4.5,
    },
    {
      id: 3,
      image: ptoduct_3, // Replace with actual image URL
      name: "Samsung Galaxy S22 Plus 5G 8GB/128GB",
      brand: "UMINO",
      price: "$60.00",
      oldPrice: "$75.00",
      discount: "-20%",
      rating: 4.5,
    },
    {
      id: 4,
      image: ptoduct_4, // Replace with actual image URL
      name: "Samsung Galaxy S21 FE 8GB/128GB - White",
      brand: "UMINO",
      price: "$150.00",
      oldPrice: null,
      discount: null,
      rating: 4,
    },
    {
      id: 5,
      image: ptoduct_5, // Replace with actual image URL
      name: "Apple iPad Pro M1 11-Inch 2021 Wi-Fi 128GB",
      brand: "UMINO",
      price: "$68.00",
      oldPrice: "$85.00",
      discount: "-20%",
      rating: 5,
    },
    {
      id: 6,
      image: ptoduct_6, // Replace with actual image URL
      name: "Apple iPhone 13 Mini 128GB Pink - Unlocked",
      brand: "UMINO",
      price: "$55.00",
      oldPrice: null,
      discount: null,
      rating: 5,
    },
  ];

  return (
    <div className="trending-products">
      <div className="trending-header">
        <h2>Bestseller Product</h2>
        <div className="view-all-link-div">
          <a href="/view-all" className="view-all-link">
            View All
          </a>
          <MdKeyboardDoubleArrowRight />
        </div>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {product.discount && <div className="discount-badge">{product.discount}</div>}
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="hover-icons">
                <button className="icon-btn">Quick view</button>
                <button className="icon-btn">
                  <i className="fa fa-heart"></i>
                </button>
                <button className="icon-btn">
                  <i className="fa fa-sync-alt"></i>
                </button>
                <button className="icon-btn">
                  <i className="fa fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <p>{product.brand}</p>
            <p style={{ fontSize: "13px", fontWeight: "600", color: "#2E2E2E" }}>{product.name}</p>
            <div className="rating">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
            </div>
            <div className="price-section">
              <span className="price">{product.price}</span>
              {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
