import * as type from "./type";
import {
  axiosGet,
  axiosAfterAction,
  axiosDel,
  axiosPost,
  axiosPut,
} from "../../config/axios";
import {
  BASE_URL_AKUN_INTERNAL,
  BASE_PATH_UTILITAS,
  BASE_PATH_DATA_SBM,
} from "../../config/api";

export const fetchDataSBM = () => async (dispatch) => {
  const response = await dispatch(
    axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.get_sbm_all)
  );
  dispatch({ type: type.GET_DATA_SBM, value: response.data });
};

export const fetchDataSBMByKegiatan = (val) => async (dispatch) => {
  const response = await dispatch(
    axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.get_sbm_bykode_kegiatan + val)
  );
  dispatch({ type: type.GET_DATA_SBM_BY_KEGIATAN, value: response.data });
};

export const fetchSelAkun6 = () => async (dispatch) => {
  const response = await dispatch(
    axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_UTILITAS.select_sub6)
  );
  dispatch({ type: type.SELECT_AKUN, value: response.data });
};

export const fetchAllSatuan = () => async (dispatch) => {
    const response = await dispatch(
      axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_UTILITAS.all_satuan)
    );
    dispatch({ type: type.GET_ALL_SATUAN, value: response.data });
  };

  export const setInputSBM = (val) => async (dispatch) => {
    const datasbm = {
      kode_akun_6: null,
      kode_satuan: null,
      jumlah_sbm: null
    };
    const p = [datasbm, ...val];
    dispatch({ type: type.DATA_LIST_SBM, value: p });
  };
  
  export const clearInputAkun1 = () => async (dispatch) => {
    const response = await dispatch(
      axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.get_sbm_all)
    );
    dispatch({ type: type.GET_DATA_SBM, value: response.data });
    dispatch({ type: type.DATA_LIST_SBM, value: response.data });
  };
  
  export const postDataSBM = (val) => async (dispatch) => {
    const kodeBentuk = val.kode_bentuk_kegiatan
    const data = {
      url: BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.create_sbm,
      data: val,
    };
    const response = await dispatch(axiosPost(data));
    console.log(response);
    dispatch({
      type: type.POST_SBM,
      status: response.status,
      message: response.message,
    });
    dispatch(fetchDataSBMByKegiatan(kodeBentuk));
  };
  
  export const SBMByid = (val) => async (dispatch) => {
    const response = await dispatch(
      axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.get_sbm_byid + val)
    );
    dispatch({
      type: type.GET_SBM_BYID,
      kode_sbm: response.data.kode_sbm,
      kode_bentuk_kegiatan: response.data.kode_bentuk_kegiatan,
      kode_akun_6: response.data.kode_akun_6,
      kode_satuan: response.data.kode_satuan,
      satuan_biaya: response.data.satuan_biaya,
      komponen: response.data.komponen,
      keterangan: response.data.keterangan
    });
   
    if (response.status === "success") {
      dispatch(editSBM1(response.data.kode_sbm));
    }
  };
  
  export const editSBM1 = (val) => (dispatch) => {
    dispatch({ type: type.EDIT_SBM, value: val });
  };
  
  export const clearEditSBM = () => (dispatch) => {
    dispatch({
      type: type.GET_SBM_BYID,
      kode_sbm: null,
      kode_bentuk_kegiatan: null,
      kode_akun_6: null,
      kode_satuan: null,
      satuan_biaya: null,
      komponen: null,
      keterangan: null
    });
    dispatch({ type: type.EDIT_SBM, value: null });
  };
  
  export const DataSBMupdate = (val) => async (dispatch) => {
    const kodeBentuk = val.data.kode_bentuk_kegiatan
    const data = {
      url: BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.update_sbm ,
      data: val.data,
    };
    console.log("rrer", data);
    const response = await dispatch(axiosPut(data));
    dispatch({
      type: type.POST_SBM,
      status: response.status,
      message: response.message,
    });
    console.log(response);
    dispatch(fetchDataSBMByKegiatan(kodeBentuk));
    dispatch(clearEditSBM());
  };

  export const clearPostSBM = () => (dispatch) => {
    return dispatch({ type: type.POST_SBM, status: null, message: null });
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
  export const deleteKomponen = (val) => async (dispatch) => {
    const kodeBentuk = val.kode_bentuk_kegiatan
    const data = {
      data: val,
    };
    const response = await dispatch(axiosDel(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.delete_sbm + val.kode_sbm, { data: data.data}));
    console.log("dihapus", response);
    dispatch({
      type: type.POST_SBM,
      status: response.status,
      message: response.message,
    });
    dispatch(fetchDataSBMByKegiatan(kodeBentuk));
  };
///=======================================================================//

export const fetchKegiatan = () => async (dispatch) => {
  const response = await dispatch(
    axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.get_kegiatan_all)
  );
  dispatch({ type: type.DATA_LIST_KEGIATAN, value: response.data });
  
};

