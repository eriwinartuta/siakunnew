import * as type from "./type";

const initialState = {
  globaltitle: null,
  error: null,
  loading: null,
  user: null,
  token: null,
  menu: [],
  userauth: null,
  token_lama: null,
  token_baru: null,
};

export const reducerGlobal = (state = initialState, action) => {
  switch (action.type) {
    case type.LOADING:
      return {
        ...state,
        loading: action.value,
      };
    case type.ERROR:
      return {
        ...state,
        error: action.value,
      };
    case type.SET_USER:
      return {
        ...state,
        user: action.value,
      };
    case type.MENU:
      return {
        ...state,
        menu: action.value,
      };
    case type.TOKEN:
      return {
        ...state,
        token: action.value,
      };
    case type.GLOBAL_TITTLE:
      return {
        ...state,
        globaltitle: action.value,
      };
    case type.AUTHUSER:
      return {
        ...state,
        userauth: action.value,
      };
    case type.TOKEN_BARU:
      return {
        ...state,
        token_baru: action.value,
      };
    case type.TOKEN_LAMA:
      return {
        ...state,
        token_lama: action.value,
      };
    default:
      return state;
  }
};
