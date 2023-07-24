import React, { useState } from "react";
import * as FileSaver from "file-saver";
import { Buttons } from "../../../../component";
import {
  ExclamationCircleOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import { Modal, Tooltip } from "antd";

const ExcelCreate = ({
  dataTable,
  tableDataPegawai,
  isEditDone,
  isEditForm,
}) => {
  const [listBank, setListBank] = useState();

  const getListBank = () => {
    const listDataPegawaiBank = dataTable.map((e) => {
      return e.nama_bank.toUpperCase();
    });
    setListBank([...new Set(listDataPegawaiBank)]);
  };
  console.log({ tableDataPegawai });
  async function cetakExcel() {
    const ExcelJS = require("exceljs");
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    const workbook = new ExcelJS.Workbook();
    const wsDataPegawai = workbook.addWorksheet("sheet1", {
      pageSetup: { paperSize: 9, orientation: "potrait" },
    });
    const filterDataTable = tableDataPegawai.filter((e) => {
      return e.title !== "No" && e.title !== "Unit";
    });
    const finalDataTable = [{ key: "no" }, ...filterDataTable];
    const colWidth = (val) => {
      switch (val) {
        case "no":
          return 5;
        case "tanggal_transaksi":
          return 20;
        case "keterangan":
          return 20;
        case "debit":
          return 20;
        case "kredit":
          return 25;
      }
    };
    const dataKolom = finalDataTable.map((e) => {
      let a = {
        key: e.key,
        width: colWidth(e.key),
      };
      return a;
    });
    wsDataPegawai.columns = dataKolom;
    console.log("datakolom", dataKolom);
    const headerCol = [
      {
        no: "No",
        tanggal_transaksi: "Tanggal Transaksi",
        keterangan: "Keterangan",
        debit: "Debit",
        kredit: "Kredit",
      },
    ];
    headerCol.forEach((item, i) => {
      wsDataPegawai.addRow(item);
    });

    const rowSizeDP = wsDataPegawai.lastColumn.number;
    const numToAlpha = (e) => {
      switch (e) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
        case 4:
          return "E";
        case 5:
          return "F";
        case 6:
          return "G";
        case 7:
          return "H";
        case 8:
          return "I";
        case 9:
          return "J";
        case 10:
          return "K";
        case 11:
          return "L";
        case 12:
          return "M";
        case 13:
          return "N";
        case 14:
          return "O";
        case 15:
          return "P";
        case 16:
          return "Q";
        case 17:
          return "R";
        case 18:
          return "S";
        case 19:
          return "T";
        case 20:
          return "U";
        case 21:
          return "V";
        case 22:
          return "W";
        case 23:
          return "X";
        case 24:
          return "Y";
        case 25:
          return "Z";
        default:
          return "AA";
      }
    };
    //styling header
    for (let i = 0; i < rowSizeDP; i++) {
      let alp = numToAlpha(i);
      wsDataPegawai.getCell(`${alp}1`).fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFE699" },
      };
      wsDataPegawai.getCell(`${alp}1`).border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
      wsDataPegawai.getCell(`${alp}1`).font = {
        name: "Calibri Bold",
      };
    }

    const headerRow = dataTable.map((e, i) => {
      let d = {
        no: i + 1,
        tanggal_transaksi: e.tanggal_transaksi,
        keterangan: e.keterangan + e.nomor_surat + e.perihal,
        debit: e.debit,
        kredit: e.kredit,
      };
      return d;
    });
    console.log("dataheader", dataTable);
    headerRow.forEach((item, i) => {
      wsDataPegawai.addRow(item);
    });

    wsDataPegawai.eachRow(function (row, rowNumber) {
      row.eachCell((cell) => {
        cell.alignment = {
          vertical: "middle",
          horizontal: "center",
          wrapText: true,
        };
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });
    wsDataPegawai.getColumn("debit").numFmt = "Rp#,##0.00;[Red]-Rp#,##0.00";
    wsDataPegawai.getColumn("kredit").numFmt = "Rp#,##0.00;[Red]-Rp#,##0.00";

    await workbook.xlsx
      .writeBuffer()
      .then((data) => {
        const blob = new Blob([data], { type: fileType });
        FileSaver.saveAs(blob, `Daftar Buku Bantu.xlsx`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <Tooltip title="Cetak Dokumen Excel">
      <Buttons
        disable={isEditDone === true && isEditForm === false ? false : true}
        labelButton={"Unduh Excel"}
        backgroundColor={
          isEditDone === true && isEditForm === false ? "green" : "lightgray"
        }
        color={"white"}
        icon={<FileExcelOutlined />}
        borderColor="white"
        borderRadius={10}
        onClick={() => cetakExcel()}
      />
    </Tooltip>
  );
};

export default ExcelCreate;
