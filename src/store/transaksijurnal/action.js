import * as type from "./type";
import {
  axiosGet,
  axiosAfterAction,
  // axiosDel,
  axiosPost,
  // axiosPut,
} from "../../config/axios";
import {
  BASE_URL_AKUN_INTERNAL,
  BASE_PATH_TRANSAKSI_JURNAL,
  EXPENDITURE_APP,
} from "../../config/api";

export const fetchNestedJurnal = () => async (dispatch) => {
  const response = await dispatch(
    axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_TRANSAKSI_JURNAL.nested_jurnal)
  );
  dispatch({ type: type.NESTED_JURNAL, value: response.data });
};

export const fetchFilterJurnal = (val1, val2) => async (dispatch) => {
  const response = await dispatch(
    axiosGet(
      BASE_URL_AKUN_INTERNAL +
        BASE_PATH_TRANSAKSI_JURNAL.filter_jurnal +
        val1 +
        "/" +
        val2
    )
  );
  dispatch({ type: type.FILTER_JURNAL, value: response.data });
};


export const fetchDetailTransaksiPerjadin = (val1, val2) => async (dispatch) => {
  console.log("deee", val1, val2)
  const response = await dispatch(
    axiosGet(
      EXPENDITURE_APP +
        BASE_PATH_TRANSAKSI_JURNAL.getnestedperjadin +
        val1 +
        "/" +
        val2
    )
  );
  dispatch({ type: type.GET_NESTED_PERJADIN, value: response.data });
};

export const jurnalByKode = (val) => async (dispatch) => {
  const response = await dispatch(
    axiosAfterAction(
      BASE_URL_AKUN_INTERNAL + BASE_PATH_TRANSAKSI_JURNAL.getbykode + val
    )
  );
  dispatch({ type: type.GET_KODEHEADER, value: response.data });
};

export const jurnalByKodeRealisasi = (val) => async (dispatch) => {
  const response = await dispatch(
    axiosAfterAction(
      BASE_URL_AKUN_INTERNAL + BASE_PATH_TRANSAKSI_JURNAL.getbykode + val
    )
  );
  dispatch({ type: type.GET_KODEHEADERREALISASI, value: response.data });
};

export const fetchKodeSurat = (val) => async (dispatch) => {
  const response = await dispatch(
    axiosAfterAction(
      EXPENDITURE_APP + BASE_PATH_TRANSAKSI_JURNAL.getsuratheader + val
    )
  );
  dispatch({ type: type.GET_KODESURAT, value: response.data });
};


export const viewJurnal = (val) => (dispatch) => {
  dispatch({ type: type.VIEW_JURNAL_ID, value: val });
};

export const clearPostJurnal = () => (dispatch) => {
  dispatch({
    type: type.GET_BY_KODE_TRANSAKSI,
    kode_transaksi: null,
    tanggal_transaksi: null,
    keterangan: null,
    modul: null,
    aplikasi: null,
    jurnal_aktiva: null,
    jurnal_pasiva: null,
    akun_aktiva: null,
    akun_pasiva: null,
    aktiva: null,
    pasiva: null,
  });
  dispatch({ type: type.VIEW_JURNAL_ID, value: null  });
};

export const clearPost = () => (dispatch) => {
  return dispatch({ type: type.POST_JURNAL, status: null, message: null });
};

export const postJurnal = (val) => async (dispatch) => {
  const data = {
    url: BASE_URL_AKUN_INTERNAL + BASE_PATH_TRANSAKSI_JURNAL.simpanjurnal,
    data: val.data,
  };
  console.log("rrer", data);
  const response = await dispatch(axiosPost(data));
  dispatch({
    type: type.POST_JURNAL,
    status: response.status,
    message: response.message,
  });
  console.log(response);
  dispatch(clearPostJurnal());
};

