import { axiosPost } from "../../config/axios";
import * as type from "./type";

export const setUserData = (val) => (dispatch) => {
  dispatch({ type: type.SET_USER, value: val.user });
  dispatch({ type: type.TOKEN_BARU, value: val.token_baru });
  dispatch({ type: type.TOKEN_LAMA, value: val.token_lama });
};
export const setLoading = () => (dispatch) =>
  dispatch({ type: type.LOADING, value: true });

export const clearLoading = () => (dispatch) =>
  dispatch({ type: type.LOADING, value: false });

export const setError = (val) => (dispatch) =>
  dispatch({ type: type.ERROR, value: val });

export const clearError = () => (dispatch) =>
  dispatch({ type: type.ERROR, value: null });

export const setMenu = (val) => (dispatch) => {
  dispatch({ type: type.MENU, value: val });
};

export const setGlobalTitle = (val) => (dispatch) => {
  return dispatch({ type: type.GLOBAL_TITTLE, value: val });
};

export const fetchMenu = (val) => async (dispatch) => {
  const data = {
    url: "https://dev-sippp.ut.ac.id:4200/siakun/apiv1/auth/menucoba",
    data: val,
  };
  //console.log("data post", data);
  const response = await dispatch(axiosPost(data));
  console.log(response);
  if (response.data?.status === 'success') {
    console.log("token ", response.data?.data?.token)
    JSON.stringify(localStorage.setItem('token', response.data?.data?.token));
    dispatch ({ type: type.SET_USER, value: response.data?.data?.user  })
    dispatch({type: type.MENU, value: response.data?.data?.data?.menu})
    dispatch({type: type.TOKEN, value: response.data?.data?.token})
  } else {
    console.log("cari error", response)
    setError(response)
  }
}

export const setUserAuth = (val) => (dispatch) => {
  dispatch({ type: type.AUTHUSER, value: val });
};


export const setUserInLogin = (val) => (dispatch) => {
  dispatch({ type: type.SET_USER, value: val });
};
