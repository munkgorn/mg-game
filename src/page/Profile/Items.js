import React from "react";
import { Card, Row, Col } from "antd";

const Items = () => {
  return (
    <Row style={{ fontSize: "10px" }} gutter={[0, 0]}>
      <Col span={12}>
        <Card style={{ width: "100%", padding: 0 }}>Weapon</Card>
      </Col>
      <Col span={12}>
        <Card style={{ width: "100%", padding: 0 }}>Armor</Card>
      </Col>
      <Col span={12}>
        <Card style={{ width: "100%", padding: 0 }}>Shoes</Card>
      </Col>
      <Col span={12}>
        <Card style={{ width: "100%", padding: 0 }}>Accessory</Card>
      </Col>
    </Row>
  );
};

export default Items;
