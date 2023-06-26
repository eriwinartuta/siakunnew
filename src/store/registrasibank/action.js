import * as type from "./type";
import {
  axiosGet,
  axiosAfterAction,
  // axiosDel,
  axiosPost,
  axiosPut,
} from "../../config/axios";
import {
    REF_BANK, REF_UNIT
} from "../../config/api";
import {
  BASE_URL_AKUN_INTERNAL,
  BASE_PATH_PERBANKAN
} from "../../config/api";


export const fetchRefBank = () => async (dispatch) => {
  const response = await dispatch(
    axiosGet(REF_BANK)
  );
  dispatch({ type: type.GET_BANK, value: response.data });
};

export const fetchAllBank = () => async (dispatch) => {
  const response = await dispatch(
    axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_PERBANKAN.get_all_bank)
  );
  dispatch({ type: type.GET_ALL_BANK, value: response.data });
}
export const fetchAllUnit = () => async (dispatch) => {
  const response = await dispatch(
    axiosGet(REF_UNIT)
  );
  dispatch({ type: type.GET_ALL_UNIT, value: response.data });
}

export const setInputBank = (val) => (dispatch) => {
  const data = {
    kode_bank: null,
    nama_bank: null,
    nomor_rekening: null,
    alamat_bank: null,
    atas_nama_rekening: null,
    penanggung_jawab: null,
    kontak: null,
    ucr: null,
    dokumen: null
  };
  let res = [];
  res.push(data, ...val);
  dispatch({ type: type.DATA_LIST_BANK, datalistbank: res });
};

export const clearPostBank = () => (dispatch) => {
  dispatch({
    type: type.DATA_LIST_BANK,
    kode_bank: null,
    nama_bank: null,
    nomor_rekening: null,
    alamat_bank: null,
    atas_nama_rekening: null,
    penanggung_jawab: null,
    kontak: null,
    ucr: null,
    dokumen: null
  });
  dispatch({ type: type.DATA_LIST_BANK, value: null  });
};

export const clearPost = () => (dispatch) => {
  return dispatch({ type: type.POST_REGISTER_BANK, status: null, message: null });
};

export const postRegistrasiBank = (val) => async (dispatch) => {
  const data = {
    url: BASE_URL_AKUN_INTERNAL + BASE_PATH_PERBANKAN.register_bank,
    data: val,
  };
  console.log("rrer", data);
  const response = await dispatch(axiosPost(data));
  dispatch({
    type: type.POST_REGISTER_BANK,
    status: response.status,
    message: response.message,
  });
  console.log(response);
  dispatch(clearPostBank());
};


export const RefBankById = (val) => async (dispatch) => {
  const response = await dispatch(
    axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_PERBANKAN.ref_bank_byid + val)
  );
  let data = response.data
  console.log("responbank", data )
  dispatch({
    type: type.BANK_BYID, 
    kode_bank: data.kode_bank,
    nama_bank: data.nama_bank,
    nomor_rekening: data.nomor_rekening,
    alamat_bank: data.alamat_bank,
    atas_nama_rekening: data.atas_nama_rekening,
    penanggung_jawab: data.penanggung_jawab,
    kontak: data.kontak,
    keterangan : data.keterangan,
    dokumen: data.dokumen,
    kode_unit: data.kode_unit,
    status_rekening : data.status_rekening

  });
 
  if (response.status === "success") {
    dispatch(editRefBank(data?.nomor_rekening));
  }
};

export const editRefBank = (val) => (dispatch) => {
  dispatch({ type: type.EDIT_REGISTER_BANK, value: val });
};

export const clearEditRefBank = () => (dispatch) => {
  dispatch({
    type: type.BANK_BYID,
    kode_bank: null,
    nama_bank: null,
    nomor_rekening: null,
    alamat_bank: null,
    atas_nama_rekening: null,
    penanggung_jawab: null,
    kontak: null,
    ucr: null,
    dokumen: null
  });
  dispatch({ type: type.EDIT_REGISTER_BANK, value: null });
};

export const clearUpdateBank = () => (dispatch) => {
  return dispatch({ type: type.POST_REGISTER_BANK, status: null, message: null });
};

export const updateRefBank = (val) => async (dispatch) => {
  const data = {
    url: BASE_URL_AKUN_INTERNAL + BASE_PATH_PERBANKAN.update_bank ,
    data: val.data,
  };
  console.log("rrer", data);
  const response = await dispatch(axiosPut(data));
  dispatch({
    type: type.POST_REGISTER_BANK,
    status: response.status,
    message: response.message,
  });
  console.log(response);
  dispatch(fetchAllBank());
  dispatch(clearEditRefBank());
};