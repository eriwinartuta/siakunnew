import {
    Table,
    Input,
    Radio,
    Select,
    DatePicker,
    Divider,
    notification, Spin, Tag
  } from "antd";
  import React, { useEffect, useState } from "react";
  import { Buttons, Selects } from "../../../component";
  import { FONTSTYLE } from "../../../component/font";
  import {
    FileExcelOutlined,
    SyncOutlined,
    FilePdfOutlined,
    ReloadOutlined,
  } from "@ant-design/icons";
  import { useDispatch, useSelector } from "react-redux";
  import { setGlobalTitle } from "../../../store/global";
  import {
    BASE_PATH_KARTU,
    URL_SIAKUN,
  } from "../../../config/api";
  import axios from "axios";
  import { formatDate } from "../../../utils/format_tgl_indo";
  import moment from "moment";
  import DokumenPdf from "./DokumenPdf";
  import { formatRupiah } from "../../../utils/formatRP";
  
  const IndexUnit = () => {
    const { Option } = Select;
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const {user } = useSelector((state) => state.reducerGlobal)
    const [isLoading, setIsLoading] = useState(false);
    const [dataCoa, setDataCoa] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [isEditForm, setIsEditForm] = useState(false);
    const [isEditDone, setIsEditDone] = useState(false);
    const [searchText, setSearchText] = useState("");

    console.log("==========================");
    console.log("user", user.data.TrxUnitKerjaPegawais[0]?.Unit?.UnitBaru?.kode_unit);
    console.log("data", dataCoa);
    console.log("=========================");
    const kode_unit = user.data.TrxUnitKerjaPegawais[0]?.Unit?.UnitBaru?.kode_unit
    // ==================================================== //
    const bulan = (new Date().getMonth() + 1).toString().padStart(2, "0");
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = year + "-" + month + "-" + day;
    // ==================================================== //
    useEffect(() => {
      getCoA();
      dispatch(setGlobalTitle("Buku Bantu"));
    }, [dispatch]);
  
    const getCoA = () => {
      axios
        .get(URL_SIAKUN + BASE_PATH_KARTU.get_coa + kode_unit)
        .then((data) => {
          const response = data.data.data;
          console.log("unit", response);
          if (response?.length > 0) {
            setDataCoa(response);
          } else {
            notification.error({
              description: "Data CoA Tidak di temukan",
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
        url: URL_SIAKUN + BASE_PATH_KARTU.list_kartu,
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
      val.kode_unit = kode_unit;
  
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
  
    // const colomntrans = [
    //   {
    //     title: "No",
    //     dataIndex: "index",
    //     key: "index",
    //     width: 70,
    //     render: (_, record, index) => {
    //       return <p className="m-0">{index + 1}</p>;
    //     },
    //   },
    //   {
    //     title: "Tanggal",
    //     dataIndex: "tanggal_transaksi",
    //     key: "tanggal_transaksi",
    //     width: 150,
    //     sorter: (a, b) =>
    //       new Date(a.tanggal_transaksi).getTime() -
    //       new Date(b.tanggal_transaksi).getTime(),
    //     render: (text, record) => <div>{formatDate(text)}</div>,
    //   },
    //   {
    //     title: " Keterangan ",
    //     dataIndex: "keterangan",
    //     key: "keterangan",
    //   },
    //   {
    //     title: "Debit",
    //     dataIndex: "penempatan",
    //     key: "Aktiva",
    //     align: "right",
    //     width: 200,
    //     render: (text, record, index) => {
    //       if (text === "AKTIVA") {
    //         return <div>{formatRupiah(record.nominal) + ",00"}</div>; 
    //       } else {
    //         return ""; 
    //       }
    //     },
    //   },
    //   {
    //     title: "Kredit",
    //     dataIndex: "penempatan",
    //     key: "pasiva",
    //     align: "right",
    //     width: 200,
    //     render: (text, record, index) => {
    //       if (text === "PASIVA") {
    //         return <div>{formatRupiah(record.nominal) + ",00"}</div>;
    //       } else {
    //         return "";
    //       }
    //     },
    //   },
    // ];
    const colomntrans = [
      {
        title: "No",
        key: "no",
  
        dataIndex: "index",
        key: "index",
        width: 70,
        render: (_, record, index) => {
          return <p className="m-0">{index + 1}</p>;
        },
      },
      // {
      //   title: "Kode Unit",
      //   dataIndex: "kode_unit",
      //   key: "kode_unit",
      //   width: 150,
      //   style: selectedUnit !== "ALL" ? {} : { display: "none" },
      //   render: (text, record) => <div>{text}</div>,
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
        render: (text, record,index) =>{
          return(
            <div>
              <p>{text}&nbsp; - &nbsp;<Tag color="#2db7f5">[{record.nomor_surat}]</Tag>&nbsp;&nbsp;-&nbsp;&nbsp;{record.perihal}</p>
            </div>
          )
        }
      },
      {
        title: "Debit",
        dataIndex: "debit",
        key: "debit",
        align: "right",
        width: 200,
        render: (text, record, index) => {
          return(
            formatRupiah(text)
          )
          
        }
        // render: (text, record, index) => {
        //   if (text === "AKTIVA") {
        //     return <div>{formatRupiah(record.nominal) + ",00"}</div>;
        //   } else {
        //     return "";
        //   }
        // },
      },
      {
        title: "Kredit",
        dataIndex: "kredit",
        key: "kredit",
        align: "right",
        width: 200,
        render: (text, record, index) => {
          return(
            formatRupiah(text)
          )
        }
        // render: (text, record, index) => {
        //   if (text === "PASIVA") {
        //     return <div>{formatRupiah(record.nominal) + ",00"}</div>;
        //   } else {
        //     return "";
        //   }
        // },
      },
      // 
      // {
      //   title: "Debit",
      //   dataIndex: "penempatan",
      //   key: "Aktiva",
      //   align: "right",
      //   width: 200,
      //   render: (text, record, index) => {
      //     if (text === "AKTIVA") {
      //       return <div>{formatRupiah(record.nominal) + ",00"}</div>;
      //     } else {
      //       return "";
      //     }
      //   },
      // },
      // {
      //   title: "Kredit",
      //   dataIndex: "penempatan",
      //   key: "pasiva",
      //   align: "right",
      //   width: 200,
      //   render: (text, record, index) => {
      //     if (text === "PASIVA") {
      //       return <div>{formatRupiah(record.nominal) + ",00"}</div>;
      //     } else {
      //       return "";
      //     }
      //   },
      // },
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
              dataUnit={dataCoa}
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
            <label className="block mb-1 text-md font-bold">
              Pilih Kategori:
            </label>
            <Selects
              style={{ height: 200 }}
              marginBottom={10}
              filterOption={(input, option) => {
                const optionValue = option.props.value || "";
                const optionChildren = option.props.children || "";
                const inputValue = input.toLowerCase();
            
                return (
                  optionValue.toLowerCase().includes(inputValue) ||
                  optionChildren.toString().toLowerCase().includes(inputValue)
                );
              }}
              onChange={pilkategori}
              value={selectedCategory}
              placeholder={"---Silahkan Pilih Chart of Account (CoA)---"}
              optionContent={
                <>
                  
                  {Array.isArray(dataCoa) &&
                    dataCoa.map((item) =>
                      item.akun_coa !== null ? (
                        <Option key={item.akun_coa} value={item.akun_coa}>
                          {item.keterangan}&nbsp;{item.akun_coa}
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
              Pilih Berdasarkan:
            </label>
            <Radio.Group onChange={onChangeOption} value={selectedOption} disabled={!selectedCategory}>
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
                <Buttons
                  labelButton={"Proses"}
                  borderColor={"#229CE1"}
                  backgroundColor={"#229CE1"}
                  color={"white"}
                  marginLeft={5}
                  icon={<SyncOutlined />}
                  onClick={handleProsesClick}
                />
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
  
                {isLoading ? (
                  <Spin size="large" />
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
                    <Spin size="large" />
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
        <Divider/>
        <div>
          <label className="block mb-1 text-md font-bold">
            Cari Data:
          </label>
          <Input
            style={{ marginBottom: 16, marginTop:2 }}
            placeholder="Search..."
            value={searchText}
            disabled={!data || data.length === 0}
            onChange={(e) => setSearchText(e.target.value)}
          />
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
            dataSource={data.filter((item) => {
              const formattedSearchText = searchText.toLowerCase();
            
              // Filter based on searchText
              const searchMatch = Object.values(item).some((value) => {
                const formattedValue = (value ?? "").toString().toLowerCase();
                return formattedValue.includes(formattedSearchText);
              });
            
              if (searchMatch) return true;
            
              // Filter based on specific date
              const searchDate = moment(searchText, "D MMMM", true);
              if (searchDate.isValid()) {
                const itemDate = moment(item.tanggal_transaksi, "YYYY-MM-DD");
                return itemDate.format("D MMMM") === searchDate.format("D MMMM");
              }
            
              return false;
            })}
            columns={colomntrans}
            bordered
            pagination={{ pageSize: 50 }}
            scroll={{ y: 2000 }}
          />
        </div>
      </div>
    );
  };
  export default IndexUnit;
  