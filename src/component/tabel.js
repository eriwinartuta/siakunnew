import React from "react";
import { Table } from "antd";

const Tabel = ({
  dataSource,
  columns,
  rowKey,
  expandable,
  rowSelection,
  expandedRowRender,
  expandedRowKeys,
  expandIcon,
  pagination,
  scrollX,
  expandIconColumnIndex,
  footer,
  header,
  showHeader,
  summary,
  Row
}) => {
  return (
    <Table
      title={header}
      className={"table"}
      dataSource={dataSource}
      expandable={expandable}
      rowKey={rowKey}
      columns={columns}
      rowSelection={rowSelection}
      expandIconColumnIndex={expandIconColumnIndex}
      expandedRowRender={expandedRowRender}
      expandedRowKeys={expandedRowKeys}
      expandIcon={expandIcon}
      scroll={scrollX}
      pagination={pagination}
      footer={footer}
      showHeader={showHeader}
      summary={summary}
      Row={Row}
    />
  );
};

export default Tabel;
