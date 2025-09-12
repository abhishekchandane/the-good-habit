import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("shop");
  const [showMenu, setShowMenu] = useState(false); // 👈 toggle state

  return (
    <>
      {/* 🔹 Offer Strip */}
      <div className="offer-strip">
        10% OFF on all orders above ₹500 | Limited Time Offer
      </div>

      {/* 🔹 Navbar */}
     <div className="navbar2">
        {/* Left - Hamburger */}
        <div className="navbar-left">
          <img
            src={assets.hamburger_icon2}
            alt="Menu"
            className="logo"
            onClick={() => setShowMenu(!showMenu)} // toggle open/close
          />
        </div>

        {/* Center - Brand OR Menu */}
        <div className="navbar-center">
          {!showMenu ? (
            <h3 className="brand-title">The Good Habit</h3>
          ) : (
            <ul className={`navbar-menu ${showMenu ? "show" : ""}`}>
              <li>
                <Link
                  to="/"
                  onClick={() => setMenu("shop")}
                  className={menu === "shop" ? "active" : ""}
                >
                  Shop
                </Link>
              </li>
              <li>
                <a
                  href="#our-story"
                  onClick={() => setMenu("ourstory")}
                  className={menu === "ourstory" ? "active" : ""}
                >
                  Our story
                </a>
              </li>
              <li>
                <a
                  href="#track-order"
                  onClick={() => setMenu("trackorder")}
                  className={menu === "trackorder" ? "active" : ""}
                >
                  Track order
                </a>
              </li>
              <li>
                <a
                  href="#review"
                  onClick={() => setMenu("review")}
                  className={menu === "review" ? "active" : ""}
                >
                  Review
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Right - Icons */}
        <div className="navbar-right">
          <img src={assets.search_icon} alt="Search" className="icon" />
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" className="icon" />
          </Link>
          <img
            src={assets.user_icon}
            alt="User"
            className="icon"
            onClick={() => setShowLogin(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
