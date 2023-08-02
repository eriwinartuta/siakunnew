// import React, { useState, useEffect } from "react";
// import { Tabel, Buttons, TextInput } from "../../../component";
// import {
//   SearchOutlined,
//   MinusCircleOutlined,
//   PlusCircleOutlined,
// } from "@ant-design/icons";
// import { setGlobalTitle } from "../../../store/global";
// import "../../../assets/style/table.css";
// import { useDispatch, useSelector } from "react-redux";
// import { Tag, Space, Tooltip } from "antd";
// import { FONTSTYLE } from "../../../component/font";
// import { COA } from "../../../assets";
// import { fetchCOA1, fetchCOA2bySub1 } from "../../../store/coa/action";
// import ChartOfAccount2 from "./COA2";
// import LazyLoad from "react-lazyload";

// const PenghasilanKomprehensif = () => {
//   const dispatch = useDispatch();
//   const { coa1 } = useSelector((state) => state.reducerCOA);

//   const [expandKey, setExpandKey] = useState([]);

//   useEffect(() => {
//     dispatch(setGlobalTitle("Laporan komprehensif "));
//     dispatch(fetchCOA1());
//     // eslint-disable-next-line
//   }, [dispatch]);



//   const column = [
    
//     {
//       title: "TANPA PEMBATASAN PEMBERI SUMBER",
//       dataIndex: "uraian_coa_1",
//       key: "uraian_coa_1",
//       align: "left",
//       filterDropdown: ({
//         setSelectedKeys,
//         selectedKeys,
//         confirm,
//         clearFilters,
//       }) => {
//         return (
//           <>
//             <TextInput
//               autoFocus
//               placeholder="Cari .."
//               value={selectedKeys[0]}
//               onChange={(e) => {
//                 setSelectedKeys(e.target.value ? [e.target.value] : []);
//                 confirm({ closeDropdown: false });
//               }}
//               onPressEnter={() => {
//                 confirm();
//               }}
//               onBlur={() => {
//                 confirm();
//               }}
//             ></TextInput>
//           </>
//         );
//       },
//       filterIcon: () => {
//         return <SearchOutlined />;
//       },
//       onFilter: (value, record) => {
//         return record.uraian_coa_1.toLowerCase().includes(value.toLowerCase());
//       },
//       render: (text, record, index) => {
//         return (
//           <div>
            
//             <Space> {record.uraian_coa_1} </Space>
//           </div>
//         );
//       },
//     },
//     {
//       title: "Tahun Sebelum",
//       dataIndex: "kode_coa_2",
//       key: "sebelum",
//       align:"right",
//       render: (text, record, index) => {
//         if (text > 1) {
//           return "Rp0000";
//         }
//         return "Rp0000";
//       }
//     },
//     {
//       title: "Tahun Setelah",
//       dataIndex: "kode_coa_2",
//       key: "Setelah",
//       align:"right",
//       render: (text, record, index) => {
//         if (text > 1) {
//           return "Rp0000";
//         }
//         return "Rp0000";
//       }
//     },
   
//   ];

