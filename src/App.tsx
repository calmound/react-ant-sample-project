import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Avatar, Layout, Menu } from 'antd';
import logo from './logo.svg';
import './App.css';

import Index from './pages/Index'
import About from './pages/About'
import STATIC_ROUTES from './routes';

import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [curPath, setCurPath] = useState('/')
  const navigate = useNavigate()
  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="logo">
            <Avatar src={logo} size={60} />
          </div>
          <Menu theme="dark" mode="inline" items={STATIC_ROUTES.map(item => ({
            key: item.path,
            label: item.label
          }))}
            selectedKeys={[curPath]}
            onClick={(value) => {
              setCurPath(value.key)
              navigate(value.key)
            }} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Routes>
              <>
                {
                  STATIC_ROUTES.map(item => <Route path={item.path} element={item.component} />)
                }
              </>
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center', background: '#fff' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>

    </div>
  );
}

export default App;
