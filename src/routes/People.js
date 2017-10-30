import React from 'react';
import { connect } from 'dva';

import MainLayout from '../components/MainLayout/MainLayout';
import Header from "../components/People/Header";

function PeoplePage({ location }) {
    return (
        <MainLayout location={location}>
            <Header />
        </MainLayout>
    );
}

export default connect()(PeoplePage);