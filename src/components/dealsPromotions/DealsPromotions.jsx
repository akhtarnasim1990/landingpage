import React from "react";
import "./DealsPromotions.css";
import cardImage1 from "../../assets/images/product_15.webp";
import cardImage2 from "../../assets/images/product_16.webp";
import cardImage3 from "../../assets/images/product_17.webp";

const DealsPromotions = () => {
  const deals = [
    {
      image: cardImage1, // Replace with actual image URLs
      title: "Cyber Monday - Save $599 On Speaker",
      description: "Save 50% on order more than $99. Delivery in 1 day. Apply for the first 1k Customers.",
    },
    {
      image: cardImage2, // Replace with actual image URLs
      title: "Sale Off Unlimited - Buy 1 Get 2",
      description: "Save 80% on orders more than $599. Delivery in 1 day. Apply for the first 1k Customers.",
    },
    {
      image: cardImage3, // Replace with actual image URLs
      title: "Hurry Up - Smartphone Only $299",
      description: "All smartphone products at the same price $299. Delivery in 1 day. Apply for the first 1k Customers.",
    },
  ];

  return (
    <div className="deals-promotions">
      <h2>Deals & Promotions</h2>
      <div className="deals-container">
        {deals.map((deal, index) => (
          <div className="deal-card" key={index}>
            <div className="image-container">
              <img src={deal.image} alt={deal.title} className="deal-image" />
            </div>
            <h3>{deal.title}</h3>
            <p>{deal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsPromotions;
