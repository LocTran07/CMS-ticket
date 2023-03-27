import React, { useState } from "react";
import {
  DesktopOutlined,
  HomeOutlined,
  SettingOutlined,
  SearchOutlined,
  MailOutlined,
  BellOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Input } from "antd";
import { TbTicket } from "react-icons/tb";
import "./style.scss";
import {Outlet,Link,NavLink} from 'react-router-dom'
import { JsxElement } from "typescript";


const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode ,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to='/'>Trang chủ</Link>, "1", <HomeOutlined></HomeOutlined>),
  getItem(<Link to='/ManageTicket'>Quản lý vé</Link>, "2", <TbTicket></TbTicket>),
  getItem(<Link to='/CheckTicket'>Đối soát vé</Link>, "3", <DesktopOutlined />),
  getItem(<Link to = '/Setting'>Cài đặt</Link>, "sub1", <SettingOutlined />),
];

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="mainLO" style={{ minHeight: "100vh" }}>
      <Sider
        width={321}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            marginTop: 17,
            textAlign: "left",
            paddingLeft: 36,
            marginBottom: 51,
          }}
        >
          {" "}
          <img src="./img/insight-051.png" alt="" />
        </div>

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
        <p style={{ marginTop: 0 }}>Gói dịch vụ</p>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="header"
          style={{
            background: "#f9f6f4",
            padding: 0,
            paddingRight: 32,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            
          }}
        >
          {/* <Search placeholder="input search text" style={{ width: 470 }} /> */}
          <Input
            style={{ width: 470, borderColor: "transparent",backgroundColor: '#EDEDED',height:40,borderRadius:12 }}
            placeholder="Search"
            suffix={<SearchOutlined style={{fontSize: 24}} />}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 27,
            }}
          >
            <div>
              <MailOutlined style={{ fontSize: 20 }}></MailOutlined>
            </div>
            <div>
              <BellOutlined style={{ fontSize: 20 }}></BellOutlined>
            </div>
            <img src="./img/Frame54.png" alt="" />
          </div>
        </Header>
        <Content
          className="cont"
          style={{  background: "#f9f6f4", paddingRight: 32 }}
        >
          <div
            style={{
              padding: 18,
              minHeight: "97%",
              background: colorBgContainer,
              borderRadius: 24,
              textAlign:'left'
            }}
          >
            {/* <p> Bill is a cat.</p> */}
            <Outlet></Outlet>
            
          </div>
        </Content>

        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
