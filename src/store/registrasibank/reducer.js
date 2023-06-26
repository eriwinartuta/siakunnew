import * as type from "./type";

const initialState = {
  bank: [],
  allunit: [],
  listbank: [],
  datalistbank: [],
  postregist: {
    status: null,
    message: null,
  },
  bankbyid: {
    kode_bank: null,
    nama_bank: null,
    nomor_rekening: null,
    alamat_bank: null,
    atas_nama_rekening: null,
    penanggung_jawab: null,
    kontak: null,
    dokumen: null,
    uch: null,
    keterangan: null,
    kode_unit: null,
    status_rekening: null,

  },
  editbank: null,
};

export const reducerRegistrasiBank = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_BANK:
      return {
        ...state,
        bank: action.value,
      };
    case type.GET_ALL_BANK:
      return {
        ...state,
        listbank: action.value,
      };
      case type.GET_ALL_UNIT:
      return {
        ...state,
        allunit: action.value,
      };
    case type.DATA_LIST_BANK:
      return {
        ...state,
        datalistbank: action.value,
      };
    case type.POST_REGISTER_BANK:
      return {
        ...state,
        postregist: {
          status: action.status,
          message: action.message,
        },
      };
    case type.BANK_BYID:
      return {
        ...state,
        bankbyid: {
          kode_bank: action.kode_bank,
          nama_bank: action.nama_bank,
          nomor_rekening: action.nomor_rekening,
          alamat_bank: action.alamat_bank,
          atas_nama_rekening: action.atas_nama_rekening,
          penanggung_jawab: action.penanggung_jawab,
          kontak: action.kontak,
          uch: action.uch,
          keterangan: action.keterangan,
          dokumen: action.dokumen,
          kode_unit: action.kode_unit,
          status_rekening: action.status_rekening
        },
      };
    case type.EDIT_REGISTER_BANK:
      return {
        ...state,
        editbank: action.value,
      };

    default:
      return state;
  }
};
