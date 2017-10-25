import React, { Component } from 'react';
import { Affix, Avatar, Button, Card, Icon, Tooltip } from 'antd';
import styles from './TopicCard.css';
import { Link } from 'dva/router';
import classNames from 'classnames';
import UserInfo from "../Common/UserInfo";
import Content from "../Common/Content";

class TopicCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      card_visible: true,
      extraNode_visible: false,
    };
  }

  cardHide = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      card_visible: false,
    });
  };

  extraNodeVisible = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      extraNode_visible: !this.state.extraNode_visible,
    });
  };

  render() {
    const { qid, title, answerNum, collectionNum, bestAnswer: { aid, author: { uid, avatarUrl, name, description }, cover_url, brief, content, create_date, voteup, commentNum } } = this.props.record;

    const article = { cover_url, brief, content, create_date, voteup, commentNum };

    const cardClass = classNames({
      [`${styles.card}`]: true,
      [`${styles.card_hide}`]: !this.state.card_visible
    });

    const cardTitleNode = <Link to={`question/${qid}`} className={styles.question_title} target="_blank"><span>{title}</span></Link>;

    const extraNode = <div className={classNames({
      [`${styles.card_hide}`]: !this.state.extraNode_visible
    })}> <Tooltip placement="bottom" title="不感兴趣"><Button icon="close" size="large" className={`${styles.btn_plain} ${styles.extra}`} onClick={this.cardHide}></Button></Tooltip></div>;

    return (
      <div className={cardClass} onMouseOver={this.extraNodeVisible} onMouseOut={this.extraNodeVisible}>
        <Card title={cardTitleNode} extra={extraNode} >
          {/* <div key={`question_${qid}`} >
            <div className={styles.question_info}>
              <span className={styles.question_num}>{`${answerNum}个回答·`}</span>
              <span className={styles.question_num}>{`${collectionNum}人收藏`}</span>
            </div>
          </div> */}
          <UserInfo userData={this.props.record.bestAnswer.author} hasDesc={true}/>
          <Content article={article} />
        </Card>
      </div>
    );
  }
}

export default TopicCard;