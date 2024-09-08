import Header from "../../components/header/Header";
import CategoryList from "../../components/categoryList/CategoryList";
import ProductCards from "../../components/productCards/ProductCards";
import Navbar1 from "../../components/navbar1/Navbar1";
import ServiceFeatures from "../../components/serviceFeatures/ServiceFeatures";
import DealsPromotions from "../../components/dealsPromotions/DealsPromotions";
import Footer from "../../components/footer/Footer";
import TrendingProducts from "../../components/trendingProducts/TrendingProducts";
import HeroSection from "../../components/herosection/HeroSection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CategoryList />
      <TrendingProducts />
      <ProductCards />
      {/* <Navbar1 /> */}
      <TrendingProducts />
      <DealsPromotions />
      <ServiceFeatures />
      <Footer />
    </div>
  );
};

export default Home;
