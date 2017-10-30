import queryString from 'query-string';
import { Route, Link } from 'dva/router';

import * as commentService from '../services/comment';

export default {
  namespace: 'comment',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    }
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(commentService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        }
      });
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.comment.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        const query = queryString.parse(search);
        if (pathname === 'comment') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
