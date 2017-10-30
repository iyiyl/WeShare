import React from 'react';
import { connect } from 'dva';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';

function Users({ location }) {
  return (
    <MainLayout location={location}>
      <UsersComponent />
    </MainLayout>
  );
}

export default connect()(Users);
