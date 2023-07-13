import React from "react";
import { formatRupiah } from "../../../utils/formatRP";

function TableData({ id, dataTable }) {
  return (
    <>
      <table id={id}>
        <thead>
          <tr>
            <td>Keterangan</td>
            <td>Tahun Sekarang</td>
            <td>Tahun Sebelum</td>
          </tr>
        </thead>
      </table>
      <tbody>
        {dataTable.map((res, index) => {
          return (
            <tr>
              <td>{index + 1}</td>

              <td>{res?.keterangan}</td>
              <td>{res?.nominal_tahun_sesudah}</td>
              <td>{res?.nominal_tahun_sebelum}</td>

              {/* <td></td> */}
            </tr>
          );
        })}
      </tbody>
    </>
  );
}

export default TableData;
