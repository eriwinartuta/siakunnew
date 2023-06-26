import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGlobalTitle } from "../../../store/global";
import { UnderConstruction } from "../../../component";
import LazyLoad from "react-lazyload";

const Piutang = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGlobalTitle("Kartu / Piutang"));
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
            Piutang
          </h5>
        </div>
      </div> */}
      <LazyLoad>
        <UnderConstruction />
      </LazyLoad>
      <></>
    </div>
  );
};

export default Piutang;
