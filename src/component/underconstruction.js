import React from "react";
import { undercons } from "../assets";
import Buttons from "./buttons";
import { useNavigate } from "react-router-dom";
import { FONTSTYLE } from "./font";
import LazyLoad from "react-lazyload";

const UnderConstruction = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        fontFamily: FONTSTYLE.PUBLICSANS,
      }}
      className="flex items-center justify-center py-12"
    >
      <div className="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
        <div className="flex flex-col items-center py-16 ">
          <LazyLoad> 
          <img
            className="px-4 hidden md:block"
            src={undercons}
            width={"400px"}
            alt=""
          />
          </LazyLoad>
          <LazyLoad> 
          <img
            className="md:hidden"
            src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
            alt=""
          />
          </LazyLoad>
          <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
            Dalam Proses Pembuatan
          </h1>
          <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
            Sedang dalam proses pembuatan
          </p>
          <Buttons
            labelButton={"Kembali"}
            color={"white"}
            backgroundColor={"#00BAEB"}
            borderColor={"#00BAEB"}
            onClick={(e) => {
              navigate("../../beranda");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
