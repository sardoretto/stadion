import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import MyInput from "../../components/myInput";
import { useNavigate } from "react-router-dom";

function StadiumCreate() {
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

  const onCreate = (e) => {
    e.preventDefault();

    if (ratingInp > 5 || ratingInp < 1) {
      setRatingErr("rating 1 va 5 oraligida bola oladi!");
      return;
    }

    axios
      .post("http://localhost:3000/products", {
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
        navigate("/");
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
            Create
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default StadiumCreate;
