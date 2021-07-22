import React from "react";
import { PageHeader, Card, Row, Col, Button, Avatar } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const Profile = () => {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="MG Game"
        subTitle="Fight"
      />
      <Card style={{ width: "100%" }}>
        <Row gutter={[14, 14]}>
          <Col span={12} style={{ textAlign: "left" }}>
            <Link to="/profile">
              <Button>Profile</Button>
            </Link>
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <Link to="/map">
              <Button>MAP</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <Avatar shape="square" size={300} icon={<UserOutlined />} />
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <Link to="/fight">
              <Button>Fight</Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Profile;
