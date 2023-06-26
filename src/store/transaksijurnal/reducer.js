import * as type from "./type";

const initialState = {
  nestedjurnal: [],
  filterjurnal: [],
  detailtransaksiperjadin : [],
  jurnaldetail: [],
  jurnaltransaksi: [],
  jurnalrealisasi : [],
  suratheaderid: [],
  jurnalbykode: {
    kode_transaksi: null,
    tanggal_transaksi: null,
    keterangan: null,
    modul: null,
    aplikasi: null,
    jurnal_aktiva: null,
    jurnal_pasiva: null,
    akun_aktiva: null,
    akun_pasiva: null,
    aktiva: null,
    pasiva: null,
    kode_surat: null,
  },
  viewjurnal: null,
  postjurnal: {
    status: null,
    message: null,
  },
};

export const reducerTransaksiJurnal = (state = initialState, action) => {
  switch (action.type) {
    case type.NESTED_JURNAL:
      return {
        ...state,
        nestedjurnal: action.value,
      };
      case type.GET_NESTED_PERJADIN:
      return {
        ...state,
        detailtransaksiperjadin: action.value,
      };
    case type.FILTER_JURNAL:
      return {
        ...state,
        filterjurnal: action.value,
      };
      case type.GET_KODEHEADER:
      return {
        ...state,
        jurnaltransaksi: action.value,
      };
      case type.GET_KODEHEADERREALISASI:
      return {
        ...state,
        jurnalrealisasi: action.value,
      };
      case type.GET_KODESURAT:
        return {
          ...state,
          suratheaderid: action.value,
        };
    case type.GET_BY_KODE_TRANSAKSI:
      return {
        ...state,
        jurnalbykode: {
          kode_transaksi: action.kode_transaksi,
          tanggal_transaksi: action.tanggal_transaksi,
          keterangan: action.keterangan,
          modul: action.modul,
          aplikasi: action.aplikasi,
          jurnal_aktiva: action.jurnal_aktiva,
          jurnal_pasiva: action.jurnal_pasiva,
          akun_aktiva: action.akun_aktiva,
          akun_pasiva: action.akun_pasiva,
          aktiva: action.aktiva,
          pasiva: action.pasiva,
          kode_surat: action.kode_surat
        },
      };
    case type.VIEW_JURNAL_ID:
      return {
        ...state,
        viewjurnal: action.value,
      };
    case type.POST_JURNAL:
      return {
        ...state,
        postjurnal: {
          status: action.status,
          message: action.message,
        },
      };

    default:
      return state;
  }
};
