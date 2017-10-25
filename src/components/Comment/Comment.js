import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';

import { Affix, Button, Card, Pagination} from "antd";
import Sort from "./Sort";
import Reply from "./Reply";
import styles from "./Comment.css";

function Comment({ dispatch, list: dataSource, loading, total, page: current }) {

  const cardTitleNode = <span className={styles.title}>{`${total}条评论`}</span>;

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/comments',
      search: queryString.stringify({ page }),
    }));
  }

  return (
    <Card title={cardTitleNode} extra={<Sort />}>
      {dataSource.map((reply, index) => <Reply  reply={reply} key={reply.id} />)}
      <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
    </Card>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.comments;
  return {
    loading: state.loading.models.comments,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Comment);
