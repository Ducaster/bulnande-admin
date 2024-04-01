"use client";

import React from "react";
import { Layout, Menu, theme } from "antd";
import LongCard from "./components/longterm";
import styled from "styled-components";

const { Header, Content, Footer } = Layout;

const items = [
  { key: "1", label: "장기프로젝트" },
  { key: "2", label: "단기프로젝트" },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "left",
        }}
      >
        <Logo>
          <img
            src="/logo_redwhite.png"
            alt="Logo"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Logo>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <LongCard />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        {new Date().getFullYear()} Created by IntheK
      </Footer>
    </Layout>
  );
};

export default App;

const Logo = styled.div`
  margin: 16px; /* 로고 주변 마진 설정 */
  margin-right: 24px; /* 로고 오른쪽 마진 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