export const setInputKegiatan = (val) => async (dispatch) => {
  const datakegiatan = {
    kode_bentuk_kegiatan: null,
    uraian: null,
  };

  const p = [datakegiatan, ...val.listkegiatan];
  dispatch({ type: type.DATA_LIST_KEGIATAN, value: p });
};

export const clearInputKegiatan = () => async (dispatch) => {
  const response = await dispatch(
    axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.get_kegiatan_all)
  );
  dispatch({ type: type.GET_DATA_KEGIATAN, value: response.data });
  dispatch({ type: type.DATA_LIST_KEGIATAN, value: response.data });
};

export const postKegiatan = (val) => async (dispatch) => {
  const data = {
    url: BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.create_data,
    data: val,
  };
  const response = await dispatch(axiosPost(data));
  console.log(response);
  dispatch({
    type: type.POST_KEGIATAN,
    status: response.status,
    message: response.message,
  });
  dispatch(fetchKegiatan());
};

export const clearPostKegiatan = () => (dispatch) => {
  return dispatch({ type: type.POST_KEGIATAN, status: null, message: null });
};


export const kegiatanByID = (val) => async (dispatch) => {
  const response = await dispatch(
    axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.get_kegiatan_byid + val)
  );

  dispatch({
    type: type.GET_BYID_KEGIATAN,
    kode_bentuk_kegiatan: response.data.kode_bentuk_kegiatan,
    uraian: response.data.uraian,
  });
 
  if (response.status === "success") {
    dispatch(editKegiatn(response.data.kode_bentuk_kegiatan));
  }
};

export const editKegiatn = (val) => (dispatch) => {
  dispatch({ type: type.EDIT_KEGIATAN, value: val });
};

export const clearEditKegiatan = () => (dispatch) => {
  dispatch({
    type: type.GET_BYID_KEGIATAN,
    kode_bentuk_kegiatan: null,
    uraian: null
  });
  dispatch({ type: type.EDIT_KEGIATAN, value: null });
};

export const updateKegiatan = (val) => async (dispatch) => {
  const data = {
    url: BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.update_kegiatan ,
    data: val.data,
  };
  console.log("rrer", data);
  const response = await dispatch(axiosPut(data));
  dispatch({
    type: type.POST_KEGIATAN,
    status: response.status,
    message: response.message,
  });
  console.log(response);
  dispatch(fetchKegiatan());
  dispatch(clearEditKegiatan());
};

//===========================================================================//

export const fetchSatuan = () => async (dispatch) => {
  const response = await dispatch(
    axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.ref_satuan)
  );
  dispatch({ type: type.GET_DATA_SATUAN, value: response.data });
  dispatch({ type: type.DATA_LIST_SATUAN, value: response.data });
  
};

export const setInputSatuan = (val) => async (dispatch) => {
  console.log("data", val)
  const datasatuan = {
    nama_satuan: null,
    uraian: null,
  };

  const p = [datasatuan, ...val.listsatuan1];
  dispatch({ type: type.DATA_LIST_SATUAN, value: p });
};

export const clearInputSatuan = () => async (dispatch) => {
  const response = await dispatch(
    axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.ref_satuan)
  );
  dispatch({ type: type.GET_DATA_SATUAN, value: response.data });
  dispatch({ type: type.DATA_LIST_SATUAN, value: response.data });
};

export const postSatuan = (val) => async (dispatch) => {
  const data = {
    url: BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.create_satuan,
    data: val,
  };
  const response = await dispatch(axiosPost(data));
  console.log(response);
  dispatch({
    type: type.POST_SATUAN,
    status: response.status,
    message: response.message,
  });
  dispatch(fetchSatuan());
};

export const clearPostSatuan = () => (dispatch) => {
  return dispatch({ type: type.POST_SATUAN, status: null, message: null });
};


// export const satuanByID = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.get_kegiatan_byid + val)
//   );

//   dispatch({
//     type: type.GET_BYID_KEGIATAN,
//     kode_bentuk_kegiatan: response.data.kode_bentuk_kegiatan,
//     uraian: response.data.uraian,
//   });
 
//   if (response.status === "success") {
//     dispatch(editKegiatn(response.data.kode_bentuk_kegiatan));
//   }
// };

// export const editKegiatn = (val) => (dispatch) => {
//   dispatch({ type: type.EDIT_KEGIATAN, value: val });
// };

// export const clearEditKegiatan = () => (dispatch) => {
//   dispatch({
//     type: type.GET_BYID_KEGIATAN,
//     kode_bentuk_kegiatan: null,
//     uraian: null
//   });
//   dispatch({ type: type.EDIT_KEGIATAN, value: null });
// };

// export const updateKegiatan = (val) => async (dispatch) => {
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_DATA_SBM.update_kegiatan ,
//     data: val.data,
//   };
//   console.log("rrer", data);
//   const response = await dispatch(axiosPut(data));
//   dispatch({
//     type: type.POST_KEGIATAN,
//     status: response.status,
//     message: response.message,
//   });
//   console.log(response);
//   dispatch(fetchKegiatan());
//   dispatch(clearEditKegiatan());
// };