//   return (
//     <div className="p-5 bg-white rounded-lg">
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginBottom: 2,
//           position: "sticky",
//         }}
//       >
//         <div>
//           <h5
//             style={{
//               marginBottom: 5,
//               fontWeight: "700",
//               fontFamily: FONTSTYLE.PUBLICSANS,
//               fontSize: 24,
//             }}
//           >
//             Laporan Penghasilan komprehensif
//           </h5>
//         </div>
//       </div>
//       <div
//         style={{
//           fontFamily: FONTSTYLE.PUBLICSANS,
//         }}
//         className="flex items-center justify-center"
//       >
//       </div>
//       <div
//         style={{
//           padding: 5,
//           fontFamily: FONTSTYLE.POPPINS,
//           zIndex: 0,
//           overflowX: "auto",
//           display: "flex",
//           justifyContent: "center",
//           flexDirection: "column",
//         }}
//       >
//         <Tabel
//           dataSource={coa1}
//           className={"table"}
//           columns={column}
//           rowKey={"kode_coa_1"}
//           expandedRowKeys={expandKey}
//           pagination={false}
//           expandable={{
//             expandedRowRender: (record, index) => (
//               <ChartOfAccount2
//                 key={index}
//                 kodeprogram={record.kode_coa_2}
//                 dispatch={dispatch}
//                 useSelector={useSelector}
//                 useEffect={useEffect}
//                 record={record}
//               />
//             ),
//           }}
//           expandIcon={({ expanded, onExpand, record }) => {
//             if (record.kode_coa_1 === null) {
//               return "";
//             }
//             return expanded ? (
//               <MinusCircleOutlined
//                 onClick={() => {
//                   dispatch(fetchCOA2bySub1(0));
//                   setExpandKey([]);
//                 }}
//               />
//             ) : (
//               <PlusCircleOutlined
//                 onClick={() => {
//                   dispatch(fetchCOA2bySub1(record.kode_coa_1));
//                   setExpandKey([record.kode_coa_1]);
//                 }}
//               />
//             );
//           }}
//         />
//       </div>
//       {/* <MessagePost
//         visible={post.status !== null ? true : false}
//         message={post.message}
//         status={post.status}
//       /> */}
//     </div>
//   );
// };
// //   useEffect(() => {
// //     dispatch(setGlobalTitle("Laporan / Penghasilan Komprehensif"));
// //   }, [dispatch]);
// //   // const data = [
// //   //   {
// //   //     key: '1',
// //   //     component: 'Component 1',
// //   //     year1: '2021',
// //   //     year2: '2022',
// //   //   },
// //   //   {
// //   //     key: '2',
// //   //     component: 'Component 2',
// //   //     year1: '2021',
// //   //     year2: '2022',
// //   //   },
// //   // ];
  
// //   // const columns = [
// //   //   {
// //   //     title: 'TANPA PEMBATASAN PEMBERI SUMBER',
// //   //     dataIndex: 'component',
// //   //     key: 'component',
// //   //     children: [
// //   //       {
// //   //         title: 'Pendapatan',
// //   //         dataIndex: 'component',
// //   //         key: 'data',
// //   //       },
// //   //     ],
// //   //   },
// //   //   {
// //   //     title: '2023',
// //   //     dataIndex: 'year1',
// //   //     key: 'year1',
// //   //   },
// //   //   {
// //   //     title: '2022',
// //   //     dataIndex: 'year2',
// //   //     key: 'year2',
// //   //   },
// //   // ];
// //   const dataSource = [
// //     {
// //       key: '1',
// //       componentName: 'Data',
// //     },
// //     {
// //       key: '2',
// //       componentName: 'Component 1',
// //       'Year 1': 1000,
// //       'Year 2': 1000,
// //     },
// //     {
// //       key: '3',
// //       componentName: 'Component 2',
// //       'Year 1': 2000,
// //       'Year 2': 2000,
// //     },
// //     {
// //       key: '4',
// //       componentName: 'Summary',
// //       'Year 1': 3000,
// //       'Year 2': 3000,
// //     },
// //     {
// //       key: '5',
// //       componentName: 'Data 2',
// //     },
// //     {
// //       key: '6',
// //       componentName: 'Component 1',
// //       'Year 1': 1000,
// //       'Year 2': 1000,
// //     },
// //     {
// //       key: '7',
// //       componentName: 'Component 2',
// //       'Year 1': 2000,
// //       'Year 2': 2000,
// //     },
// //     {
// //       key: '8',
// //       componentName: 'Summary',
// //       'Year 1': 3000,
// //       'Year 2': 3000,
// //     },
// //     {
// //       key: '9',
// //       componentName: 'Data 3',
// //     },
// //     {
// //       key: '10',
// //       componentName: 'Component 1',
// //       'Year 1': 1000,
// //       'Year 2': 1000,
// //     },
// //     {
// //       key: '11',
// //       componentName: 'Component 2',
// //       'Year 1': 2000,
// //       'Year 2': 2000,
// //     },
// //     {
// //       key: '12',
// //       componentName: 'Summary',
// //       'Year 1': 3000,
// //       'Year 2': 3000,
// //     },
// //   ];
  
