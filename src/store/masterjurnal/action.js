import * as type from "./type";
import {
  axiosGet,
  axiosAfterAction,
  axiosPost,
  axiosPut,
  axiosGet2,
} from "../../config/axios";
import {
  BASE_URL_AKUN_INTERNAL,
  BASE_PATH_MASTER_JURNAL,
  USMAN_APP,
  USMAN_MODUL,
  BASE_PATH_AKUN,
} from "../../config/api";

export const fetchMasterJurnalAll = () => async (dispatch) => {
  const response = await dispatch(
    axiosGet2(BASE_URL_AKUN_INTERNAL + BASE_PATH_MASTER_JURNAL.get_all_master)
  );
  console.log("fetchhh", response)
  dispatch({ type: type.GET_ALL_MASTER_JURNAL, value: response.data });
};

export const fetchAllAplikasi = () => async (dispatch) => {
    const response = await dispatch(
      axiosGet2(USMAN_APP)
    );
    dispatch({ type: type.GET_ALL_APLIKASI, value: response.data });
  };
  export const fetchAllModul = () => async (dispatch) => {
    const response = await dispatch(
      axiosGet2(USMAN_MODUL)
    );
    dispatch({ type: type.GET_ALL_MODUL, value: response.data });
  };

  export const fetchMasterAkun6 = () => async (dispatch) => {
    const response = await dispatch(
      axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_all_sub_6)
    );
    dispatch({ type: type.GET_ALL_AKUN6, value: response.data });
  };

  

//   export const setInputSBM = (val) => async (dispatch) => {
//     const datasbm = {
//       kode_akun_6: null,
//       kode_satuan: null,
//       jumlah_sbm: null
//     };
//     const p = [datasbm, ...val];
//     dispatch({ type: type.DATA_LIST_SBM, value: p });
//   };
  
//   export const clearInputAkun1 = () => async (dispatch) => {
//     const response = await dispatch(
//       axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.get_sbm_all)
//     );
//     dispatch({ type: type.GET_DATA_SBM, value: response.data });
//     dispatch({ type: type.DATA_LIST_SBM, value: response.data });
//   };
  
  export const postDataMasterJurnal = (val) => async (dispatch) => {
    console.log("inpuya", val)
    const data = {
      url: BASE_URL_AKUN_INTERNAL + BASE_PATH_MASTER_JURNAL.post_master_jurnal,
      data: val,
    };
    const response = await dispatch(axiosPost(data));
    console.log(response);
    dispatch({
      type: type.POST_MASTER_JURNAL,
      status: response.status,
      message: response.message,
    });
    dispatch(fetchMasterJurnalAll());
  };
  
  export const MasterJurnalByKode = (val) => async (dispatch) => {
    const response = await dispatch(
      axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_MASTER_JURNAL.get_master_bykode + val)
    );
    dispatch({
      type: type.GET_MASTER_JURNAL_BYID,
      kode_penyeimbang: response.data.kode_penyeimbang,
      keterangan: response.data.keterangan,
      kode_aplikasi: response.data.kode_aplikasi,
      aplikasi: response.data.aplikasi,
      kode_modul: response.data.kode_modul,
      modul: response.data.modul,
      Debit: response.data.Debit,
      Kredit: response.data.Kredit
    });
   
    if (response.status === "success") {
      dispatch(editMasterJurnal(response.data.kode_penyeimbang));
    }
  };
  
  export const editMasterJurnal = (val) => (dispatch) => {
    dispatch({ type: type.EDIT_MASTER_JURNAL, value: val });
  };
  
  export const clearEditMasterJurnal = () => (dispatch) => {
    dispatch({
      type: type.GET_MASTER_JURNAL_BYID,
      kode_penyeimbang: null,
      keterangan: null,
      kode_aplikasi: null,
      aplikasi: null,
      kode_modul: null,
      modul: null,
      Debit: null,
      Kredit: null
    });
    dispatch({ type: type>type.EDIT_MASTER_JURNAL, value: null });
  };
  
  export const MasterJurnalUpdate = (val) => async (dispatch) => {
    // const kodePenyeimbang = val.data.kode_penyeimbang
    const data = {
      url: BASE_URL_AKUN_INTERNAL + BASE_PATH_MASTER_JURNAL.update_master_jurnal + val.data.kode_penyeimbang ,
      data: val.data,
    };
    console.log("rrer", data);
    const response = await dispatch(axiosPut(data));
    dispatch({
      type: type.POST_MASTER_JURNAL,
      status: response.status,
      message: response.message,
    });
    console.log(response);
    dispatch(fetchMasterJurnalAll());
    dispatch(clearEditMasterJurnal());
  };

  export const clearPostMasterJurnal = () => (dispatch) => {
    return dispatch({ type: type.POST_MASTER_JURNAL, status: null, message: null });
  };

  // export const deleteSBM = (val) => async (dispatch) => {
  //   const data = {
  //     data: val,
  //   };
  //   const response = await dispatch(axiosDel(BASE_URL_AKUN_INTERNAL + BASE_PATH_UTILITAS.delete_sbm, { data: data.data}));
  //   console.log("dihapus", response);
  //   dispatch({
  //     type: type.POST_SBM,
  //     status: response.status,
  //     message: response.message,
  //   });
  //   dispatch(fetchDataSBM());
  // };

  // export const deleteKomponen = (val) => async (dispatch) => {
  //   const response = await dispatch(
  //     axiosDel(BASE_URL_AKUN + BASE_PATH_DATA_SBM.delete_sbm + val)
  //   );
  //   console.log("res", response)
  //   dispatch({
  //     type: type.POST_SBM,
  //     status: response.status,
  //     message: response.message,
  //   });
  //   dispatch(fetchDataSBM());
  // };
//   export const deleteKomponen = (val) => async (dispatch) => {
//     const kodeBentuk = val.kode_bentuk_kegiatan
//     const data = {
//       data: val,
//     };
//     const response = await dispatch(axiosDel(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.delete_sbm + val.kode_sbm, { data: data.data}));
//     console.log("dihapus", response);
//     dispatch({
//       type: type.POST_SBM,
//       status: response.status,
//       message: response.message,
//     });
//     dispatch(fetchDataSBMByKegiatan(kodeBentuk));
//   };

