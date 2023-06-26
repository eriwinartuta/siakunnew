import * as type from "./type";
import {
  // axiosGet,
  // axiosAfterAction,
  // axiosDel,
  axiosPost,
  // axiosPut,
} from "../../config/axios";
import {
  BASE_URL_AKUN_INTERNAL,
  // BASE_PATH_TRANSAKSI_JURNAL,
  // EXPENDITURE_APP,
  BASE_PATH_REKONSILIASI,
} from "../../config/api";

export const clearPostRekon = () => (dispatch) => {
  return dispatch({ type: type.POSTDATA_REKONSILIASI, status: null, message: null });
};

export const postRekonsiliasi = (val) => async (dispatch) => {
 //console.log("data diposting", val)
  const data = {
    url: BASE_URL_AKUN_INTERNAL + BASE_PATH_REKONSILIASI.POST_REKON,
    data: val,
  };
  //console.log("rrer", data);
  const response = await dispatch(axiosPost(data));
  if ( response.status === "success" ) {
    dispatch({
      type: type.POSTDATA_REKONSILIASI,
      status: response.status,
      message: response.message,
      data: response.data
    });
  } else {
    dispatch({
      type: type.POSTDATA_REKONSILIASI,
      status: response.status,
      message: response.error.msg,
    });
  }
 
  console.log(response);
};


