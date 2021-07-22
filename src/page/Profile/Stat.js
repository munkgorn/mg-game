import React from "react";
import { Card, Table } from "antd";

const Items = () => {
  const dataSource = [
    {
      key: "1",
      stat: "INT",
      value: 1
    },
    {
      key: "2",
      stat: "STR",
      value: 32
    },
    {
      key: "3",
      stat: "AGI",
      value: 99
    },
    {
      key: "4",
      stat: "DEX",
      value: 99
    }
  ];

  const columns = [
    {
      title: "Stat",
      dataIndex: "stat",
      key: "stat"
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value"
    }
  ];
  return (
    <Card style={{ width: "100%" }}>
      <Table showHeader={false} dataSource={dataSource} columns={columns} />
    </Card>
  );
};

export default Items;
