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
    return (
      <div onMouseOver={this.optToggleSwitch} onMouseOut={this.optToggleSwitch} className={styles.info}>
        <UserInfo userData={userdata} hasDesc={false}/>
        <p className={styles.content}>长时间看电脑手机，脊柱很疼，一疼就头晕眼花，这种能治疗吗，是什么病？帮人咨询，杭州有没有合适治疗方</p>
        <div className={styles.opt}>
          <Button icon="like" className={styles.btn_link}>赞</Button>
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