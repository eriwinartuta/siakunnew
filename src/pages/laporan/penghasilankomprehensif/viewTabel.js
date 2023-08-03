// import React from 'react';
// import DataTable from './DataTable';

// const PenghasilanKomprehensif = () => {
//     const dataSource = {
//         "data": [
//           {
//             "Tanpa Pembatasan dari Pemberi Sumber Daya": [
//               {
//                 "Pendapatan": [
//                   {
//                     "name": "Dana hibah",
//                     "sebelum": "100000",
//                     "setelah": "100000"
//                   },
//                   {
//                     "name": "Jasa Layanan",
//                     "sebelum": "100000",
//                     "setelah": "100000"
//                   },
//                   {
//                     "name": "Penghasilan investasi jangka Panjang",
//                     "sebelum": "100000",
//                     "setelah": "100000"
//                   },
//                   {
//                     "name": "Penghasilan investasi jangka pendek",
//                     "sebelum": "100000",
//                     "setelah": "100000"
//                   },
//                   {
//                     "name": "Lain-lain",
//                     "sebelum": "100000",
//                     "setelah": "100000"
//                   }
//                 ],
//                 "Beban": [
//                   {
//                     "name": "Arterial Blood Gas",
//                     "sebelum": "100000",
//                     "setelah": "100000"
//                   },
//                   {
//                     "name": "BMP",
//                     "sebelum": "100000",
//                     "setelah": "100000"
//                   },
//                   {
//                     "name": "BNP",
//                     "sebelum": "100000",
//                     "setelah": "100000"
//                   },
//                   {
//                     "name": "BUN",
//                     "sebelum": "100000",
//                     "setelah": "100000"
//                   }
//                 ]
//               }
//             ],
//             "Dengan Pembatasan dari Pemberi Sumber Daya": [
//               {
//                 "Pendapatan": [
//                   {
//                     "name": "Dana Hibah",
//                     "sebelum": "100000",
//                     "setelah": "100000"
//                   },
//                   {
//                     "name": "Penghasilan Investasi Jangka Panjang (Catatan D)",
//                     "sebelum": "100000",
//                     "setelah": "100000"
//                   }
//                 ],
//                 "Beban": [
//                   {
//                     "name": "Beban Akibat Kebakaran",
//                     "sebelum": "100000",
//                     "setelah": "100000"
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       };
//       console.log("dataaaaaaaaaaaaaaaaa", dataSource.data);
//   const data = dataSource.data;

//   return (
//     <div>
//       <h1>Your Table</h1>
//       <DataTable dataSource={dataSource} />
//     </div>
//   );
// };

// export default PenghasilanKomprehensif;

import React from 'react';
import PDFDocument from './PDFDocument';
import DataTable from './tabel';

const PenghasilanKomprehensif = ({ dataSource }) => {
  const dataSource = {
    "data": [
        {
            "Tanpa Pembatasan dari Pemberi Sumber Daya": [
              {
                "Pendapatan": [
                  {
                    "name": "Dana hibah",
                    "sebelum": "100000",
                    "setelah": "100000"
                  },
                  {
                    "name": "Jasa Layanan",
                    "sebelum": "100000",
                    "setelah": "100000"
                  },
                  {
                    "name": "Penghasilan investasi jangka Panjang",
                    "sebelum": "100000",
                    "setelah": "100000"
                  },
                  {
                    "name": "Penghasilan investasi jangka pendek",
                    "sebelum": "100000",
                    "setelah": "100000"
                  },
                  {
                    "name": "Lain-lain",
                    "sebelum": "100000",
                    "setelah": "100000"
                  }
                ],
                "Beban": [
                  {
                    "name": "Gaji dan Upah",
                    "sebelum": "100000",
                    "setelah": "100000"
                  },
                  {
                    "name": "Jasa dan Profesional",
                    "sebelum": "100000",
                    "setelah": "100000"
                  },
                  {
                    "name": "Administratif",
                    "sebelum": "100000",
                    "setelah": "100000"
                  },
                  {
                    "name": "Depresiasi",
                    "sebelum": "100000",
                    "setelah": "100000"
                  },
                  {
                    "name": "Bunga",
                    "sebelum": "100000",
                    "setelah": "100000"
                  },
                  {
                    "name": "Lain-Lain",
                    "sebelum": "100000",
                    "setelah": "100000"
                  }
                ]
              }
            ],
            "Dengan Pembatasan dari Pemberi Sumber Daya": [
              {
                "Pendapatan": [
                  {
                    "name": "Dana Hibah",
                    "sebelum": "100000",
                    "setelah": "100000"
                  },
                  {
                    "name": "Penghasilan Investasi Jangka Panjang (Catatan D)",
                    "sebelum": "100000",
                    "setelah": "100000"
                  }
                ],
                "Beban": [
                  {
                    "name": "Beban Akibat Kebakaran",
                    "sebelum": "100000",
                    "setelah": "100000"
                  }
                ]
              }
            ]
          }
    ]
  };

  return (
    <div>
      <h1>Your Table</h1>
      <DataTable dataSource={dataSource} />
      <div>
            <PDFDocument dataSource={dataSource} />
        </div>
    </div>
   
  );
};

export default PenghasilanKomprehensif;
