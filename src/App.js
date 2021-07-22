import React from "react";
import { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./App.css";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './page/Profile'; 
const { Header, Content, Footer } = Layout;

function App() {

  let menus = [
    {name: 'MG-Game', path:'/'}
  ];

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {menus && menus.map((m,i) => <Link to={m.path}><Menu.Item key={i}>{m.name}</Menu.Item></Link>)}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Switch>
            {menus && menus.map((m,i) => <Route exact={m.path==='/'} path={m.path} component={Profile} />)}
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
