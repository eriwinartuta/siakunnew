import React from "react";
import { formatRupiah } from "../../../utils/formatRP";

function TableData({ id, dataTable }) {
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
          {dataTable.map((res, index) => {
            return (
              <tr>
                <td>{index + 1}</td>

                <td>{res?.tanggal_transaksi}</td>
                <td>{res?.keterangan}</td>
                <td>
                  {res?.penempatan === "AKTIVA" ? (
                    <div>{formatRupiah(res?.nominal) + ",00"}</div>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {res?.penempatan === "PASIVA" ? (
                    <div>{formatRupiah(res?.nominal) + ",00"}</div>
                  ) : (
                    ""
                  )}
                </td>

                {/* <td></td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TableData;
