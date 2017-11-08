import React, { Component } from "react";
import { Card, Button, } from "antd";

import styles from "./Question.css";

export default class Question extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className={styles.all}>
        <Header />
        <Card className={styles.left}></Card>
        <Card className={styles.right}></Card>
      </div>
    );
  }
}

class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Card className={styles.head}>
      <div className={styles.wrap}>
        <div className={styles.question}>
          <h2>猝死／过劳死有没有先兆？</h2>
          <div>因为工作压力大，熬夜等等而导致的过劳死或者猝死，是真的突然就爆发性发作，还是有什么先兆？比如头痛、精神很疲倦什么的？换句话说，虽然熬夜虽然压力大，但是一旦觉得比较疲倦就休息，不硬撑，这样能否避免突然挂掉？</div>
          <div className={styles.opt}>
            <Button type="primary">关注问题</Button>
            <Button icon="edit">写回答</Button>

          </div>
        </div>
        <div className={styles.others}>
        </div>
        </div>
      </Card>
    );
  }
}