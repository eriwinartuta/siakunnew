import * as type from "./type";

const initialState = {
  listmasterjurnal: [],
  postmasterjurnal: {
    status: null,
    message: null,
  },
  masterjurnalbyid: {
    kode_penyeimbang: null,
    keterangan: null,
    kode_aplikasi: null,
    aplikasi: null,
    kode_modul: null,
    modul: null,
    Debit: null,
    Kredit: null
  },
  editmasterjurnal: null,
  getaplikasi: [],
  getmodul: [],
  getallakun6: []
};

export const reducerMasterJurnal = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ALL_MASTER_JURNAL:
      return {
        ...state,
        listmasterjurnal: action.value,
      };
      case type,type.GET_ALL_APLIKASI:
      return {
        ...state,
        getaplikasi: action.value,
      };
      case type.GET_ALL_MODUL:
      return {
        ...state,
        getmodul: action.value,
      };
      case type.GET_ALL_AKUN6:
      return {
        ...state,
        getallakun: action.value,
      };
      
    case type.POST_MASTER_JURNAL:
      return {
        ...state,
        postmasterjurnal: {
          status: action.status,
          message: action.message,
        },
      };
    case type.GET_MASTER_JURNAL_BYID:
      return {
        ...state,
        masterjurnalbyid: {
          kode_penyeimbang: action.kode_penyeimbang,
          keterangan: action.keterangan,
          aplikasi: action.aplikasi,
          kode_aplikasi: action.kode_aplikasi,
          kode_modul: action.kode_modul,
          modul: action.modul,
          Debit: action.Debit,
          Kredit: action.Kredit
        },
      };
    case type.EDIT_MASTER_JURNAL:
      return {
        ...state,
        editmasterjurnal: action.value,
      };
    
    default:
      return state;
  }
};
