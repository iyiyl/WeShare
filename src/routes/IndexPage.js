import React from 'react';
import { connect } from 'dva';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import MainLayout from '../components/MainLayout/MainLayout';
import styles from "./IndexPage.css";

function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.content}>
        <div className={styles.star1}></div>
        <div className={styles.star2}></div>
        <div className={styles.star3}></div>
      </div>
    </MainLayout>
  );
}

export default connect()(IndexPage);