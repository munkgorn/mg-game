import React from "react";
import { PageHeader, Card, Row, Col } from "antd";
import Nav from "./Nav";
import { useHistory } from "react-router-dom";

const Map = () => {
  let history = useHistory();
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => history.push("/")}
        title="Map"
        subTitle="find NPC or Monster"
      />
      <Card style={{ width: "100%" }}>
        <Row>
          <Col span={8}>
            <Nav />
          </Col>
          <Col span={16}>Content Map</Col>
        </Row>
      </Card>
    </div>
  );
};

export default Map;
