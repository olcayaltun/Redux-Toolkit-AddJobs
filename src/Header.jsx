import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex  justify-around   p-5 bg-black  shadow  shadow-violet-500">
      <h1>Is Takip Listesi</h1>
      <div className="flex  justify-between gap-7 items-center">
        <Link
          className=" bg-violet-400 hover:bg-violet-500 p-2 rounded-md text-white font-semibold"
          to="/list"
        >
          Listeler
        </Link>
        <Link
          className=" bg-cyan-400  hover:bg-cyan-500 p-2 rounded-md text-white font-semibold"
          to="/"
        >
          {" "}
          Ekle
        </Link>
      </div>
    </div>
  );
};

export default Header;
