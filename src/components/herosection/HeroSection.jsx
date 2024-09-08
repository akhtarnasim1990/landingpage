import { useState } from "react";
import product1 from "../../assets/images/product_24.webp";
import product2 from "../../assets/images/product_25.webp";
import product3 from "../../assets/images/product_26.webp";
import "./HeroSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSection = () => {
  const [products, setProducts] = useState([
    {
      image: product1,
      name: `Top Offer
              `,
      feature: "Camera Smart GP5",
    },
    {
      image: product2,
      name: `Speaker`,
      feature: "Blutooth Sound Core GP5",
    },
    {
      image: product3,
      name: `Super Laptop
              `,
      feature: "Upto To 96GB Memory",
    },
  ]);
  return (
    <div className="herosection">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 0,
        }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {products.map((prod) => (
          <SwiperSlide>
            <img src={prod.image} alt="product1" />
            <div className="herosection-product-info">
              <h1>
                {prod.name}
                <br />
                {prod.feature}
              </h1>
              <p>Limited Time: Online Only</p>
              <div className="shop-btn">
                <button>Shop now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
