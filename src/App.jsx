import React from "react";
import { Home, ProductDetails, Success } from "./pages";
import { heroBanner, products, bannderData } from "./dum_data";

const App = () => {
  return (
    <>
      <Home heroBanner={heroBanner} products={products} bannderData={bannderData} />
      {/* <ProductDetails products={products} product={products[0]} /> */}
      {/* <Success /> */}
    </>
  );
};

export default App;
