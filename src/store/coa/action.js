import * as type from "./type";
import {
  axiosGet,
  // axiosAfterAction,
  // // axiosDel,
  // axiosPost,
  // axiosPut,
  // axiosGet2,
} from "../../config/axios";
import {
    // BASE_URL_AKUN,
    BASE_URL_AKUN_INTERNAL,
    BASE_PATH_AKUN
} from "../../config/api";

// 

export const fetchCOA1 = () => async (dispatch) => {
  //console.log("test masuk")
  const response = await dispatch(
    axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_coa_sub1)
  );
  //console.log("responakun1", response)
  dispatch({ type: type.COA_1, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_1, value: response.data });  
};

export const fetchCOA2bySub1 = (val) => async (dispatch) => {
    const response = await dispatch(
      axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_coa_sub2 + val)
    );
    dispatch({ type: type.GETCOA2, value: response.data });
    // dispatch({ type: type.DATA_LIST_AKUN_2, value: response.data });
    
  };

  export const fetchCOA3bySub2 = (val) => async (dispatch) => {
    const response = await dispatch(
      axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_coa_sub3 + val)
    );
    dispatch({ type: type.GETCOA3, value: response.data });
    // dispatch({ type: type.DATA_LIST_AKUN_2, value: response.data });
  };

  export const fetchCOA4bySub3 = (val) => async (dispatch) => {
    const response = await dispatch(
      axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_coa_sub4 + val)
    );
    dispatch({ type: type.GETCOA4, value: response.data });
    // dispatch({ type: type.DATA_LIST_AKUN_2, value: response.data });
  };

  export const fetchCOA5bySub4 = (val) => async (dispatch) => {
    const response = await dispatch(
      axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_coa_sub5 + val)
    );
    dispatch({ type: type.GETCOA5, value: response.data });
    // dispatch({ type: type.DATA_LIST_AKUN_2, value: response.data });
  };

  export const fetchCOA6bySub5 = (val) => async (dispatch) => {
    const response = await dispatch(
      axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_coa_sub6 + val)
    );
    dispatch({ type: type.GETCOA6, value: response.data });
    // dispatch({ type: type.DATA_LIST_AKUN_2, value: response.data });
  };

// export const setInputAkun1 = (val) => async (dispatch) => {
//   console.log("awal", val)
//   const dataakun1 = {
//     uraian_akun_1: null,
//     normalitas: null
//   };
//   const p = [dataakun1, ...val.akun1];
//   console.log("dadat", p)
//   dispatch({ type: type.DATA_LIST_AKUN_1, value: p });
// };

// export const clearInputAkun1 = () => async (dispatch) => {
//   const response = await dispatch(
//     axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_all_sub_1)
//   );
//   dispatch({ type: type.AKUN_1, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_1, value: response.data });
// };

// export const postAkun1 = (val) => async (dispatch) => {
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.create_akun_1,
//     data: val,
//   };
//   const response = await dispatch(axiosPost(data));
//   console.log(response);
//   dispatch({
//     type: type.POST_AKUN_1,
//     status: response.status,
//     message: response.message,
//   });
//   dispatch(fetchAkun1());
// };

// export const clearPostAkun1 = () => (dispatch) => {
//   return dispatch({ type: type.POST_AKUN_1, status: null, message: null });
// };


// export const AkunById1 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_byId_sub_1 + val)
//   );

//   dispatch({
//     type: type.AKUN_1_BYID,
//     kode_akun_1: response.data.kode_akun_1,
//     uraian_akun_1: response.data.uraian_akun_1,
//     normalitas: response.data.normalitas
//   });
 
//   if (response.status === "success") {
//     dispatch(editAkun1(response.data.kode_akun_1));
//   }
// };

// export const editAkun1 = (val) => (dispatch) => {
//   dispatch({ type: type.EDIT_AKUN_1, value: val });
// };

// export const clearEditAkun1 = () => (dispatch) => {
//   dispatch({
//     type: type.AKUN_1_BYID,
//     kode_akun_1: null,
//     uraian_akun_1: null,
//   });
//   dispatch({ type: type.EDIT_AKUN_1, value: null });
// };

