import React, { Component } from 'react';
import { Affix, Button, Card } from 'antd';
import styles from './Comment.css';
import { Link } from 'dva/router';
import classNames from 'classnames';
import Reply from "./Reply";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortToggle: true,
    };
  }

  sortSwitch = (e) => {
    if(e) e.stopPropagation();
    this.setState({
      sortToggle: !this.state.sortToggle,
    });
  }

  render() {
    const cardTitleNode = <span className={styles.title}>{`34条评论`}</span>,
      extraNode = <Button onClick={this.sortSwitch} className={`${styles.extra} ${styles.btn_link}`}>{this.state.sortToggle ? "切换为时间排序" : "切换为默认排序"}</Button>;
    return (
      <Card title={cardTitleNode} extra={extraNode}>
      <Reply />
      <Reply />
      <Reply />
      </Card>
    );
  }
}
