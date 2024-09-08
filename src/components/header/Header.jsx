import "./Header.css";
import { ReactComponent as Logo } from "../../assets/images/image.svg";
import { CiSearch } from "react-icons/ci";
import { PiUserBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FaSearch } from "react-icons/fa";
import SearchBar from "../searchBar/SearchBar";
import Navbar from "../navBar/NavBar";

const Header = () => {
  return (
    <div className="header">
      <div className="header_1">
        <div className="header_1_left">
          <span>+222-1800-2628</span>
          <span>blueskytechcompany@gmail.com</span>
        </div>
        <div className="header_1_right">
          <span>Our Stores</span>
          <span>United States (USD $)</span>
          <span>English </span>
        </div>
      </div>
      <div className="header_2">
        <div className="header_2_left">
          <Logo />
        </div>
        <div className="header_2_middle">
          {/* <div className="search-input-div">
            <div className="search-logo">
              <CiSearch />
            </div>
            <div className="search-input">
              <input placeholder="I'm looking for ..." />
            </div>
            <div className="search-button">
              <button>Search</button>
            </div>
          </div> */}
          {/* <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>
              <FaSearch className="icon" />
            </button>
          </div> */}
          <SearchBar />
        </div>
        <div className="header_2_right">
          <div className="account">
            <div className="account_logo">
              <PiUserBold />
            </div>
            <div className="account_text">
              <span>Log in</span>
              <span>Account</span>
            </div>
          </div>
          <div className="likes">
            <div className="likes_logo">
              <FaRegHeart />
            </div>
            <div className="likes_counts">0</div>
          </div>
          <div className="cart">
            <div>
              <div className="cart_logo">
                <LiaShoppingCartSolid />
              </div>
              <div className="cart_counts">0</div>
            </div>
            <div className="cart_text">
              <span>Cart</span>
              <span>$0.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="header_3">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
