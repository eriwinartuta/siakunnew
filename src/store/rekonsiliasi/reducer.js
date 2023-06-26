import * as type from "./type";

const initialState = {
  postrekon: {
    status: null,
    message: null,
    data: null,
  },
};

export const reducerRekonsiliasi = (state = initialState, action) => {
  switch (action.type) {
    case type.POSTDATA_REKONSILIASI:
      return {
        ...state,
        postrekon: {
          status: action.status,
          message: action.message,
          data: action.data
        },
      };

    default:
      return state;
  }
};
