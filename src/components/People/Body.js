import React, { Component } from 'react';
import { Card, Icon, Modal, Tabs } from 'antd';
import styles from "./Body.css";

const TabPane = Tabs.TabPane;

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.main}>
        <Card className={styles.left}>
          <Tabs defaultActiveKey="2">
            <TabPane tab="动态" key="1">Content of tab 1</TabPane>
            <TabPane tab="回答" key="2">Content of tab 2</TabPane>
            <TabPane tab="提问" key="3">Content of tab 3</TabPane>
            <TabPane tab="文章" key="4">Content of tab 4</TabPane>
            <TabPane tab="收藏" key="5">Content of tab 5</TabPane>
            <TabPane tab="关注" key="6">Content of tab 6</TabPane>

          </Tabs>
        </Card>
        <div className={styles.right}>
          <Card title={<h3>个人成就</h3>} className={styles.card}></Card>
          <Card className={styles.card}>wet </Card>
        </div>

      </div>
    );
  }
} 