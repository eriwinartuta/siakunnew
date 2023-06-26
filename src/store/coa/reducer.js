import * as type from "./type";

const initialState = {
  nestedall: [],
  coa1: [],
  //   datalistakun1: [],
  //   post: {
  //     status: null,
  //     message: null,
  //   },
  //   akun1byid: {
  //     kode_akun_1: null,
  //     uraian_akun_1: null,
  //     normalitas: null,
  //     aktif: null,
  //   },
  //   editakun1: null,
  coa2: [],
  coa2bysub1: [],
  //   datalistakun2: [],
  //   postakun2: {
  //     status: null,
  //     message: null,
  //   },
  //   akun2byid: {
  //     kode_akun_1: null,
  //     kode_akun_2: null,
  //     uraian_akun_2: null,
  //   },
  //   editakun2: null,
  coa3: [],
  coa3bysub2: [],
  //   datalistakun3: [],
  //   postakun3: {
  //     status: null,
  //     message: null,
  //   },
  //   akun3byid: {
  //     kode_akun_2: null,
  //     kode_akun_3: null,
  //     uraian_akun_3: null,
  //   },
  //   editakun3: null,
  coa4: [],
  coa4bysub3: [],
  //   datalistakun4: [],
  //   postakun4: {
  //     status: null,
  //     message: null,
  //   },
  //   akun4byid: {
  //     kode_akun_3: null,
  //     kode_akun_4: null,
  //     uraian_akun_4: null,
  //   },
  //   editakun4: null,
  coa5: [],
  coa5bysub4: [],
  //   datalistakun5: [],
  //   postakun5: {
  //     status: null,
  //     message: null,
  //   },
  //   akun5byid: {
  //     kode_akun_4: null,
  //     kode_akun_5: null,
  //     uraian_akun_5: null,
  //   },
  //   editakun5: null,
  coa6: [],
  coa6bysub5: [],
  //   datalistakun6: [],
  //   postakun6: {
  //     status: null,
  //     message: null,
  //   },
  //   akun6byid: {
  //     kode_akun_5: null,
  //     kode_akun_6: null,
  //     uraian_akun_6: null,
  //     keterangan: null,
  //   },
  //   editakun6: null,
};

