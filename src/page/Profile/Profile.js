import React from "react";
import { PageHeader, Card, Row, Col } from "antd";
import Items from "./Items";
import Stat from "./Stat";
import { useHistory } from "react-router-dom";

const Profile = () => {
  let history = useHistory();
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => history.push("/")}
        title="Charactor"
        subTitle="profile"
      />
      <Card style={{ width: "100%" }}>
        <Row gutter={[14, 14]}>
          <Col span={12}>
            <Items />
          </Col>
          <Col span={12}>
            <Stat />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Profile;
