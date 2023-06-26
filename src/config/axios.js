import axios from "axios";
import {
  clearError,
  clearLoading,
  setError,
  setLoading,
} from "../store/global/action";

export const axiosGet = (url) => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  dispatch(clearError());
  dispatch(setLoading());
  try {
    const response = await axios.get(url, {headers});
    dispatch(clearLoading());
    //console.log("errir", response.data)
    return response.data;
  } catch (err) {
    // console.log("masuk catch", err)
    dispatch(clearLoading());
    dispatch(setError(err));
    
  }
};

export const axiosGet2 = (url) => async (dispatch) => {
  dispatch(clearError());
  dispatch(setLoading());
  try {
    const tokenlama = localStorage.getItem("token_lama");
    const tokenbaru = localStorage.getItem("token_baru");
    const authUser = JSON.parse(localStorage.getItem("authuser"));
    const response = await axios.get(url, {
      headers: {
        token_lama: "'"+tokenlama+"'",
        token_baru: "'"+tokenbaru+"'",
        id_user: authUser?.id_user,
        kode_group: authUser?.kode_group,
      },
    });
    // console.log("ressponget", response)
    dispatch(clearLoading());
    return response.data;
  } catch (err) {
    dispatch(clearLoading());
    dispatch(setError(err));
  }
};

export const axiosPost = (val) => async (dispatch) => {
  dispatch(clearError());
  try {
    const response = await axios.post(val.url, val.data);
    return response.data;
  } catch (err) {
    dispatch(setError(err));
  }
};

export const axiosPut = (val) => async (dispatch) => {
  dispatch(clearError());
  try {
    const response = await axios.put(val.url, val.data);
    return response.data;
  } catch (err) {
    dispatch(setError(err));
  }
};

export const axiosDel = (url, val) => async (dispatch) => {
  dispatch(clearError());
  try {
    const response = await axios.delete(url, {data: val.data});
    return response.data;
  } catch (err) {
    dispatch(setError(err));
  }
};


export const axiosAfterAction = (url) => async (dispatch) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    dispatch(setError(err));
  }
};

export const axiosPost2 = async (val) => {
  const tokenlama = localStorage.getItem("token_lama");
  const tokenbaru = localStorage.getItem("token_baru");
  const authUser = JSON.parse(localStorage.getItem("authuser"));
  const response = await axios.post(val.url, val.data, {
    headers: {
      token_lama: tokenlama,
      token_baru: tokenbaru,
      id_user: authUser?.id_user,
      kode_group: authUser?.kode_group,
    },
  });
  if (response.data.status === "error") {
    localStorage.clear();
    window.close();
  }
  return response;
};
