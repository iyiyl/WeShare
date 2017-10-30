import React from 'react';
import { connect } from 'dva';
import { Route } from 'dva/router';
import dynamic from 'dva/dynamic';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import TopicComponent from '../components/Topic/Topic';
import MainLayout from '../components/MainLayout/MainLayout';
import Comment from "../components/Comment/Comment";

function Topic({ match, location }) {
  return (
    <MainLayout location={location}>
      <TopicComponent />
    </MainLayout>
  );
}

export default connect()(Topic);
