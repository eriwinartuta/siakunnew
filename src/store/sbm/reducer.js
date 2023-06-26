import * as type from "./type";

const initialState = {
  listsbm: [],
  listsbmbykegiatan: [],
  listsatuan: [],
  datalistsbm: [],
  postsbm: {
    status: null,
    message: null,
  },
  sbmbyid: {
    kode_sbm: null,
    kode_bentuk_kegiatan: null,
    kode_akun_6: null,
    kode_satuan: null,
    komponen: null,
    satuan_biaya: null,
    keterangan: null,
  },
  editsbm: null,
  listkegiatan: [],
  datalistkegiatan: [],
  postkegiatan: {
    status: null,
    message: null,
  },
  kegiatanbyid: {
    kode_bentuk_kegiatan: null,
    uraian: null,
  },
  editkegiatan: null,
  get_akun6: [],
  listsatuan1: [],
  datalistsatuan: [],
  postsatuan: {
    status: null,
    message: null,
  },
  satuanbyid: {
    nama_satuan: null,
    uraian: null,
  },
  editsatuan: null,
};

export const reducerDataSBM = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_DATA_SBM:
      return {
        ...state,
        listsbm: action.value,
      };
      case type.GET_DATA_SBM_BY_KEGIATAN:
      return {
        ...state,
        listsbmbykegiatan: action.value,
      };
    case type.GET_ALL_SATUAN:
      return {
        ...state,
        listsatuan: action.value,
      };
    case type.DATA_LIST_SBM:
      return {
        ...state,
        datalistsbm: action.value,
      };
    case type.POST_SBM:
      return {
        ...state,
        postsbm: {
          status: action.status,
          message: action.message,
        },
      };
    case type.GET_SBM_BYID:
      return {
        ...state,
        sbmbyid: {
          kode_sbm: action.kode_sbm,
          kode_bentuk_kegiatan: action.kode_bentuk_kegiatan,
          kode_akun_6: action.kode_akun_6,
          kode_satuan: action.kode_satuan,
          komponen: action.komponen,
          satuan_biaya: action.satuan_biaya,
          keterangan: action.keterangan
        },
      };
    case type.EDIT_SBM:
      return {
        ...state,
        editsbm: action.value,
      };
    case type.SELECT_AKUN:
      return {
        ...state,
        get_akun6: action.value,
      };
    case type.GET_DATA_KEGIATAN:
      return {
        ...state,
        listkegiatan: action.value,
      };
    case type.DATA_LIST_KEGIATAN:
      return {
        ...state,
        datalistkegiatan: action.value,
      };
    case type.POST_KEGIATAN:
      return {
        ...state,
        postkegiatan: {
          status: action.status,
          message: action.message,
        },
      };
    case type.GET_BYID_KEGIATAN:
      return {
        ...state,
        kegiatanbyid: {
          kode_bentuk_kegiatan: action.kode_bentuk_kegiatan,
          uraian: action.uraian,
        },
      };
    case type.EDIT_KEGIATAN:
      return {
        ...state,
        editkegiatan: action.value,
      };
      case type.GET_DATA_SATUAN:
      return {
        ...state,
        listsatuan1: action.value,
      };
    case type.DATA_LIST_SATUAN:
      return {
        ...state,
        datalistsatuan: action.value,
      };
    case type.POST_SATUAN:
      return {
        ...state,
        postsatuan: {
          status: action.status,
          message: action.message,
        },
      };
    case type.GET_BYID_SATUAN:
      return {
        ...state,
        satuanbyid: {
          nama_satuan: action.nama_satuan,
          uraian: action.uraian,
        },
      };
    case type.EDIT_SATUAN:
      return {
        ...state,
        editsatuan: action.value,
      };
    default:
      return state;
  }
};