// export const updateAkun1 = (val) => async (dispatch) => {
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.update_uraian_akun_1 ,
//     data: val.data,
//   };
//   console.log("rrer", data);
//   const response = await dispatch(axiosPut(data));
//   dispatch({
//     type: type.POST_AKUN_1,
//     status: response.status,
//     message: response.message,
//   });
//   console.log(response);
//   dispatch(fetchAkun1());
//   dispatch(clearEditAkun1());
// };

//==============================================================================================================//

// export const fetchAkun2 = () => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_all_sub_2)
//   );
//   dispatch({ type: type.AKUN_2, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_2, value: response.data });
  
// };

// export const fetchAkun2bySub1 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_bysub2 + val)
//   );
//   dispatch({ type: type.GETAKUN2, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_2, value: response.data });
  
// };

// export const setInputAkun2 = (val) => async (dispatch) => {
//   console.log("dataklik", val)
//   const dataakun2 = {
//     kode_akun_1:val.kode_akun_1,
//     kode_akun_2:null,
//     uraian_akun_2: null,
//   };
//   const p = [dataakun2, ...val.akun2];
//   console.log("ini data",p)
//   dispatch({ type: type.DATA_LIST_AKUN_2, value: p });
// };

// export const clearInputAkun2 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_bysub2 + val)
//   );
//   dispatch({ type: type.AKUN_2, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_2, value: response.data });
// };

// export const postAkun2 = (val) => async (dispatch) => {
//   const kodeAkun2 = val.kode_akun_2
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.create_akun_2,
//     data: val,
//   };
//   const response = await dispatch(axiosPost(data));
//   console.log(response);
//   dispatch({
//     type: type.POST_AKUN_2,
//     status: response.status,
//     message: response.message,
//   });
//   dispatch(fetchAkun3bySub2(kodeAkun2));
// };

// export const clearPostAkun2 = () => (dispatch) => {
//   return dispatch({ type: type.POST_AKUN_2, status: null, message: null });
// };


// export const AkunById2 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_byId_sub_2 + val)
//   );

//   dispatch({
//     type: type.AKUN_2_BYID,
//     kode_akun_1: response.data.kode_akun_1,
//     kode_akun_2: response.data.kode_akun_2,
//     uraian_akun_2: response.data.uraian_akun_2,
//   });
 
//   if (response.status === "success") {
//     dispatch(editAkun2(response.data.kode_akun_2));
//   }
// };

// export const editAkun2 = (val) => (dispatch) => {
//   dispatch({ type: type.EDIT_AKUN_2, value: val });
// };

// export const clearEditAkun2 = () => (dispatch) => {
//   dispatch({
//     type: type.AKUN_2_BYID,
//     kode_akun_1: null,
//     kode_akun_2: null,
//     uraian_akun_2: null,
//   });
//   dispatch({ type: type.EDIT_AKUN_2, value: null });
// };

// export const updateAkun2 = (val) => async (dispatch) => {
//   const KodeAkun1 = val.data.kode_akun_1
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.update_uraian_akun_2 ,
//     data: val.data,
//   };
//   console.log("rrer", data);
//   const response = await dispatch(axiosPut(data));
//   dispatch({
//     type: type.POST_AKUN_2,
//     status: response.status,
//     message: response.message,
//   });
//   console.log(response);
//   dispatch(fetchAkun2bySub1(KodeAkun1));
//   dispatch(clearEditAkun2());
// };

//=============================================================================//

// export const fetchAkun3 = () => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_all_sub_3)
//   );
//   dispatch({ type: type.AKUN_3, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_3, value: response.data });
  
// };

// export const fetchAkun3bySub2 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_bysub3 + val)
//   );
//   dispatch({ type: type.GETAKUN3, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_3, value: response.data });
  
// };

// export const setInputAkun3 = (val) => async (dispatch) => {
//   console.log("input", val)
//   const dataakun3 = {
//     kode_akun_2:val.kode_akun_2,
//     kode_akun_3:null,
//     uraian_akun_3: null,
//   };
//   const p = [dataakun3, ...val.akun3];
//   dispatch({ type: type.DATA_LIST_AKUN_3, value: p });
// };

