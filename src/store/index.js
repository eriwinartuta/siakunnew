import { combineReducers } from "redux";

import { reducerGlobal } from "./global";
import { reducerBAS } from "./akun";
import { fetchBAS } from "./akun";
import {
  fetchAkun1,
  fetchAkun2,
  fetchAkun3,
  fetchAkun4,
  fetchAkun5,
  fetchAkun6,
} from "./akun";
import { reducerRegistrasiBank } from "./registrasibank";
import { reducerDataSBM } from "./sbm";
import { fetchDataSBM, fetchAllSatuan, fetchSelAkun6 } from "./sbm";
import { fetchRefBank, fetchAllBank } from "./registrasibank";
import { reducerTransaksiJurnal } from "./transaksijurnal";
import { fetchNestedJurnal } from "./transaksijurnal";
import { fetchFilterJurnal } from "./transaksijurnal";
import { reducerMasterJurnal } from "./masterjurnal";
import { fetchMasterJurnalAll } from "./masterjurnal";
import { reducerLapPosisiKeuangan } from "./laporanposisikeuangan";
import { fetchLapPosKeuangan } from "./laporanposisikeuangan";
import { reducerRekonsiliasi } from "./rekonsiliasi";
import { reducerCOA } from "./coa";

export const allReducer = combineReducers({
  reducerGlobal,
  reducerBAS,
  reducerTransaksiJurnal,
  reducerRegistrasiBank,
  reducerDataSBM,
  reducerMasterJurnal,
  reducerLapPosisiKeuangan,
  reducerRekonsiliasi,
  reducerCOA
});

export {
  fetchBAS,
  fetchNestedJurnal,
  fetchRefBank,
  fetchAkun1,
  fetchAkun2,
  fetchAkun3,
  fetchAkun4,
  fetchAkun5,
  fetchAkun6,
  fetchFilterJurnal,
  fetchAllBank,
  fetchDataSBM,
  fetchAllSatuan,
  fetchSelAkun6,
  fetchMasterJurnalAll,
  fetchLapPosKeuangan,
};
