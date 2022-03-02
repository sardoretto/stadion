import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../utils/productContext";

function ProductCard({ stadion, isOnCartPage }) {
  const { setCartStadions, cartStadions } = useContext(ProductContext);

  const onAddtoCart = (e) => {
    if (cartStadions.some((e) => e.id === stadion.id)) {
      return;
    }

    let newArray = [...cartStadions];
    newArray.push(stadion);
    setCartStadions(newArray);
  };

  const deleteFromCart = () => {
    const newArray = cartStadions.filter((item) => item.id !== stadion.id);
    setCartStadions(newArray);
  };

  return (
    <div className="max-w-sm  bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/stadium/${stadion.id}`}>
        <div className="p-4">
          <img
            className=" aspect-4/3 object-cover"
            src={stadion.imageURL}
            alt="product image"
          />
        </div>
      </Link>
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {stadion.title}
          </h3>
        </a>
        <Rate
          count={5}
          disabled={true}
          defaultValue={stadion.rating}
          allowHalf={true}
        />
        <div className="flex justify-between items-center">
          <span className="text-md truncate font-bold text-gray-900 dark:text-white">
            ${stadion.price}
          </span>
          <button
            onClick={onAddtoCart}
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
        <button
          onClick={deleteFromCart}
          className="px-4 py-2 bg-red-200 text-red-500 rounded w-full my-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