// export const clearInputAkun3 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_bysub3 + val)
//   );
//   dispatch({ type: type.AKUN_3, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_3, value: response.data });
// };

// export const postAkun3 = (val) => async (dispatch) => {
//   const kodeAkun2 = val.kode_akun_2
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.create_akun_3,
//     data: val,
//   };
//   const response = await dispatch(axiosPost(data));
//   console.log(response);
//   dispatch({
//     type: type.POST_AKUN_3,
//     status: response.status,
//     message: response.message,
//   });
//   dispatch(fetchAkun3bySub2(kodeAkun2));
// };

// export const clearPostAkun3 = () => (dispatch) => {
//   return dispatch({ type: type.POST_AKUN_3, status: null, message: null });
// };

// export const AkunById3 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_byId_sub_3 + val)
//   );

//   dispatch({
//     type: type.AKUN_3_BYID,
//     kode_akun_2: response.data.kode_akun_2,
//     kode_akun_3: response.data.kode_akun_3,
//     uraian_akun_3: response.data.uraian_akun_3,
//   });
 
//   if (response.status === "success") {
//     dispatch(editAkun3(response.data.kode_akun_3));
//   }
// };

// export const editAkun3 = (val) => (dispatch) => {
//   dispatch({ type: type.EDIT_AKUN_3, value: val });
// };

// export const clearEditAkun3 = () => (dispatch) => {
//   dispatch({
//     type: type.AKUN_3_BYID,
//     kode_akun_2: null,
//     kode_akun_3: null,
//     uraian_akun_3: null,
//   });
//   dispatch({ type: type.EDIT_AKUN_3, value: null });
// };

// export const updateAkun3 = (val) => async (dispatch) => {
//   const kodeAkun2 = val.data.kode_akun_2
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.update_uraian_akun_3 ,
//     data: val.data,
//   };
//   console.log("rrer", data);
//   const response = await dispatch(axiosPut(data));
//   dispatch({
//     type: type.POST_AKUN_3,
//     status: response.status,
//     message: response.message,
//   });
//   console.log(response);
//   dispatch(fetchAkun3bySub2(kodeAkun2));
//   dispatch(clearEditAkun3());
// };

//=========================================================================================================//

// export const fetchAkun4 = () => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_all_sub_4)
//   );
//   dispatch({ type: type.AKUN_4, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_4, value: response.data });
  
// };

// export const fetchAkun4bySub3 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_bysub4 + val)
//   );
//   dispatch({ type: type.GETAKUN4, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_4, value: response.data });
  
// };

// export const setInputAkun4 = (val) => async (dispatch) => {
//   const dataakun4 = {
//     kode_akun_3:val.kode_akun_3,
//     kode_akun_4:null,
//     uraian_akun_4: null,
//   };
//   const p = [dataakun4, ...val.akun4];
//   dispatch({ type: type.DATA_LIST_AKUN_4, value: p });
// };

// export const clearInputAkun4 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_bysub4 + val)
//   );
//   dispatch({ type: type.AKUN_4, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_4, value: response.data });
// };

// export const postAkun4 = (val) => async (dispatch) => {
//   const kodeAkun3 = val.kode_akun_3
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.create_akun_4,
//     data: val,
//   };
//   const response = await dispatch(axiosPost(data));
//   console.log(response);
//   dispatch({
//     type: type.POST_AKUN_4,
//     status: response.status,
//     message: response.message,
//   });
//   dispatch(fetchAkun4bySub3(kodeAkun3));
// };

// export const clearPostAkun4 = () => (dispatch) => {
//   return dispatch({ type: type.POST_AKUN_4, status: null, message: null });
// };

// export const AkunById4 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_byId_sub_4 + val)
//   );

//   dispatch({
//     type: type.AKUN_4_BYID,
//     kode_akun_3: response.data.kode_akun_3,
//     kode_akun_4: response.data.kode_akun_4,
//     uraian_akun_4: response.data.uraian_akun_4,
//   });
 
//   if (response.status === "success") {
//     dispatch(editAkun4(response.data.kode_akun_4));
//   }
// };

