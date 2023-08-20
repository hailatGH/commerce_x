import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({heroBanner, products, bannderData}) => {
  return (
    <>
      <HeroBanner heroBanner={heroBanner} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannderData[0]} />
    </>
  );
};

export default Home;
