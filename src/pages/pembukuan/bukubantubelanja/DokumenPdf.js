import jsPDF from "jspdf";
import React from "react";
import { Buttons } from "../../../component";
import "jspdf-autotable";
import TableData from "./TableData";
import { FilePdfOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

import moment from "moment";
import "moment/locale/id";
moment.locale("id");

function konversiBulanKeTeks(bulan) {
  var namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return namaBulan[bulan - 1];
}

function DokumenPdf({ dataTable, isEditDone, isEditForm, pdfData }) {
  const data = {
    lembaga: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    organisasi: "Universitas Terbuka",
    provinsi: "Banten/Tangerang Selatan",
    satuankerja: "Universitas Terbuka /" + dataTable[0]?.nama_unit,
    coa: pdfData?.akun_coa,
    tahunanggaran: pdfData?.tahun,
    bulan: konversiBulanKeTeks(pdfData?.bulan),
  };

  const generatePdf = () => {
    const unit = "pt";
    const size = "a4";
    const doc = new jsPDF("p", unit, size, true);
    const title0 = "BUKU BANTU ";

    doc.setFontSize(14);
    doc.setFont(undefined, "bold");
    doc.text(title0, 305, 30, null, null, "center");

    doc.autoTable({
      html: "#tableheader",
      margin: {
        top: 70,
        bottom: 50,
      },
      bodyStyles: {
        fontSize: 10,
      },
    });
    doc.autoTable({
      html: "#tablepetugas",
      margin: {
        top: 120,
        bottom: 230,
      },
      headStyles: {
        valign: "middle",
        halign: "center",
        // cellWidth: "wrap",
        fontSize: 10,
        lineWidth: 1,
        fillColor: [255, 255, 255, 255],
        textColor: 20,
        minCellWidth: 1,
      },
      bodyStyles: {
        lineWidth: 1,
        cellPadding: 7,
        fontSize: 8,
        halign: "center",
        cellWidth: "auto",
      },
      columnStyles: {
        1: { halign: "center" },
        2: { halign: "left" },

        3: { halign: "right", cellWidth: "wrap" },
        4: { halign: "right", cellWidth: "wrap" },
      },
    });

    // Text TTD PPK
    // const text = "Mengetahui ";
    // const x = 45; // X-coordinate
    // const y = doc.autoTable.previous.finalY + 70; // Y-coordinate
    // const fontSize = 10;
    // const fontWeight = "normal";
    // doc.setFontSize(fontSize);
    // doc.setFont(undefined, fontWeight); // Set font style to bold
    // doc.text(text, x, y);

    // const unitppk = "Koordinator " + data.unit;
    // const unitppkx = 45; // Koordinat X
    // const unitppky = doc.autoTable.previous.finalY + 85; // Koordinat Y
    // const fontSizeunit = 10;
    // const fontWeightunit = "normal";
    // const wordsPerLine = 3;
    // const lines1 = [];
    // const ppkwords = unitppk.split(" "); // Memisahkan teks berdasarkan spasi

    // let ppkline = "";
    // let ppkwordCount = 0;
    // ppkwords.forEach((word) => {
    //   if (ppkwordCount < wordsPerLine) {
    //     ppkline += word + " ";
    //     ppkwordCount++;
    //   } else {
    //     lines1.push(ppkline.trim());
    //     ppkline = word + " ";
    //     ppkwordCount = 1;
    //   }
    // });

    // if (ppkline.trim().length > 0) {
    //   lines1.push(ppkline.trim());
    // }

    // doc.setFontSize(fontSizeunit);
    // doc.setFont(undefined, fontWeightunit);
    // lines1.forEach((ppkline, index) => {
    //   const offsetY = index * fontSizeunit;
    //   doc.text(ppkline, unitppkx, unitppky + offsetY);
    // });

    // const ttd = "nama_penandatangan";
    // const ttdx = 45; // X-coordinate
    // const ttdy = doc.autoTable.previous.finalY + 170; // Y-coordinate
    // const ttdfontSizeunit = 10;
    // const ttdfontWeightunit = "normal";
    // const ttdcharactersPerLine = 30;
    // const ttdlines1 = [];
    // for (let i = 0; i < ttd; i += ttdcharactersPerLine) {
    //   ttdlines1.push(ttd.substr(i, ttdcharactersPerLine));
    // }
    // doc.setFontSize(ttdfontSizeunit);
    // doc.setFont(undefined, ttdfontWeightunit);
    // ttdlines1.forEach((line, index) => {
    //   const offsetY = index * ttdfontSizeunit;
    //   doc.text(line, ttdx, ttdy + offsetY);
    // });

    // const nipMarginTop = 5;
    // const nip = "NIP" + data.nip_penandatangan;
    // const x3 = 45; // X-coordinate
    // const y3 = ttdy + ttdlines1.length * ttdfontSizeunit + nipMarginTop; // Y-coordinate with spacing
    // const fontSize3 = 9;
    // const fontWeight3 = "normal";
    // doc.setFontSize(fontSize3);
    // doc.setFont(undefined, fontWeight3);
    // doc.text(nip, x3, y3);

    // // Text TTD Yg membayarkan
    // const usertext1 = "BPP";
    // const userx1 = 430; // X-coordinate
    // const usery1 = doc.autoTable.previous.finalY + 85; // Y-coordinate
    // const userfontSize1 = 10;
    // const userfontWeight1 = "normal";
    // doc.setFontSize(userfontSize1);
    // doc.setFont(undefined, userfontWeight1); // Set font style to bold
    // doc.text(usertext1, userx1, usery1);

    // const userttd = "nama bpp";
    // const userttdx = 430; // X-coordinate
    // const userttdy = doc.autoTable.previous.finalY + 170; // Y-coordinate
    // const userttdfontSizeunit = 10;
    // const userttdfontWeightunit = "normal";
    // const userttdcharactersPerLine = 30;
    // const userttdlines1 = [];
    // for (let i = 0; i < userttd; i += userttdcharactersPerLine) {
    //   userttdlines1.push(userttd.substr(i, userttdcharactersPerLine));
    // }
    // doc.setFontSize(userttdfontSizeunit);
    // doc.setFont(undefined, userttdfontWeightunit);
    // userttdlines1.forEach((line, index) => {
    //   const offsetY = index * userttdfontSizeunit;
    //   doc.text(line, userttdx, userttdy + offsetY);
    // });

    // const usernipMarginTop = 5;
    // const usernip = "NIP" + data.nip_pembuat;
    // const userx3 = 430; // X-coordinate
    // const usery3 =
    //   userttdy + userttdlines1.length * userttdfontSizeunit + usernipMarginTop; // Y-coordinate with spacing
    // const userfontSize3 = 9;
    // const userfontWeight3 = "normal";
    // doc.setFontSize(userfontSize3);
    // doc.setFont(undefined, userfontWeight3);
    // doc.text(usernip, userx3, usery3);

    const pageCount = doc.internal.getNumberOfPages();
    const pd = doc.output("bloburl");
    window.open(pd);
  };
  return (
    <div>
      <div style={{ display: "none" }}>
        <table id="tableheader">
          <tbody>
            <tr>
              <td>Departemen/Lembaga</td>
              <td>:</td>
              <td>{data.lembaga}</td>
            </tr>
            <tr>
              <td>Unit/Organisasi</td>
              <td>:</td>
              <td>{data.organisasi}</td>
            </tr>
            <tr>
              <td>Provinsi/Kab/Kota</td>
              <td>:</td>
              <td>{data.provinsi}</td>
            </tr>
            <tr>
              <td>Satuan Kerja</td>
              <td>:</td>
              <td>{data.satuankerja}</td>
            </tr>
            <tr>
              <td>COA</td>
              <td>:</td>
              <td>{data.coa}</td>
            </tr>
            <tr>
              <td>Tahun Anggaran</td>
              <td>:</td>
              <td>{data.tahunanggaran}</td>
            </tr>
            <tr>
              <td>Bulan</td>
              <td>:</td>
              <td>{data.bulan}</td>
            </tr>
          </tbody>
        </table>

        <TableData id="tablepetugas" dataTable={dataTable} />
      </div>
      <Tooltip title="Klik Untuk Unduh PDF">
        <Buttons
          disable={isEditDone === true && isEditForm === false ? false : true}
          backgroundColor={
            isEditDone === true && isEditForm === false ? "maroon" : "lightgray"
          }
          labelButton={"Unduh PDF"}
          color={"white"}
          icon={<FilePdfOutlined />}
          borderColor="white"
          borderRadius={10}
          onClick={() => {
            generatePdf();
          }}
        />
      </Tooltip>
    </div>
  );
}

export default DokumenPdf;
