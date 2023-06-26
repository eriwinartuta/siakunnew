import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGlobalTitle } from "../../../store/global";
// import { useNavigate } from "react-router-dom";
import { UnderConstruction } from "../../../component";
import LazyLoad from "react-lazyload";

const Hutang = () => {
  // const navigate =  useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGlobalTitle("Kartu / Hutang"));
  }, [dispatch]);

  return (
    <div className="p-5 bg-white rounded-lg">
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
        }}
      >
        <div>
          <h5
            style={{
              marginBottom: 20,
              fontWeight: "700",
              fontSize: 24,
            }}
          >
            Hutang
          </h5>
        </div>
      </div> */}
      <LazyLoad>
        <UnderConstruction />
      </LazyLoad>
    </div>
  );
};

export default Hutang;
