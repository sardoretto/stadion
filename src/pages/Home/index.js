import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import ProductCard from "../../components/productCard";

function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <div className="flex justify-between my-8">
        <h1 className="text-xl md:text-4xl text-indigo-700">Stadionlar</h1>
        <Link
          className="bg-indigo-700 px-6 py-2 rounded text-xl text-white"
          to={"/stadium/create"}
        >
          +
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10">
        {data.map((stadion) => {
          return <ProductCard stadion={stadion} key={stadion.id} />;
        })}
      </div>
    </Layout>
  );
}

export default Homepage;
