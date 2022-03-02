import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [cartStadions, setCartStadions] = useState([]);

  const myValues = { cartStadions, setCartStadions };

  return (
    <ProductContext.Provider value={myValues}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
