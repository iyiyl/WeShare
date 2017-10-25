import React from 'react';
import { connect } from 'dva';
import TopicComponent from '../components/Topic/Topic';
import MainLayout from '../components/MainLayout/MainLayout';

function Topic({ location }) {
  return (
    <MainLayout location={location}>
      <TopicComponent />
    </MainLayout>
  );
}

export default connect()(Topic);
