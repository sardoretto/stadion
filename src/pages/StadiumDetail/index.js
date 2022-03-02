import Layout from "../../components/Layout";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { tickIcon } from "../../utils/icons";
import Rate from "rc-rate";
import { MutatingDots } from "react-loader-spinner";

function StadiumDetail() {
  let params = useParams();
  const [data, setData] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(
      () =>
        axios
          .get(`http://localhost:3000/products/${params.banana}`)
          .then(function (response) {
            setData(response.data);
          })
          .catch(function (error) {
            console.log(error);
          }),
      3000
    );
  }, []);

  const onDelete = () => {
    axios
      .delete(`http://localhost:3000/products/${params.banana}`)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert("Iltimos keyinro qayta urinib koring");
      });
  };

  return (
    <>
      {data ? (
        <Layout>
          <div className=" max-w-5xl mx-auto">
            {data && (
              <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div className="w-full lg:w-1/2">
                  <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                      {data.title}
                    </h1>

                    <div className="mt-8 space-y-5">
                      <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        {tickIcon}

                        <span className="mx-2">{data.club.name}</span>
                      </p>

                      <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        {tickIcon}

                        <span className="mx-2">{data.location}</span>
                      </p>

                      <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                        {tickIcon}

                        <span className="mx-2">
                          {data.capacity} ta odam sig`adi
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="my-4 text-red-500">
                    <Rate
                      count={5}
                      disabled={true}
                      defaultValue={data.rating}
                      allowHalf={true}
                    />
                  </div>
                  <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                    <form className="flex flex-col lg:flex-row">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                      />

                      <button
                        type="button"
                        className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                      >
                        Join Us
                      </button>
                    </form>
                  </div>
                  <div className="space-x-8">
                    <Link
                      to={`/stadium/update/${params.banana}`}
                      className="my-6 px-4 py-2 bg-red-100 rounded text-amber-500 border-2 border-amber-300 font-semibold"
                    >
                      Update
                    </Link>
                    <button
                      onClick={onDelete}
                      className="my-6 px-4 py-2 bg-red-100 rounded text-red-500 border-2 border-red-300 font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                  <img
                    className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                    src={data.imageURL}
                    alt="glasses photo"
                  />
                </div>
              </div>
            )}
          </div>
        </Layout>
      ) : (
        <div className="flex h-screen justify-center items-center">
          <MutatingDots
            height="100"
            width="100"
            color="grey"
            ariaLabel="loading"
          />
        </div>
      )}
    </>
  );
}

export default StadiumDetail;
