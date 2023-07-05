export const GET_USER = "https://dev-sippp.ut.ac.id:4800/pegawai";
export const USMAN_APP = "https://dev-sippp.ut.ac.id:6999/aplikasi"
export const USMAN_MODUL = "https://dev-sippp.ut.ac.id:6999/menu1"
export const BASE_URL_AKUN = "https://dev-sippp.ut.ac.id:4200/siakun/apiv1"
export const EXPENDITURE_APP = "https://be1.ut.ac.id/expenditure"
export const EBUDGETING_APP = "https://be2.ut.ac.id/ebudget/auth" 
//export const BASE_URL_AKUN_INTERNAL = "https://dev-sippp.ut.ac.id:4200/siakun/internal" 

// export const BASE_URL_AKUN_INTERNAL = "https://103.147.3.189:4042/siakun/internal" 
export const URL_PANUTAN = "https://panutan.ut.ac.id"
export const BASE_URL_AKUN_INTERNAL = "https://be1.ut.ac.id/siakun/internal"
export const URL_SIAKUN = "https://asset.ut.ac.id/siakun";

export const REF_BANK = "https://be2.ut.ac.id/hrd/bank"

export const REF_UNIT = "https://be2.ut.ac.id/hrd/unit"

export const DUMMY_LAP = "https://siakun.ut.ac.id/laporan/"

export const DUMMY_LAPPOSKEU = "http://localhost:3012/laporanposisikeuangan.json"
export const DUMMY_LAPPENGHASILAN = "http://localhost:3012/laporanpenghasilankomprehensif.json"

export const BASE_PATH_AKUN = {
    nested_all: "/nestAkun",
    get_all_sub_1 : "/bas-CUD/get-all-sub1",
    get_all_sub_2 : "/bas-CUD/get-all-sub2",
    get_all_sub_3 : "/bas-CUD/get-all-sub3",
    get_all_sub_4 : "/bas-CUD/get-all-sub4",
    get_all_sub_5 : "/bas-CUD/get-all-sub5",
    get_all_sub_6 : "/bas-CUD/get-all-sub6",

    create_akun_1 : "/bas-CUD/create-sub1",
    create_akun_2 : "/bas-CUD/create-sub2",
    create_akun_3 : "/bas-CUD/create-sub3",
    create_akun_4 : "/bas-CUD/create-sub4",
    create_akun_5 : "/bas-CUD/create-sub5",
    create_akun_6 : "/bas-CUD/create-sub6",

    get_byId_sub_1 : "/bas-CUD/get-byId-sub1/",
    get_byId_sub_2 : "/bas-CUD/get-byId-sub2/",
    get_byId_sub_3 : "/bas-CUD/get-byId-sub3/",
    get_byId_sub_4 : "/bas-CUD/get-byId-sub4/",
    get_byId_sub_5 : "/bas-CUD/get-byId-sub5/",
    get_byId_sub_6 : "/bas-CUD/get-byId-sub6/",

    update_uraian_akun_1 : "/bas-CUD/update-uraian-sub1/",
    update_uraian_akun_2 : "/bas-CUD/update-uraian-sub2/",
    update_uraian_akun_3 : "/bas-CUD/update-uraian-sub3/",
    update_uraian_akun_4 : "/bas-CUD/update-uraian-sub4/",
    update_uraian_akun_5 : "/bas-CUD/update-uraian-sub5/",
    update_uraian_akun_6 : "/bas-CUD/update-uraian-sub6/",

    update_status_akun6 : "/bas-CUD/update-aktif-sub6",

    get_coa_sub1 : "/ref-coa/coa-1",
    get_coa_sub2 : "/ref-coa/coa-2/",
    get_coa_sub3 : "/ref-coa/coa-3/",
    get_coa_sub4 : "/ref-coa/coa-4/",
    get_coa_sub5 : "/ref-coa/coa-5/",
    get_coa_sub6 : "/ref-coa/coa-6/",

    get_bysub2 : "/bas-CUD/get-byfk-sub2/",
    get_bysub3 : "/bas-CUD/get-byfk-sub3/",
    get_bysub4 : "/bas-CUD/get-byfk-sub4/",
    get_bysub5 : "/bas-CUD/get-byfk-sub5/",
    get_bysub6 : "/bas-CUD/get-byfk-sub6/",

    get_saldounit : "/rkatu/saldo-unit/"



}

export const BASE_PATH_TRANSAKSI_JURNAL = {
    nested_jurnal: "/jurnal/nested-jurnal",
    filter_jurnal: "/jurnal/filter/",
    getbykode: "/jurnal/data-by-id/",
    simpanjurnal: "/jurnal/create-reversal-plan",

    ///transaksi expenditure
    getnestedperjadin : "/surat-tugas-perjadin/nested-new/",
    getsuratheader : "/KEUANGAN/SPM/transaction-keuangan/show-expen/"
}

export const BASE_PATH_PERBANKAN = {
    get_all_bank: "/ref-bank/get-all-bank",
    register_bank: "/ref-bank/register",
    ref_bank_byid: "/ref-bank/get-by-nomor-rekening/",
    update_bank: "/ref-bank/ubah-data-bank/"
}

export const BASE_PATH_UTILITAS = {
    data_sbm: "/sbm-kegiatan/get-all",
    all_satuan: "/satuan-kegiatan/get-all",
    sbm_byid : "/sbm-kegiatan/get-by-id/",
    create_sbm: "/sbm-kegiatan/create-data",
    update_sbm: "/sbm-kegiatan/update-data/",
    delete_sbm: "/sbm-kegiatan/delete-data/",
    select_sub6: "/bas-CUD/get-select-sub6"
}

export const BASE_PATH_DATA_SBM = {
    get_sbm_all : "/sbm-kegiatan/get-sbm",
    get_sbm_byid : "/sbm-kegiatan/get-sbm/",
    create_sbm : "/sbm-kegiatan/create-sbm",
    update_sbm : "/sbm-kegiatan/update-sbm",
    delete_sbm : "/sbm-kegiatan/delete-sbm/",
    get_sbm_bykode_kegiatan : "/sbm-kegiatan/get-sbm-by-fk/",

    get_kegiatan_all : "/sbm-kegiatan/get-bentuk",
    get_kegiatan_byid : "/sbm-kegiatan/get-bentuk/",
    create_data : "/sbm-kegiatan/create-bentuk",
    update_kegiatan : "/sbm-kegiatan/update-bentuk",
    delete_kegiatan : "/sbm-kegiatan/delete-bentuk/",

    ref_satuan : "/satuan-kegiatan/get-all",
    create_satuan : "/satuan-kegiatan/create"
}

export const BASE_PATH_MASTER_JURNAL = {
    get_all_master : "/master-jurnal/show-all",
    get_master_bykode : "/master-jurnal/show/",
    post_master_jurnal : "/master-jurnal/store",
    update_master_jurnal : "/master-jurnal/update/"
}

export const BASE_PATH_REKONSILIASI = {
    POST_REKON : "/rekonsiliasi/selection-pertanggal"
}
export const BASE_PATH_KARTU = {
list_kartu : "/apiv1/pagu-jurnal/list-kas-jurnal",
list_kartu_nocontra: "/apiv1/pagu-jurnal/list-kas-jurnal-nocontra"
}

export const BASE_PATH_PANUTAN = {
    get_unit : "/api/external/get_unit",
}