export const reducerCOA = (state = initialState, action) => {
  switch (action.type) {
    case type.COA_1:
      return {
        ...state,
        coa1: action.value,
      };
    case type.GETCOA2:
      return {
        ...state,
        coa2bysub1: action.value,
      };
    case type.GETCOA3:
      return {
        ...state,
        coa3bysub2: action.value,
      };
      case type.GETCOA4:
      return {
        ...state,
        coa4bysub3: action.value,
      };
      case type.GETCOA5:
      return {
        ...state,
        coa5bysub4: action.value,
      };
      case type.GETCOA6:
      return {
        ...state,
        coa6bysub5: action.value,
      };
    // case type.DATA_LIST_AKUN_1:
    //   return {
    //     ...state,
    //     datalistakun1: action.value,
    //   };
    // case type.POST_AKUN_1:
    //   return {
    //     ...state,
    //     post: {
    //       status: action.status,
    //       message: action.message,
    //     },
    //   };
    // case type.AKUN_1_BYID:
    //   return {
    //     ...state,
    //     akun1byid: {
    //       kode_akun_1: action.kode_akun_1,
    //       uraian_akun_1: action.uraian_akun_1,
    //       normalitas: action.normalitas,
    //     },
    //   };
    // case type.EDIT_AKUN_1:
    //   return {
    //     ...state,
    //     editakun1: action.value,
    //   };
    // case type.AKUN_2:
    //   return {
    //     ...state,
    //     akun2: action.value,
    //   };
    // case type.GETAKUN2:
    //   return {
    //     ...state,
    //     akun2bysub1: action.value,
    //   };
    // case type.DATA_LIST_AKUN_2:
    //   return {
    //     ...state,
    //     datalistakun2: action.value,
    //   };
    // case type.POST_AKUN_2:
    //   return {
    //     ...state,
    //     postakun2: {
    //       status: action.status,
    //       message: action.message,
    //     },
    //   };
    // case type.AKUN_2_BYID:
    //   return {
    //     ...state,
    //     akun2byid: {
    //       kode_akun_1: action.kode_akun_1,
    //       kode_akun_2: action.kode_akun_2,
    //       uraian_akun_2: action.uraian_akun_2,
    //     },
    //   };
    // case type.EDIT_AKUN_2:
    //   return {
    //     ...state,
    //     editakun2: action.value,
    //   };
    // case type.AKUN_3:
    //   return {
    //     ...state,
    //     akun3: action.value,
    //   };
    // case type.GETAKUN3:
    //   return {
    //     ...state,
    //     akun3bysub2: action.value,
    //   };
    // case type.DATA_LIST_AKUN_3:
    //   return {
    //     ...state,
    //     datalistakun3: action.value,
    //   };
    // case type.POST_AKUN_3:
    //   return {
    //     ...state,
    //     postakun3: {
    //       status: action.status,
    //       message: action.message,
    //     },
    //   };
    // case type.AKUN_3_BYID:
    //   return {
    //     ...state,
    //     akun3byid: {
    //       kode_akun_2: action.kode_akun_2,
    //       kode_akun_3: action.kode_akun_3,
    //       uraian_akun_3: action.uraian_akun_3,
    //     },
    //   };
    // case type.EDIT_AKUN_3:
    //   return {
    //     ...state,
    //     editakun3: action.value,
    //   };
    // case type.AKUN_4:
    //   return {
    //     ...state,
    //     akun4: action.value,
    //   };
    // case type.GETAKUN4:
    //   return {
    //     ...state,
    //     akun4bysub3: action.value,
    //   };
    // case type.DATA_LIST_AKUN_4:
    //   return {
    //     ...state,
    //     datalistakun4: action.value,
    //   };
    // case type.POST_AKUN_4:
    //   return {
    //     ...state,
    //     postakun4: {
    //       status: action.status,
    //       message: action.message,
    //     },
    //   };
    // case type.AKUN_4_BYID:
    //   return {
    //     ...state,
    //     akun4byid: {
    //       kode_akun_3: action.kode_akun_3,
    //       kode_akun_4: action.kode_akun_4,
    //       uraian_akun_4: action.uraian_akun_4,
    //     },
    //   };
    // case type.EDIT_AKUN_4:
    //   return {
    //     ...state,
    //     editakun4: action.value,
    //   };
    // case type.AKUN_5:
    //   return {
    //     ...state,
    //     akun5: action.value,
    //   };
    // case type.GETAKUN5:
    //   return {
    //     ...state,
    //     akun5bysub4: action.value,
    //   };
    // case type.DATA_LIST_AKUN_5:
    //   return {
    //     ...state,
    //     datalistakun5: action.value,
    //   };
    // case type.POST_AKUN_5:
    //   return {
    //     ...state,
    //     postakun5: {
    //       status: action.status,
    //       message: action.message,
    //     },
    //   };
    // case type.AKUN_5_BYID:
    //   return {
    //     ...state,
    //     akun5byid: {
    //       kode_akun_4: action.kode_akun_4,
    //       kode_akun_5: action.kode_akun_5,
    //       uraian_akun_5: action.uraian_akun_5,
    //     },
    //   };
    // case type.EDIT_AKUN_5:
    //   return {
    //     ...state,
    //     editakun5: action.value,
    //   };
    // case type.AKUN_6:
    //   return {
    //     ...state,
    //     akun6: action.value,
    //   };
    // case type.GETAKUN6:
    //   return {
    //     ...state,
    //     akun6bysub5: action.value,
    //   };
    // case type.DATA_LIST_AKUN_6:
    //   return {
    //     ...state,
    //     datalistakun6: action.value,
    //   };
    // case type.POST_AKUN_6:
    //   return {
    //     ...state,
    //     postakun6: {
    //       status: action.status,
    //       message: action.message,
    //     },
    //   };
    // case type.AKUN_6_BYID:
    //   return {
    //     ...state,
    //     akun6byid: {
    //       kode_akun_5: action.kode_akun_5,
    //       kode_akun_6: action.kode_akun_6,
    //       uraian_akun_6: action.uraian_akun_6,
    //       keterangan: action.keterangan,
    //     },
    //   };
    // case type.EDIT_AKUN_6:
    //   return {
    //     ...state,
    //     editakun6: action.value,
    //   };
    default:
      return state;
  }
};
