import {
  Table,
  Input,
  Radio,
  Select,
  DatePicker,
  Divider,
  Space,
  Button,
  Tag,
  notification, Spin
} from "antd";
import React, { useEffect, useState } from "react";
import { Buttons, DatePickers, Selects } from "../../../component";
import { FONTSTYLE } from "../../../component/font";
import {
  FileExcelOutlined,
  SyncOutlined,
  FilePdfOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setGlobalTitle } from "../../../store/global";
import {
  BASE_PATH_KARTU,
  BASE_PATH_PANUTAN,
  EXPENDITURE_APP,
  UNITPANUTAN,
  URL_PANUTAN,
  URL_SIAKUN,
} from "../../../config/api";
import axios from "axios";
import ribuan from "../../../utils/formatribu";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../utils/format_tgl_indo";
import moment from "moment";
import DokumenPdf from "./DokumenPdf";
import { formatRupiah } from "../../../utils/formatRP";

const BukuBantuBelanja = () => {
  const { Search } = Input;
  const { Option } = Select;
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [dataUnit, setDataUnit] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [isEditForm, setIsEditForm] = useState(false);
  const [isEditDone, setIsEditDone] = useState(false);
  const val = {};
  console.log("data", selectedUnit);
  const bulan = (new Date().getMonth() + 1).toString().padStart(2, "0");
  // ==================================================== //
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newdate = year + "-" + month + "-" + day;
  // ==================================================== //
  useEffect(() => {
    getUnit();
    dispatch(setGlobalTitle("Buku Bantu"));
  }, [dispatch]);

  const getUnit = () => {
    axios
      .get(URL_PANUTAN + BASE_PATH_PANUTAN.get_unit)
      .then((data) => {
        const response = data.data;
        console.log("unit", response);
        if (response?.length > 0) {
          setDataUnit(response);
        } else {
          notification.error({
            description: "Data Klasifikasi Tidak di temukan",
            key: 12,
          });
        }
      })
      .catch((err) => {
        notification.error({
          description: err,
          key: 14,
        });
      });
  };
  const cekJadwal = async (val) => {
    const data = {
      tanggal_awal: val.tanggal_awal,
      tanggal_akhir: val.tanggal_akhir,
      pengkelompokan: val.pengkelompokan,
      bulan: val.bulan,
      tahun: val.tahun,
      akun_coa: val.akun_coa,
      kode_unit: val.kode_unit,
    };

    const o = {
      url: URL_SIAKUN + BASE_PATH_KARTU.list_kartu_nocontra,
      data: data,
    };
    let loading = false;
    try {
      loading = true;
      const response = await axios.post(o.url, data);
      loading = false;
      return response.data;
    } catch (error) {
      loading = false;
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  // const pilunit = (value) => {
  //   setDataUnit(value);
  // };
  const pilunit = (value) => {
    setSelectedUnit(value);
  };
  const pilkategori = (value) => {
    setSelectedCategory(value);
  };

  const onChangeOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const onChangeDate = (date) => {
    setSelectedDate(date);
  };

  const onChangeMonth = (date) => {
    setSelectedMonth(date);
  };

  const onChangeYear = (date) => {
    setSelectedYear(date);
  };
  const handleResetClick = () => {
    // setData([]);
    // setDataUnit(null);
    // setSelectedCategory('');
    // setSelectedOption(null);
    // setSelectedDate(null);
    // setSelectedMonth(null);
    // setSelectedYear(null);
    window.location.reload();
  };

  const handleProsesClick = async () => {
    setIsLoading(true);
    let val = {
      tanggal_awal: "",
      tanggal_akhir: "",
      pengkelompokan: "",
      bulan: "",
      tahun: "",
      akun_coa: "",
      kode_unit: "",
    };
    console.log("ll", val);
    switch (selectedOption) {
      case 1:
        if (selectedDate && selectedDate.length === 2) {
          const [startDate, endDate] = selectedDate;
          val.tanggal_awal = moment(startDate).format("YYYY-MM-DD");
          val.tanggal_akhir = moment(endDate).format("YYYY-MM-DD");
          val.pengkelompokan = "tanggal";

          val.bulan = bulan.toString();
          val.tahun = year.toString();
        }
        break;
      case 2:
        val.tanggal_awal = selectedMonth.startOf("month").format("YYYY-MM-DD");
        val.tanggal_akhir = selectedMonth.endOf("month").format("YYYY-MM-DD");
        val.pengkelompokan = "bulan";
        val.bulan = selectedMonth.format("MM");
        val.tahun = year.toString();
        break;
      case 3:
        val.tanggal_awal = selectedYear.startOf("year").format("YYYY-MM-DD");
        val.tanggal_akhir = selectedYear.endOf("year").format("YYYY-MM-DD");
        val.pengkelompokan = "tahun";
        val.bulan = bulan.toString();
        val.tahun = selectedYear.format("YYYY");
        break;
      default:
        break;
    }

    val.akun_coa = selectedCategory;
    // val.kode_unit = dataUnit || "";
    val.kode_unit = selectedUnit;

    try {
      const data = await cekJadwal(val);
      // Handle the returned data as needed
      setData(data.data);
      setIsEditForm(false);
      setIsEditDone(true);
      console.log(data);
    } catch (error) {
      // Handle the error
      console.error(error);
    }finally {
      // Set the loading state to false after the API request is completed
      setIsLoading(false);
    }
  };

  const colomntrans = [
    {
      title: "No",
      dataIndex: "index",
      key: "index",
      width: 70,
      render: (_, record, index) => {
        return <p className="m-0">{index + 1}</p>;
      },
    },
    // {
    //   title: "Unit",
    //   dataIndex: "nama_unit",
    //   key: "nama_unit",
    // },
    {
      title: "Tanggal",
      dataIndex: "tanggal_transaksi",
      key: "tanggal_transaksi",
      width: 150,
      sorter: (a, b) =>
        new Date(a.tanggal_transaksi).getTime() -
        new Date(b.tanggal_transaksi).getTime(),
      render: (text, record) => <div>{formatDate(text)}</div>,
    },
    {
      title: " Keterangan ",
      dataIndex: "keterangan",
      key: "keterangan",
    },
    {
      title: "Debit",
      dataIndex: "penempatan",
      key: "Aktiva",
      align: "right",
      width: 200,
      render: (text, record, index) => {
        if (text === "AKTIVA") {
          return <div>{formatRupiah(record.nominal) + ",00"}</div>; // Display the "nominal" value if "penempatan" is "AKTIVA"
        } else {
          return ""; // Return null if "penempatan" is not "AKTIVA"
        }
      },
    },
    {
      title: "Kredit",
      dataIndex: "penempatan",
      key: "pasiva",
      align: "right",
      width: 200,
      render: (text, record, index) => {
        if (text === "PASIVA") {
          return <div>{formatRupiah(record.nominal) + ",00"}</div>; // Display the "nominal" value if "penempatan" is "AKTIVA"
        } else {
          return ""; // Return null if "penempatan" is not "AKTIVA"
        }
      },
    },
  ];
  return (
    <div className="p-5 bg-white rounded-lg">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          fontFamily: FONTSTYLE.PUBLICSANS,
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
        }}
      >
        <div>
          <h5
            style={{
              marginBottom: 4,
              fontWeight: "700",
              fontSize: 16,
              fontFamily: FONTSTYLE.PUBLICSANS,
            }}
          >
            Daftar Transaksi
          </h5>
        </div>
        <div className="flex gap-4">
          <DokumenPdf
            isEditDone={isEditDone}
            isEditForm={isEditForm}
            dataTable={data}
            dataUnit={dataUnit}
          />

          <Buttons
            disabled
            labelButton={"Unduh Excel"}
            backgroundColor={
              isEditDone === true && isEditForm === false
                ? "green"
                : "lightgray"
            }
            color={"white"}
            icon={<FileExcelOutlined />}
            borderColor="white"
            borderRadius={10}
            //   onClick={handleDownload}
            // onClick={() =>
            //   exportToExcel(postsptd?.data, fields, headers, columnWidths)

            // }
          />
          <Buttons
            labelButton={"Reset"}
            backgroundColor={"#FF0000"}
            borderColor="white"
            borderRadius={10}
            icon={<ReloadOutlined />}
            onClick={handleResetClick}
          />
          {/* Render your Ant Design table component */}
        </div>
      </div>
      <Divider />

      <div>
      <div
          className="grid grid-cols-1"
          style={{ fontFamily: FONTSTYLE.POPPINS }}
        >
          <label className="block mb-1 text-md font-bold">Pilih Unit:</label>
          <Selects
            style={{ width: 400 }}
            placeholder={"---Silahkan Pilih Unit---"}
            filterOption={(input, option) =>
              String(option.value)
                .toLowerCase()
                .indexOf(input.toLowerCase()) !== -1 ||
              option.children.toLowerCase().indexOf(input.toLowerCase()) !== -1
            }
            onChange={pilunit}
            value={selectedUnit}
            optionContent={
              <>
                <Option value="">---Silahkan Pilih Unit---</Option>
                {Array.isArray(dataUnit) &&
                  dataUnit.map((item) =>
                    item.kode_unit !== null ? (
                      <Option key={item.kode_unit} value={item.kode_unit}>
                        {item.nama_unit}
                      </Option>
                    ) : null
                  )}
              </>
            }
          />
        </div>
        <div
          className="grid grid-cols-1"
          style={{ fontFamily: FONTSTYLE.POPPINS }}
        >
          <label className="block mb-1 text-md font-bold">
            Pilih Kategori:
          </label>
          <Selects
            style={{ height: 200 }}
            marginBottom={10}
            filterOption={(input, option) =>
              String(option.value)
                .toLowerCase()
                .indexOf(input.toLowerCase()) !== -1 ||
              option.children.toLowerCase().indexOf(input.toLowerCase()) !== -1
            }
            onChange={pilkategori}
            placeholder={"---Silahkan Pilih Kategori---"}
            optionContent={
              <>
                <Option value={110101010100}>Buku Bantu Kas</Option>
                <Option value={5}>Buku Bantu Belanja</Option>
                <Option value={2102}>Buku Bantu Pajak</Option>
                <Option value={2}>Buku Bantu Hutang</Option>
              </>
            }
          />
        </div>
        
        <div
          className="grid grid-cols-1"
          style={{ fontFamily: FONTSTYLE.POPPINS }}
        >
          <label className="block mb-1 text-md font-bold">
            Pilih Berdasarkan:
          </label>
          <Radio.Group onChange={onChangeOption} value={selectedOption}>
            <Radio value={1}>Tanggal</Radio>
            <Radio value={2}>Bulan</Radio>
            <Radio value={3}>Tahun</Radio>
          </Radio.Group>

          {selectedOption === 1 ? (
            <div
              style={{
                display: "flex",
                marginRight: 10,
                marginTop: 2,
                fontFamily: FONTSTYLE.POPPINS,
              }}
            >
              <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">
                Filter Berdasarkan Tanggal:
              </label>
              <DatePicker.RangePicker
                format={"YYYY-MM-DD"}
                onChange={onChangeDate}
              />
              {isLoading ? (
                <Spin size="large" /> // Render the loading animation while isLoading is true
              ) : (
                <Buttons
                  labelButton={"Proses"}
                  borderColor={"#229CE1"}
                  backgroundColor={"#229CE1"}
                  color={"white"}
                  marginLeft={5}
                  icon={<SyncOutlined />}
                  onClick={handleProsesClick}
                />
              )}
            </div>
          ) : selectedOption === 2 ? (
            <div
              style={{
                display: "flex",
                marginRight: 10,
                marginBottom: 2,
                marginTop: 2,
                fontFamily: FONTSTYLE.POPPINS,
              }}
            >
              <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">
                Filter Berdasarkan Bulan:
              </label>
              <DatePicker
                picker={"month"}
                format={"MMMM"}
                onChange={onChangeMonth}
              />

              {/* <Buttons
                labelButton={"Proses"}
                borderColor={"#229CE1"}
                backgroundColor={"#229CE1"}
                color={"white"}
                marginLeft={5}
                icon={<SyncOutlined />}
                onClick={handleProsesClick}
              /> */}
              {isLoading ? (
                <Spin size="large" /> // Render the loading animation while isLoading is true
              ) : (
                <Buttons
                  labelButton={"Proses"}
                  borderColor={"#229CE1"}
                  backgroundColor={"#229CE1"}
                  color={"white"}
                  marginLeft={5}
                  icon={<SyncOutlined />}
                  onClick={handleProsesClick}
                />
              )}
            </div>
          ) : selectedOption === 3 ? (
            <div
              style={{
                display: "flex",
                marginRight: 10,
                marginBottom: 2,
                marginTop: 2,
                fontFamily: FONTSTYLE.POPPINS,
              }}
            >
              <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">
                Filter Berdasarkan Tahun:
              </label>
              <DatePicker
                picker={"year"}
                format={"YYYY"}
                onChange={onChangeYear}
              />

                {isLoading ? (
                  <Spin size="large" /> // Render the loading animation while isLoading is true
                ) : (
                  <Buttons
                    labelButton={"Proses"}
                    borderColor={"#229CE1"}
                    backgroundColor={"#229CE1"}
                    color={"white"}
                    marginLeft={5}
                    icon={<SyncOutlined />}
                    onClick={handleProsesClick}
                  />
                )}
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>

      <div
        style={{
          padding: 5,
          zIndex: 0,
          //overflowX: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: FONTSTYLE.POPPINS,
        }}
      >
        <Table
          dataSource={data}
          columns={colomntrans}
          bordered
          pagination={{ pageSize: 50 }}
          scroll={{ y: 2000 }}
        />
      </div>
    </div>
  );
};
export default BukuBantuBelanja;
