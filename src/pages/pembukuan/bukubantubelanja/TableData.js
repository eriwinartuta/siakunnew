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

                <td>
                  {
                    <p>
                      {res?.keterangan}&nbsp; - &nbsp;[{res?.nomor_surat}]
                      &nbsp;&nbsp;-&nbsp;&nbsp;{res?.perihal}
                    </p>
                  }
                </td>
                <td>{formatRupiah(res?.debit)}</td>
                <td>{formatRupiah(res?.kredit)}</td>

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
