import { useState } from "react";

function MyInput({ labelText, myValue, mySetValueChange, type }) {
  const [inpValue, setInpValue] = useState();

  const onInpValueChange = (e) => {
    mySetValueChange(e.target.value);
  };

  return (
    <div>
      <label className="text-xl" htmlFor="inputFor">
        {labelText}:
      </label>
      <input
        onChange={onInpValueChange}
        value={myValue}
        type={type}
        id="inputFor"
        className="form-input w-full border-2 rounded"
      />
    </div>
  );
}

export default MyInput;
