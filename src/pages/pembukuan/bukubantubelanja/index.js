
import { Table, Input, Radio, Select, DatePicker, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { Buttons, DatePickers, Selects } from "../../../component";
import { FONTSTYLE } from "../../../component/font";
import { SearchOutlined, FileExcelOutlined,SyncOutlined, FilePdfOutlined} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setGlobalTitle } from "../../../store/global";

const BukuBantuBelanja = () => {
    const { Search } = Input;
    const { Option } = Select;
    const [value, setValue] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setGlobalTitle("Buku Bantu Kas"));
      }, [dispatch]);

      const onChange2 = (e) => {
        setValue(e.target.value);
      };
    const colomntrans = [
      {
        title: "No",
        dataIndex: "no",
        key: "no",
        width: 30,
      },
        {
          title: "Tanggal",
          dataIndex: "tanggal_transaksi",
          key: "tanggal_transaksi",
        //   render: (text, record, index) => {
        //     return (
        //       <Space direction="vertical" size={0}>
        //         <p>
        //           {" "}
        //           <Button
        //             style={{ fontSize: 18 }}
        //             type="link"
        //             onClick={() => {
        //               dispatch(jurnalByKode(record.kode_transaksi));
        //               dispatch(jurnalByKodeRealisasi(record.realisasi));
        //               dispatch(fetchKodeSurat(record.kode_surat))
        //               setTimeout(() => {
        //                 navigate("detailtrxjurnal/" + record.kode_surat);
        //               }, 3000);
                   
                      
        //             }}
        //           >
        //             <b>
        //               {record.kode_transaksi} | {formatDate(text)} 
        //             </b>
        //           </Button>
        //         </p>
        //         <p> <b>  ( {record.keterangan} ) </b> </p>
        //         <p className="tracking-wide">
        //           {" "}
        //           <Tag style={{ fontSize: 16, padding: 5, margin: 5 }} color="blue">
        //             {" "}
        //             {record.akun_aktiva}{" "}
        //           </Tag>{" "}
        //           {record.jurnal_aktiva}{" "}
        //         </p>
        //         <p className="tracking-wide">
        //           {" "}
        //           <Tag
        //             style={{ fontSize: 16, padding: 5, margin: 5 }}
        //             color="green"
        //           >
        //             {" "}
        //             {record.akun_pasiva}{" "}
        //           </Tag>{" "}
        //           {record.jurnal_pasiva}{" "}
        //         </p>
        //       </Space>
        //     );
        //   },
        },
        // {
        //   title: "Kode - Keterangan Transaksi",
        //   dataIndex: "kode_transaksi",
        //   key: "kode_transaksi",
        //   render: (text, record, index) => {
        //     return (
        //       <Space direction="vertical" size={0}>
        //         <p>
        //           {" "}
        //           <b>
        //             {" "}
        //             {text} - {record.keterangan}{" "}
        //           </b>{" "}
        //         </p>
        //         <Tag color="blue">
        //           {" "}
        //           <a
        //             href="#/"
        //             onClick={() => {
        //               navigate("detailtrxjurnal/");
        //             }}
        //           >
        //             {" "}
        //             Lihat Detail{" "}
        //           </a>{" "}
        //         </Tag>
        //         <p> &nbsp; </p>
        //       </Space>
        //     );
        //   },
        // },
        {
            title: "Keterangan",
            dataIndex: "keterangan",
            key: "keterangan",
        },
    
        {
          title: "Debit",
          dataIndex: "Aktiva",
          key: "Aktiva",
          align: "right",
        //   render: (text, record, index) => {
        //     return (
        //       <Space direction="vertical" size={0}>
        //         <p> &nbsp; </p>
        //         <p> &nbsp; </p>
        //         <p> {ribuan(text)} </p>
        //         <p> {ribuan(0)} </p>
        //       </Space>
        //     );
        //   },
        },
        {
          title: "Kredit",
          dataIndex: "Pasiva",
          key: "Pasiva",
          align: "right",
        //   render: (text, record, index) => {
        //     return (
        //       <Space direction="vertical" size={0}>
        //         <p> &nbsp; </p>
        //         <p> &nbsp; </p>
        //         <p> {ribuan(0)} </p>
        //         <p> {ribuan(text)} </p>
        //       </Space>
        //     );
        //   },
        },
        {
            title: "Saldo",
            dataIndex: "saldo",
            key: "saldo",
            align:"right"
        }
      ];
      const pilkategori = (val) => {
        // setdataPostSPTDTanggalJenis({
        //   // ...dataPostSPTDTanggalJenis,
        //   // jenis_surat: val,
        // });
      };
  return (
    <div className="p-5 bg-white rounded-lg">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          fontFamily: FONTSTYLE.PUBLICSANS,
        }}
      >
    </div>
    <div style={{display: "flex",justifyContent: "space-between",position: "sticky",}}>
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
          <Buttons
            labelButton={"Unduh PDF"}
            backgroundColor={"maroon"}
            color={"white"}
            icon={<FilePdfOutlined />}
            borderColor="white"
            borderRadius={10}
            //   onClick={handleDownload}
            // onClick={() =>
            //   exportToExcel(postsptd?.data, fields, headers, columnWidths)

            // }
          />
          <Buttons
            labelButton={"Unduh Excel"}
            backgroundColor={"green"}
            color={"white"}
            icon={<FileExcelOutlined />}
            borderColor="white"
            borderRadius={10}
            //   onClick={handleDownload}
            // onClick={() =>
            //   exportToExcel(postsptd?.data, fields, headers, columnWidths)

            // }
          />
            {/* Render your Ant Design table component */}
        </div>
    </div>
    <Divider/>
    <div className="grid grid-cols-1 " style={{ fontFamily: FONTSTYLE.POPPINS }}>
      <label className="block mb-1 text-md font-bold">
        Pilih Kategori :
      </label>
        <Selects
          style={{ height: 200 }}
          marginBottom={10}
          //onSearch={onSearch}
          filterOption={(input, option) =>
          option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0 || option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          onChange={pilkategori}
          //value={pilihanprov}
          placeholder={"---Silahkan Pilih Kategori---"}
          optionContent={
            <>
              <Option value={"kas"}> Buku Bantu Kas </Option>
              <Option value={"belanja"}> Buku Bantu Belanja</Option>
              <Option value={"pajak"}> Buku Bantu Pajak </Option>
              <Option value={"hutang"}> Buku Bantu Hutang </Option>
            </>
          }
        />
    </div>
    <div className="grid grid-cols-1 " style={{ fontFamily: FONTSTYLE.POPPINS }}>
      <label className="block mb-1 text-md font-bold">
        Pilih Berdasarkan :
      </label>
      <Radio.Group onChange={onChange2} value={value} >
        <Radio value={1}>  Tanggal </Radio>
        <Radio value={2}>  Bulan </Radio>
        <Radio value={3}>  Tahun </Radio>
      </Radio.Group>
        {value === 1 ? (
          <div style={{ display: "flex", marginRight: 10, marginTop:2, fontFamily: FONTSTYLE.POPPINS}}>
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">
              Filter Berdasarkan Tanggal :
            </label>
            <DatePickers
              picker={"date"}
              format={"YYYY-MM-DD"}
              // onChange={onChange}
            />
            <Buttons
              labelButton={"Proses"}
              borderColor={"#229CE1"}
              backgroundColor={"#229CE1"}
              color={"white"}
              marginLeft={5}
              icon={<SyncOutlined />}
              // onClick={() => {
              //   dispatch(postSPTDall(dataPostSPTDTanggal));
              // }}
            />
            </div>
        ) : value === 2 ? (
          <div style={{display: "flex",marginRight: 10,marginBottom:2,marginTop:2,fontFamily: FONTSTYLE.POPPINS }}>
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">
              Filter Berdasarkan Bulan :
            </label>
            <DatePicker
              picker={"month"}
              format={"MMMM"}
              //   onChange={onChange}
            />
            <Buttons
              labelButton={"Proses"}
              borderColor={"#229CE1"}
              backgroundColor={"#229CE1"}
              color={"white"}
              marginLeft={5}
              icon={<SyncOutlined />}
              //   onClick={() => {
              //     dispatch(postSPTDUnit(dataPostSPTDTanggalUnit));
              //   }}
            />
          </div>
        ) : value === 3 ? (
          <div style={{display: "flex", marginRight: 10, marginBottom:2, marginTop:2, fontFamily: FONTSTYLE.POPPINS, }}>
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-5">
              Filter Berdasarkan Tahun :
            </label>
            <DatePicker
              picker={"year"}
              format={"YYYY"}
              //   onChange={onChange}
            />
            <Buttons
              labelButton={"Proses"}
              borderColor={"#229CE1"}
              backgroundColor={"#229CE1"}
              color={"white"}
              marginLeft={5}
              icon={<SyncOutlined />}
              //   onClick={() => {
              //     dispatch(postSPTDJenis(dataPostSPTDTanggalJenis));
              //   }}
            />
          </div>
        ) : (
            <p> </p>
        )}
        
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
        // dataSource={filterjurnal}
        columns={colomntrans}
        // pagination={{
        //   defaultPageSize: 25,
        //   showSizeChanger: true,
        //   pageSizeOptions: ["25", "50", "75"],
        // }}
        // rowKey={"kode_transaksi"}
        // summary={() => {
        //   let totalAktiva = 0;
        //   let totalPasiva = 0;

        //   let total = [];
        //   for (let a = 0; a < filterjurnal?.length; a++) {
        //     let aktiva1 = filterjurnal[a]?.Aktiva;
        //     let pasiva1 = filterjurnal[a]?.Pasiva;
        //     total.push({
        //       aktiva: aktiva1,
        //       pasiva: pasiva1,
        //     });
        //   }

        //   total.forEach(({ aktiva }) => {
        //     totalAktiva += parseInt(aktiva);
        //   });
        //   total.forEach(({ pasiva }) => {
        //     totalPasiva += parseInt(pasiva);
        //   });

        //   return (
        //     <>
        //       <Table.Summary.Row>
        //         <Table.Summary.Cell colSpan={1}>
        //           {/* <b> Total {filterjurnal?.length} Transaksi </b> */}
        //         </Table.Summary.Cell>
        //         {/* <Table.Summary.Cell align="right">
        //           <b> {ribuan(totalAktiva)} </b>
        //         </Table.Summary.Cell>
        //         <Table.Summary.Cell align="right">
        //           <b> {ribuan(totalPasiva)} </b>
        //         </Table.Summary.Cell> */}
        //       </Table.Summary.Row>
        //     </>
        //   );
        // }}
      />
    </div>
  </div>
)
}
export default BukuBantuBelanja