// export const editAkun4 = (val) => (dispatch) => {
//   dispatch({ type: type.EDIT_AKUN_4, value: val });
// };

// export const clearEditAkun4 = () => (dispatch) => {
//   dispatch({
//     type: type.AKUN_4_BYID,
//     kode_akun_3: null,
//     kode_akun_4: null,
//     uraian_akun_4: null,
//   });
//   dispatch({ type: type.EDIT_AKUN_4, value: null });
// };

// export const updateAkun4 = (val) => async (dispatch) => {
//   const kodeAkun3 = val.data.kode_akun_3
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.update_uraian_akun_4 ,
//     data: val.data,
//   };
//   console.log("rrer", data);
//   const response = await dispatch(axiosPut(data));
//   dispatch({
//     type: type.POST_AKUN_4,
//     status: response.status,
//     message: response.message,
//   });
//   console.log(response);
//   dispatch(fetchAkun4bySub3(kodeAkun3));
//   dispatch(clearEditAkun4());
// };


//=====================================================================================//

// export const fetchAkun5 = () => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_all_sub_5)
//   );
//   dispatch({ type: type.AKUN_5, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_5, value: response.data });
  
// };

// export const fetchAkun5bySub4 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_bysub5 + val)
//   );
//   dispatch({ type: type.GETAKUN5, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_5, value: response.data });
  
// };

// export const setInputAkun5 = (val) => async (dispatch) => {
//   const dataakun5 = {
//     kode_akun_4:val.kode_akun_4,
//     kode_akun_5:null,
//     uraian_akun_5: null,
//   };
//   const p = [dataakun5, ...val.akun5];
//   dispatch({ type: type.DATA_LIST_AKUN_5, value: p });
// };

// export const clearInputAkun5 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_bysub5 + val)
//   );
//   dispatch({ type: type.AKUN_5, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_5, value: response.data });
// };

// export const postAkun5 = (val) => async (dispatch) => {
//   const kodeAkun4 = val.kode_akun_4
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.create_akun_5,
//     data: val,
//   };
//   const response = await dispatch(axiosPost(data));
//   console.log(response);
//   dispatch({
//     type: type.POST_AKUN_5,
//     status: response.status,
//     message: response.message,
//   });
//   dispatch(fetchAkun5bySub4(kodeAkun4));
// };

// export const clearPostAkun5 = () => (dispatch) => {
//   return dispatch({ type: type.POST_AKUN_5, status: null, message: null });
// };

// export const AkunById5 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_byId_sub_5 + val)
//   );

//   dispatch({
//     type: type.AKUN_5_BYID,
//     kode_akun_4: response.data.kode_akun_4,
//     kode_akun_5: response.data.kode_akun_5,
//     uraian_akun_5: response.data.uraian_akun_5,
//   });
 
//   if (response.status === "success") {
//     dispatch(editAkun5(response.data.kode_akun_5));
//   }
// };

// export const editAkun5 = (val) => (dispatch) => {
//   dispatch({ type: type.EDIT_AKUN_5, value: val });
// };

// export const clearEditAkun5 = () => (dispatch) => {
//   dispatch({
//     type: type.AKUN_5_BYID,
//     kode_akun_4: null,
//     kode_akun_5: null,
//     uraian_akun_5: null,
//   });
//   dispatch({ type: type.EDIT_AKUN_5, value: null });
// };

// export const updateAkun5 = (val) => async (dispatch) => {
//   const kodeAkun4 = val.data.kode_akun_4
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.update_uraian_akun_5 ,
//     data: val.data,
//   };
//   console.log("rrer", data);
//   const response = await dispatch(axiosPut(data));
//   dispatch({
//     type: type.POST_AKUN_5,
//     status: response.status,
//     message: response.message,
//   });
//   console.log(response);
//   dispatch(fetchAkun5bySub4(kodeAkun4));
//   dispatch(clearEditAkun5());
// };

//========================================================================================//
// export const fetchAkun6 = () => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_all_sub_6)
//   );
//   dispatch({ type: type.AKUN_6, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_6, value: response.data });
  
// };

