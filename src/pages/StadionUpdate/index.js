import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import MyInput from "../../components/myInput";

function StadionUpdate() {
  const [titleInp, setTitleInp] = useState("");
  const [capacityInp, setCapacityInp] = useState("");
  const [locationInp, setLocationInp] = useState("");
  const [imageInp, setImageInp] = useState("");
  const [openedInp, setOpenedInp] = useState("");
  const [priceInp, setPriceInp] = useState("");
  const [ratingInp, setRatingInp] = useState("");
  const [cNameInp, setCNameInp] = useState("");
  const [ratingErr, setRatingErr] = useState("");

  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${params.banana}`)
      .then(function (response) {
        setTitleInp(response.data.title);
        setCapacityInp(response.data.capacity);
        setLocationInp(response.data.location);
        setImageInp(response.data.imageURL);
        setOpenedInp(response.data.opened);
        setPriceInp(response.data.price);
        setRatingInp(response.data.rating);
        setCNameInp(response.data.club.name);
        // setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onCreate = (e) => {
    e.preventDefault();

    if (ratingInp > 5 || ratingInp < 1) {
      setRatingErr("rating 1 va 5 oraligida bola oladi!");
      return;
    }

    axios
      .put(`http://localhost:3000/products/${params.banana}`, {
        imageURL: imageInp.trim(),
        title: titleInp.trim(),
        capacity: capacityInp,
        location: locationInp.trim(),
        opened: openedInp.trim(),
        price: priceInp,
        rating: ratingInp,
        club: {
          name: cNameInp.trim(),
        },
      })
      .then(function (response) {
        navigate(`/stadium/${params.banana}`);
      })
      .catch(function (error) {
        console.log(error);
        alert("Nimadir xato ketdi, iltimos keyinroq harakt qilib kor`ing!");
      });
  };

  return (
    <Layout>
      <form className=" max-w-3xl mx-auto shadow border p-8 space-y-8">
        <MyInput
          labelText={"Title"}
          myValue={titleInp}
          mySetValueChange={setTitleInp}
          type={"text"}
        />
        <MyInput
          labelText={"Capacity"}
          myValue={capacityInp}
          mySetValueChange={setCapacityInp}
          type={"number"}
        />

        <MyInput
          labelText={"Location"}
          myValue={locationInp}
          mySetValueChange={setLocationInp}
          type={"text"}
        />
        <MyInput
          labelText={"Image URL"}
          myValue={imageInp}
          mySetValueChange={setImageInp}
          type={"text"}
        />
        <MyInput
          labelText={"Opened Text"}
          myValue={openedInp}
          mySetValueChange={setOpenedInp}
          type={"text"}
        />
        <MyInput
          labelText={"Price"}
          myValue={priceInp}
          mySetValueChange={setPriceInp}
          type={"number"}
        />
        <div>
          <MyInput
            labelText={"Rating"}
            myValue={ratingInp}
            mySetValueChange={setRatingInp}
            type={"number"}
          />
          {ratingErr && <p className="text-red-500">{ratingErr}</p>}
        </div>
        <MyInput
          labelText={"Club name"}
          myValue={cNameInp}
          mySetValueChange={setCNameInp}
          type={"text"}
        />
        <div className="flex justify-end">
          <button
            onClick={onCreate}
            className="px-4 py-2 rounded bg-indigo-700 text-white"
          >
            Update
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default StadionUpdate;
