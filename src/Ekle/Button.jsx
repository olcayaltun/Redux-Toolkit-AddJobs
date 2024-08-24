import React from "react";

const Button = ({ text }) => {
  return (
    <div className=" grid place-items-center  mt-4">
      <button type="submit" className="btn text-white p-2">
        {" "}
        {text}
      </button>
    </div>
  );
};

export default Button;
