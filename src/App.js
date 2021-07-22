import React from "react";
import { Layout, Menu } from "antd";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./page/Game/Home";
import Profile from "./page/Profile/Profile";
import MapView from "./page/Map/Map";
import Fight from "./page/Fight/Fight";
const { Header, Content, Footer } = Layout;

function App() {
  let menus = [
    { name: "Game", path: "/", component: Home },
    { name: "Profile", path: "/Profile", component: Profile },
    { name: "Map", path: "/Map", component: MapView },
    { name: "Fight", path: "/Fight", component: Fight }
  ];

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]}>
          {menus &&
            menus.map((m, i) => (
              <Menu.Item key={i}>
                <Link to={m.path}>{m.name}</Link>
              </Menu.Item>
            ))}
        </Menu>
      </Header>
      <Content
        style={{ padding: "15px 30px", width: "100%", maxWidth: "initial" }}
      >
        <Switch>
          {menus &&
            menus.map((m, i) => (
              <Route
                exact={m.path === "/"}
                path={m.path}
                component={m.component}
              />
            ))}
        </Switch>
      </Content>
      <Footer style={{ textAlign: "center" }}>Dev ©2021 Created by mg</Footer>
    </Layout>
  );
}

export default App;
