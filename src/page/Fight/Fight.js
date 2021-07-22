import React from "react";
import { PageHeader, Card, Row, Col, Button, Avatar } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const Fight = () => {
  let history = useHistory();
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => history.push("/")}
        title="Fight"
      />
      <Card>
        <Row>
          <Col span={10}>
            <Avatar shape="square" size={300} icon={<UserOutlined />} />
          </Col>
          <Col span={4}></Col>
          <Col span={10}>
            <Avatar shape="square" size={300} icon={<UserOutlined />} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Fight;
