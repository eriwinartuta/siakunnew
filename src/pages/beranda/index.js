import React, { useEffect } from "react";
//import { useSelector } from "react-redux";
import { setGlobalTitle } from "../../store/global/action";
import { useDispatch } from "react-redux";
import { FONTSTYLE } from "../../component/font";
import { berandahero, berandahero2 } from "../../assets";
import LazyLoad from "react-lazyload";
import "../../test.css";

const Beranda = () => {
  //const { user } = useSelector((state) => state.reducerGlobal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGlobalTitle("Beranda"));
  }, [dispatch]);

  return (
    <div
      style={{ fontFamily: FONTSTYLE.POPPINS }}
      className="p-5 bg-white rounded-lg"
    >
      {/* <div className="grid grid-cols-1 gap-1">
      <div className="p-5"> <img src={welcome} /> </div>
    </div> */}

      <div class="area">
        <LazyLoad>
          <div className="mx-auto py-1 px-4">
            <div className="w-full flex justify-center">
              <div className="w-full rounded-lg md:w-11/12 xl:w-10/12 bg-gradient-to-r from-blue-200 to-blue-300 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
                <div>
                  <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                    <span>
                      <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                        <div>
                          <h1
                            style={{
                              fontSize: 48,
                              fontFamily: FONTSTYLE.PUBLICSANS,
                            }}
                            className="btn-shine text-4xl font-bold text-black md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-black font-black leading-6 lg:leading-10 md:text-left text-center ml-4"
                          >
                            Selamat {"............"}
                          </h1>
                          <h1
                            style={{
                              fontSize: 48,
                              fontFamily: FONTSTYLE.PUBLICSANS,
                            }}
                            className="btn-shine text-4xl font-bold text-black md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-black font-black leading-6 lg:leading-10 md:text-left text-center ml-5 mb-5"
                          >
                            Datang Di
                          </h1>
                        </div>

                        <h1
                          style={{
                            fontSize: 48,
                            fontFamily: FONTSTYLE.PUBLICSANS,
                          }}
                          className=" text-3xl font-bold text-blue-700 md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center ml-5 "
                        >
                          Si - <span>Akun </span>
                        </h1>
                        <h3 className="ml-5">Sistem Informasi Akuntansi </h3>
                      </div>
                    </span>

                    <div className="img xl:w-1/3 w-2/3">
                      <LazyLoad>
                        <img src={berandahero} alt="cartoon avatars" />
                      </LazyLoad>
                    </div>
                    <div className="   xl:w-5/12  ">
                      <LazyLoad>
                        <img src={berandahero2} alt="cartoon avatars" />
                      </LazyLoad>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LazyLoad>
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Beranda;
