import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signin, Signup, Home, ProductDetails, Success } from "./pages";
import { heroBanner, products, bannderData } from "./dum_data";
// import { useAuth } from "./context/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  // const { currentUser } = useAuth();
  return (
    // <Routes>
    //     <Route
    //       path="/commerce_x"
    //       element={
    //         <Home
    //           heroBanner={heroBanner}
    //           products={products}
    //           bannderData={bannderData}
    //         />
    //       }
    //     />
    //     <Route
    //       path="/commerce_x/product/:id"
    //       element={<ProductDetails products={products} />}
    //     />
    //     <Route path="/commerce_x/product/:id/success" element={<Success />} />

    //     <Route path="signin" element={<Signin />} />
    //     <Route path="signup" element={<Signup />} />
    // </Routes>

    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route
          path="/commerce_x/"
          element={
            <Home
              heroBanner={heroBanner}
              products={products}
              bannderData={bannderData}
            />
          }
        />
        <Route
          path="/commerce_x/product/:id"
          element={<ProductDetails products={products} />}
        />
        <Route path="/commerce_x/product/:id/success" element={<Success />} />
      </Route>
      <Route path="/commerce_x/signin/" element={<Signin />} />
      <Route path="/commerce_x/signup/" element={<Signup />} />
    </Routes>
  );
};

export default App;
