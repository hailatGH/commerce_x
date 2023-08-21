import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout();
      navigate("/commerce_x/signin/");
    } catch {
      console.log("Failed to create an account");
    }
  };

  return (
    <div className="navbar-container">
      <Link to="/commerce_x/">
        <p className="logo">Commerce X Headphones</p>
      </Link>

      <div className="logut-container">
        <a href="" onClick={handleLogout}>
          Log Out
        </a>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
