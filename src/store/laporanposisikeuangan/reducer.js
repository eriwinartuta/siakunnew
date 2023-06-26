import * as type from "./type";

const initialState = {
  getposisikeuangan: [],
  
};

export const reducerLapPosisiKeuangan = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_LAP_POSISIKEUANGAN:
      return {
        ...state,
        getposisikeuangan: action.value,
      };
      
    default:
      return state;
  }
};
