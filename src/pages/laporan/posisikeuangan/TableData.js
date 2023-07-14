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
        <tbody>
          {dataTable.map((res, index) => {
            return (
              <tr>
                <td>{res?.keterangan}</td>

                <td>{formatRupiah(res?.nominal_tahun_sesudah)}</td>
                <td>{formatRupiah(res?.nominal_tahun_sebelum)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TableData;
