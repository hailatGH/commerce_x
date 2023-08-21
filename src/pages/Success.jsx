import React, { useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { Layout } from "../components";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../utils";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <Layout>
      <Toaster />
      <div className="success-wrapper">
        <div className="success">
          <p className="icon">
            <BsBagCheckFill />
          </p>
          <h2>Thank you for your order!</h2>
          <p className="email-msg">Check your email inbox for the receipt.</p>
          <p className="description">
            If you have any questions, please email
            <a className="email" href="mailto:order@example.com">
              order@example.com
            </a>
          </p>
          <Link to="/commerce_x/">
            <button type="button" width="300px" className="btn">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
