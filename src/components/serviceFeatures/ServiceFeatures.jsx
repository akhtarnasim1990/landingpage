import React from "react";
import "./ServiceFeatures.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast, faLock, faUndo, faHeadset } from "@fortawesome/free-solid-svg-icons";

const ServiceFeatures = () => {
  return (
    <div className="service-features">
      <div className="feature">
        <FontAwesomeIcon icon={faShippingFast} className="icon" />
        <h3>Fast Delivery</h3>
        <p>Deliver in 24 hours max!</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faLock} className="icon" />
        <h3>Safe Payment</h3>
        <p>Visa, Mastercard, PayPal...</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faUndo} className="icon" />
        <h3>Free Returns</h3>
        <p>Free returns within 15 days</p>
      </div>
      <div className="feature">
        <FontAwesomeIcon icon={faHeadset} className="icon" />
        <h3>Help Center</h3>
        <p>Dedicated 24/7 support</p>
      </div>
    </div>
  );
};

export default ServiceFeatures;
