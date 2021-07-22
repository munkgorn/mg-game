import React from "react";
import { Menu, PageHeader } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from "@ant-design/icons";
const { SubMenu } = Menu;

const Nav = () => {
  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={handleClick}
      style={{ width: "100%" }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<MailOutlined />} title="NPC">
        <Menu.Item key="1">Kafra</Menu.Item>
        <Menu.Item key="2">NPC 2</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Monsters">
        <Menu.Item key="5">Monster 1</Menu.Item>
        <Menu.Item key="6">Monster 2</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Nav;
