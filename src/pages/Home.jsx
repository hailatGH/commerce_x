import React from "react";
import { Link } from "react-router-dom";
import { Product, FooterBanner, HeroBanner, Layout } from "../components";

const Home = ({ heroBanner, products, bannderData }) => {
  return (
    <Layout>
        <HeroBanner heroBanner={heroBanner} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Link to={"/commerce_x/product/" + product._id}>
            <Product key={product._id} product={product} />
          </Link>
        ))}
      </div>
      <FooterBanner footerBanner={bannderData[0]} />
    </Layout>
  );
};

export default Home;
