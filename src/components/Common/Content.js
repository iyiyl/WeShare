import React, { Component } from 'react';
import { Affix, Avatar, Button, Card, Icon, Tooltip, Menu, Popover } from 'antd';
import styles from './Content.css';
import classNames from 'classnames';
import CommentCard from "../Comment/Comment";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToggle: false,
      commentToggle: false,
    };
  }

  contentToggleSwitch = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      contentToggle: !this.state.contentToggle,
    });
  };

  commentToggleSwitch = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      commentToggle: !this.state.commentToggle,
    });
  };

  voteup = (e) => {
    if (e) e.stopPropagation();
  }

  render() {

    const { cover_url, brief, content, create_date, voteup, commentNum } = this.props.article;

    const menu = (
      <div className={styles.menu}>
        <Menu>
          <Menu.Item key="nohelp">没有帮助</Menu.Item>
          <Menu.Item key="report">举报</Menu.Item>
        </Menu>
      </div>
    );
    return (
      <div>
        {
          this.state.contentToggle ? (
            <div>
              <div className={styles.answer_content} dangerouslySetInnerHTML={{ __html: content }}></div>
              <div className={styles.answer_date}>{`编辑于${create_date}`}</div>
            </div>
          ) : (
              <div className={styles.answer_brief} onClick={this.contentToggleSwitch}>
                {
                  cover_url ? (
                    <span>
                      <img alt="example" width="190" height="105" src={cover_url} />
                    </span>
                  ) : (null)
                }
                <span>{`${brief}··· `}</span>
                <Button className={`${styles.btn_plain} ${styles.content_switch}`}>阅读全文<Icon type="down" />
                </Button>
              </div>
            )
        }

        <div className={styles.answer_opt_info}>
          {this.state.contentToggle ? (
            <Affix offsetBottom={0}>
              <div className={`${styles.answer_opt} ${styles.answer_opt_fixed}`}>
                <div className={styles.opt_left}>
                  <Button type="primary" onClick={this.voteup} icon="caret-up">{`${voteup}赞`}</Button>
                  <Button type="primary" icon="caret-down" style={{ "marginLeft": 6 }}></Button>
                  <Button icon="message" className={styles.btn_plain} onClick={this.commentToggleSwitch} >
                    {this.state.commentToggle ? `收起评论` : `${commentNum} 条评论`}
                  </Button>
                  <Button icon="star" className={styles.btn_plain} >
                    收藏
                  </Button>
                  <Popover content={menu} placement="bottom">
                    <Button icon="ellipsis" className={styles.btn_plain} ></Button>
                  </Popover>
                </div>
                <Button className={`${styles.btn_plain} ${styles.content_switch} ${styles.opt_right}`} onClick={this.contentToggleSwitch}>
                  收起<Icon type="up" />
                </Button>


              </div>
            </Affix>
          ) : (
              <div className={`${styles.answer_opt} ${styles.opt_left}`}>
                <Button type="primary" icon="caret-up">{`${voteup}赞`}</Button>
                <Button type="primary" icon="caret-down" style={{ "marginLeft": 6 }}></Button>
                <Button icon="message" className={styles.btn_plain} onClick={this.commentToggleSwitch}>
                  {this.state.commentToggle ? `收起评论` : `${commentNum} 条评论`}
                </Button>
                <Button icon="star" className={styles.btn_plain} >
                  收藏
                </Button>
                <Popover content={menu} placement="bottom">
                  <Button icon="ellipsis" className={styles.btn_plain} ></Button>
                </Popover>
              </div>
            )
          }
        </div>
        {!this.state.commentToggle ? null : (<div className={styles.comment}><CommentCard /></div>)}
      </div>
    );
  }
}
