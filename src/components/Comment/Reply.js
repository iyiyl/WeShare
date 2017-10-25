import React, { Component } from 'react';
import { Affix, Avatar, Button, Card, Icon, Tooltip } from 'antd';
import styles from './Reply.css';
import classNames from 'classnames';
import UserInfo from "../Common/UserInfo";

export default class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optToggle: false,
    };
  }

  optToggleSwitch = (e) => {
    this.setState({
      optToggle: !this.state.optToggle,
    });
  }

  render() {
    const userdata = {
      "uid": 4234,
      "avatarUrl": "http://p3.pstatp.com/thumb/10081/8116076386",
      "name": "臭咸鱼",
      "description": "克莱登大学 三国文化研究会 最最最牛逼的教授"
    };

    const { id, content, create_date, voteup, author } = this.props.reply;
    return (
      <div onMouseOver={this.optToggleSwitch} onMouseOut={this.optToggleSwitch} className={styles.info}>
        <UserInfo userData={author} hasDesc={false}/>
        <p className={styles.content}>{content}</p>
        <div className={styles.opt}>
          <Button icon="like" className={styles.btn_link}>赞{voteup ? voteup : null}</Button>
          <span className={classNames({ [`${styles.visible}`]: !this.state.optToggle })}>
            <Button icon="message" className={styles.btn_link}>查看对话</Button>
            <Button icon="rollback" className={styles.btn_link}>回复</Button>
            <Button icon="dislike" className={styles.btn_link}>踩</Button>
            <Button icon="exclamation" className={styles.btn_link}>举报</Button>
          </span>
        </div>
      </div>
    );
  }
}