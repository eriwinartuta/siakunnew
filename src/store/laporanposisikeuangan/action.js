import * as type from "./type";
import {
  axiosGet,
  // axiosAfterAction,
  // axiosDel,
  // axiosPost,
  // axiosPut,
} from "../../config/axios";
import {
  // BASE_URL_AKUN_INTERNAL,
  // BASE_PATH_UTILITAS,
  // BASE_PATH_DATA_SBM,
  // BASE_PATH_MASTER_JURNAL,
  // USMAN_APP,
  // USMAN_MODUL,
  // BASE_PATH_AKUN,
  DUMMY_LAPPOSKEU
} from "../../config/api";

export const fetchLapPosKeuangan = () => async (dispatch) => {
  const response = await dispatch(
    axiosGet(DUMMY_LAPPOSKEU)
  );
  dispatch({ type: type.GET_LAP_POSISIKEUANGAN, value: response.data });
};


  


