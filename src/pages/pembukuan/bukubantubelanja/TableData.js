import React from "react";
// import { formatRupiah } from "../../../utils";

function TableData({ id, data }) {
  return (
    <>
      <table id={id}>
        <thead>
          <tr>
            <td>No</td>
            <td>Tanggal</td>
            <td>Keterangan</td>
            <td>Debit</td>
            <td>Kredit</td>
          </tr>
        </thead>
        <tbody>
          {(res, index) => {
            console.log("dataHtml", data);
            return (
              <tr>
                <td rowSpan={res?.detail.length}>{index + 1}</td>
                <td rowSpan={res?.detail.length}>{res?.tanggal_transaksi}</td>
                <td rowSpan={res?.detail.length}>{res?.judul}</td>

                {/* <td></td> */}
              </tr>
            );
          }}
        </tbody>
      </table>
    </>
  );
}

export default TableData;
