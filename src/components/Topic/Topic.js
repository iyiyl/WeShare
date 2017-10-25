import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Pagination } from 'antd';
import TopicCard from './TopicCard';
import styles from './Topic.css';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import { PAGE_SIZE } from '../../constants';

function Topic({ dispatch, list: data, loading, total, page: current }) {

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/topic',
      search: queryString.stringify({ page }),
    }));
  }

  return (
    <div className={styles.content}>
      {data.map((value, index) => <TopicCard record={value} key={`topic__${index}`} />)}
      <Card >
      <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
        </Card>
    </div>
    
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.topic;
  return {
    loading: state.loading.models.topic,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(Topic);

