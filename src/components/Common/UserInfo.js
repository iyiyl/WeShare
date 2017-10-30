import React, { Component } from 'react';
import { Avatar, Button, Popover } from 'antd';
import styles from './UserInfo.css';
import { Link } from 'dva/router';
import classNames from 'classnames';

export default class UserInfo extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    const { uid, name, avatarUrl, description } = this.props.userData;

    const hasDesc = this.props.hasDesc || false;

    const title = (
      <div className={styles.pop_title}>
        <Avatar src={avatarUrl} className={styles.pop_avatar} shape="square" />
        <ul className={styles.pop_user}>
          <li>
            <Link to={`people/${uid}`} target="_blank">
              <span className={styles.pop_name}>{name}</span>
            </Link>
          </li>
          <li className={styles.pop_desc}>
            {description}
          </li>
        </ul>
      </div>
    );
    const content = (
      <div>
        <div className={styles.pop_info}>
          <Link to={`people/${uid}/answers`} target="_blank">
            <div className={styles.data_info}>回答</div>
            <div className={styles.data_count}>132</div>
          </Link>
          <Link to={`people/${uid}/articles`} target="_blank">
            <div className={styles.data_info}>文章</div>
            <div className={styles.data_count}>0</div>
          </Link>
          <Link to={`people/${uid}/followers`} target="_blank">
            <div className={styles.data_info}>关注者</div>
            <div className={styles.data_count}>1234</div>
          </Link>
        </div>
        <div className={styles.pop_info}>
          <Button type="primary" icon="plus">关注TA</Button>
          <Button icon="message">发私信</Button>
        </div>
      </div>
    );

    return (
      <div className={styles.user}>
        <Link to={`people/${uid}`} target="_blank">
          <Popover content={content} title={title} placement="bottomLeft">
            <Avatar src={avatarUrl} shape="square" />
          </Popover>
          <span className={styles.user_name}>{name}</span>
        </Link>
        {hasDesc ? <span className={styles.user_desc}>{description}</span> : null}
      </div>
    );
  }
}