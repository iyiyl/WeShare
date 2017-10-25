import React from 'react';
import styles from './MainLayout.css';
import { Layout, } from 'antd';
import Nav from './Nav';

const { Header, Footer, Sider, Content } = Layout;

function MainLayout({ children, location }) {
  return (
    <Layout className="layout">
      <Nav location={location} />
      <Content className={styles.content}>
        <Layout>
          {children}
        </Layout>
      </Content>
    </Layout>

  );
}

export default MainLayout;