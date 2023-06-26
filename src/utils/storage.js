import {
    setMenu,
    setUserData,
    setUserAuth
  } from "../store/global/action";
  
  export const setUsers = (val) => (dispatch) => {
    localStorage.setItem("user", JSON.stringify(val.user));
    localStorage.setItem("token_lama", val.token_lama);
    localStorage.setItem("token_baru", val.token_baru);
    const b = JSON.parse(localStorage.getItem("user"));
    const c = localStorage.getItem("token_lama");
    const d = localStorage.getItem("token_baru");
    dispatch(
      setUserData({
        user: b,
        token_baru: d,
        token_lama: c 
      })
    );
  };
  
  export const setMenuStorage = (val) => (dispatch) => {
    localStorage.setItem("menu", JSON.stringify(val));
    const a = JSON.parse(localStorage.getItem("menu"));
    dispatch(setMenu(a));
  };
  
  export const setDataAuth = (val) => (dispatch) => {
    localStorage.setItem("authuser", JSON.stringify(val));
    const a = JSON.parse(localStorage.getItem("authuser"));
    dispatch(setUserAuth(a));
  };
  