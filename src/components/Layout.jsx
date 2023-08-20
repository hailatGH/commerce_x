import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { x } from "../dum_data/images";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Helmet>
        <link rel="icon" type="image/svg+xml" href={x} />
        <title>Commerce X Store</title>
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
