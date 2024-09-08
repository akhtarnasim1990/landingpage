import product1 from "../../assets/images/product_24.webp";
import "./HeroSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSection = () => {
  return (
    <div className="herosection">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 500,
        }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={product1} alt="product1" />
          <div className="herosection-product-info">
            <h1>
              Top Offer <br />
              Camera Smart GP5
            </h1>
            <p>Limited Time: Online Only</p>
            <div className="shop-btn">
              <button>Shop now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={product1} alt="product1" />
          <div className="herosection-product-info">
            <h1>
              Top Offer <br />
              Camera Smart GP5
            </h1>
            <p>Limited Time: Online Only</p>
            <div className="shop-btn">
              <button>Shop now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={product1} alt="product1" />
          <div className="herosection-product-info">
            <h1>
              Top Offer <br />
              Camera Smart GP5
            </h1>
            <p>Limited Time: Online Only</p>
            <div className="shop-btn">
              <button>Shop now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={product1} alt="product1" />
          <div className="herosection-product-info">
            <h1>
              Top Offer <br />
              Camera Smart GP5
            </h1>
            <p>Limited Time: Online Only</p>
            <div className="shop-btn">
              <button>Shop now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