// export const fetchAkun6bySub5 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosGet(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_bysub6 + val)
//   );
//   dispatch({ type: type.GETAKUN6, value: response.data });
  
// };

// export const setInputAkun6 = (val) => async (dispatch) => {
//   const dataakun6 = {
//     kode_akun_5: val.kode_akun_5,
//     kode_akun_6: null,
//     uraian_akun_6: null,
//   };
//   const p = [dataakun6, ...val.akun6];
//   dispatch({ type: type.DATA_LIST_AKUN_6, value: p });
// };

// export const clearInputAkun6 = () => async (dispatch) => {
//   const response = await dispatch(
//     axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_all_sub_6)
//   );
//   dispatch({ type: type.AKUN_6, value: response.data });
//   dispatch({ type: type.DATA_LIST_AKUN_6, value: response.data });
// };

// export const postAkun6 = (val) => async (dispatch) => {
//   const kodeAkun5 = val.kode_akun_5
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.create_akun_6,
//     data: val,
//   };
//   const response = await dispatch(axiosPost(data));
//   console.log(response);
//   dispatch({
//     type: type.POST_AKUN_6,
//     status: response.status,
//     message: response.message,
//   });
//   dispatch(fetchAkun6bySub5(kodeAkun5));
// };

// export const clearPostAkun6 = () => (dispatch) => {
//   return dispatch({ type: type.POST_AKUN_6, status: null, message: null });
// };

// export const AkunById6 = (val) => async (dispatch) => {
//   const response = await dispatch(
//     axiosAfterAction(BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.get_byId_sub_6 + val)
//   );

//   dispatch({
//     type: type.AKUN_6_BYID,
//     kode_akun_5: response.data.kode_akun_5,
//     kode_akun_6: response.data.kode_akun_6,
//     uraian_akun_6: response.data.uraian_akun_6,
//     keterangan: response.data.keterangan
//   });
 
//   if (response.status === "success") {
//     dispatch(editAkun6(response.data.kode_akun_6));
//   }
// };

// export const editAkun6 = (val) => (dispatch) => {
//   dispatch({ type: type.EDIT_AKUN_6, value: val });
// };

// export const clearEditAkun6 = () => (dispatch) => {
//   dispatch({
//     type: type.AKUN_6_BYID,
//     kode_akun_5: null,
//     kode_akun_6: null,
//     uraian_akun_6: null,
//     keterangan: null
//   });
//   dispatch({ type: type.EDIT_AKUN_6, value: null });
// };

// export const updateAkun6 = (val) => async (dispatch) => {
//   const kodeAkun5 = val.data.kode_akun_5
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.update_uraian_akun_6 ,
//     data: val.data,
//   };
//   console.log("rrer", data);
//   const response = await dispatch(axiosPut(data));
//   dispatch({
//     type: type.POST_AKUN_6,
//     status: response.status,
//     message: response.message,
//   });
//   console.log(response);
//   dispatch(fetchAkun6bySub5(kodeAkun5));
//   dispatch(clearEditAkun6());
// };

// export const updateStatus6 = (val) => async (dispatch) => {
//   const kodeAkun5 = val.data.kode_akun_5
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.update_status_akun6 ,
//     data: val.data,
//   };
//   console.log("rrer", data);
//   const response = await dispatch(axiosPut(data));
//   dispatch({
//     type: type.POST_AKUN_6,
//     status: response.status,
//     message: response.message,
//   });
//   console.log(response);
//   dispatch(fetchAkun6bySub5(kodeAkun5));
//   dispatch(clearEditAkun6());
// };

// export const nonupdateStatus6 = (val) => async (dispatch) => {
//   const kodeAkun5 = val.data.kode_akun_5
//   const data = {
//     url: BASE_URL_AKUN_INTERNAL + BASE_PATH_AKUN.update_status_akun6 ,
//     data: val.data,
//   };
//   console.log("rrer", data);
//   const response = await dispatch(axiosPut(data));
//   dispatch({
//     type: type.POST_AKUN_6,
//     status: response.status,
//     message: response.message,
//   });
//   console.log(response);
//   dispatch(fetchAkun6bySub5(kodeAkun5));
//   dispatch(clearEditAkun6());
// };
