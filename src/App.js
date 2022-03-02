import Homepage from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import StadiumDetail from "./pages/StadiumDetail";
import StadiumCreate from "./pages/StadiumCreate";
import StadionUpdate from "./pages/StadionUpdate";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import CartPage from "./pages/Cart";
import ProductProvider from "./utils/productContext";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/stadium/:banana" element={<StadiumDetail />} />
          <Route path="/stadium/update/:banana" element={<StadionUpdate />} />
          <Route path="/stadium/create" element={<StadiumCreate />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
