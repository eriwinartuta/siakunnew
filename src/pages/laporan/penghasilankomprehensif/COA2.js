import React, { useState, useEffect } from "react";
import { Tabel, Buttons, TextInput } from "../../../component";
import {
  SearchOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  fetchAkun3bySub2,
} from "../../../store/akun/action";
import "../../../assets/style/table.css";
import { Tag, Space, Tooltip } from "antd";
// import ChartOfAccount3 from "./COA3";
import { fetchCOA3bySub2 } from "../../../store/coa/action";

const ChartOfAccount2 = ({ record, dispatch, useSelector }) => {
  const { coa2bysub1 } = useSelector((state) => state.reducerCOA);

  const [expandKey, setExpandKey] = useState([]);

  //   const [inputAkun2, setTambahAkun2] = useState({
  //     kode_akun_1: record.kode_akun_1,
  //     kode_akun_2: "",
  //     uraian_akun_2: "",
  //   });

  //   useEffect(() => {
  //     if (postakun2?.status !== null) {
  //       setTimeout(() => {
  //         dispatch(clearPostAkun2());
  //       }, 2000);
  //     }
  //     // eslint-disable-next-line
  //   }, [postakun2?.status]);

  //   const [akun2Update, setAkun2Update] = useState({
  //     kode_akun_1: record.kode_akun_1,
  //     kode_akun_2: "",
  //     uraian_akun_2: "",
  //   });

  //   useEffect(() => {
  //     setAkun2Update({
  //       kode_akun_1: akun2byid.kode_akun_1,
  //       kode_akun_2: akun2byid.kode_akun_2,
  //       uraian_akun_2: akun2byid.uraian_akun_2,
  //     });
  //   }, [akun2byid]);

  const column = [
   
    {
      title: "",
      dataIndex: "uraian_coa_2",
      key: "uraian_coa_2",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <TextInput
              autoFocus
              placeholder="Cari .."
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></TextInput>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.uraian_akun_2.toLowerCase().includes(value.toLowerCase());
      },
      render: (text, record, index) => {
        return (
          <div>
           
            <Space> {record.uraian_coa_2} </Space>
          </div>
        );
      },
    },
    {
        title: "Tahun Sebelum",
        dataIndex: "kode_coa_2",
        key: "sebelum",
        align:"right",
        render: (text, record, index) => {
          if (text > 1) {
            return "Rp0000";
          }
          return "Rp0000";
        }
      },
      {
        title: "Tahun Setelah",
        dataIndex: "kode_coa_2",
        key: "Setelah",
        align:"right",
        render: (text, record, index) => {
          if (text > 1) {
            return "Rp0000";
          }
          return "Rp0000";
        }
      },
    
  ];

  return (
    <div style={{ margin: 5 }}>
      <div
        style={{
          padding: 5,
          zIndex: 0,
          overflowX: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Tabel
          dataSource={coa2bysub1}
          columns={column}
          rowKey={"kode_coa_2"}
          expandedRowKeys={expandKey}
          pagination={false}
          expandIcon={({ expanded, onExpand, record }) => {
            if (record.kode_coa_2 === null) {
              return "";
            }
            return expanded ? (
              <MinusCircleOutlined
                onClick={() => {
                  setExpandKey([]);
                  dispatch(fetchAkun3bySub2(0));
                }}
              />
            ) : (
              <PlusCircleOutlined
                onClick={() => {
                  setExpandKey([record.kode_coa_2]);
                  dispatch(fetchCOA3bySub2(record.kode_coa_2));
                }}
              />
            );
          }}
        />
      </div>
      {/* <MessagePost
          visible={postakun2.status !== null ? true : false}
          message={postakun2.message}
          status={postakun2.status}
        /> */}
    </div>
  );
};

export default ChartOfAccount2;