// //   const columns = [
// //     {
// //       title: 'Component Name',
// //       dataIndex: 'componentName',
// //       key: 'componentName',
// //     },
// //     {
// //       title: 'Year 1',
// //       dataIndex: 'Year 1',
// //       key: 'Year 1',
// //     },
// //     {
// //       title: 'Year 2',
// //       dataIndex: 'Year 2',
// //       key: 'Year 2',
// //     },
// //   ];

// //   return (
// //     <div
// //       style={{ fontFamily: FONTSTYLE.POPPINS }}
// //       className="p-5 bg-white rounded-lg"
// //     >
// //       <div
// //         style={{
// //           display: "flex",
// //           justifyContent: "space-between",
// //           position: "sticky",
// //         }}
// //       >
// //         <div>
// //           <h5
// //             style={{
// //               fontWeight: "700",
// //               fontSize: 24,
// //               marginLeft: 20,
// //               fontFamily: FONTSTYLE.PUBLICSANS,
// //             }}
// //           >
// //             Laporan Penghasilan Komprehensif
// //           </h5>
// //         </div>
// //         <div
// //           style={{
// //             display: "flex flex-end",
// //             alignItems: "center",
// //             justifyContent: "justify-end",
// //             width: 600,
// //             marginRight: 10,
// //             fontFamily: FONTSTYLE.PUBLICSANS,
// //           }}
// //         >
// //           {/* <DatePickers
// //             picker={"date"}
// //             format={"YYYY-MM-DD"}
// //             //onChange={onChange}
// //           /> */}
// //           {/* <Buttons
// //             labelButton={"Unduh Laporan"}
// //             icon={<DownloadOutlined />}
// //             // onClick={() => {
// //             //   dispatch(fetchFilterJurnal(tgl_mulai, tgl_selesai));
// //             // }}
// //           /> */}
// //         </div>
// //       </div>
// //       <Divider />
// //       <div >
// //       <Table
// //       dataSource={dataSource}
// //       columns={columns}
// //       pagination={false}
// //       bordered
// //       summary={(pageData) => {
// //         let totalYear1 = 0;
// //         let totalYear2 = 0;

// //         pageData.forEach((data) => {
// //           if (data.componentName.startsWith('Component')) {
// //             totalYear1 += data['Year 1'];
// //             totalYear2 += data['Year 2'];
// //           }
// //         });

// //         return (
// //           <>
// //             <Table.Summary.Row>
// //               <Table.Summary.Cell>Total</Table.Summary.Cell>
// //               <Table.Summary.Cell>{totalYear1}</Table.Summary.Cell>
// //               <Table.Summary.Cell>{totalYear2}</Table.Summary.Cell>
// //             </Table.Summary.Row>
// //           </>
// //         );
// //       }}
// //     />
// //       </div>

// //       {/* 
// //       <UnderConstruction /> */}
// //     </div>
// //   );
// // };

import React from 'react';
import DataTable from './tabel';
import './style.css';
import { FONTSTYLE } from "../../../component/font";
import PDFDocument from './PDFDocument';
const PenghasilanKomprehensif = () => {
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
  console.log("dataSource in PenghasilanKomprehensif:", dataSource);

  return (
    <div style={{ fontFamily: FONTSTYLE.POPPINS }} className="p-5 bg-white rounded-lg">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
        }}
      >
        <div>
          <div  style={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <h5
            style={{
              fontWeight: "700",
              fontSize: 24,
              marginLeft: 20,
              fontFamily: FONTSTYLE.PUBLICSANS,
            }}
          >
            Laporan Penghasilan Komprehensif
          </h5>
          </div>
          {/* <div>
            <PDFDocument dataSource={dataSource} />
        </div> */}
        </div>
        </div>
      <DataTable dataSource={dataSource} />
      
    </div>
    
  );
};

export default PenghasilanKomprehensif;