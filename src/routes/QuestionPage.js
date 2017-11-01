import React from 'react';
import { connect } from 'dva';

import MainLayout from '../components/MainLayout/MainLayout';
import Question from "../components/Question/Question";

function QuestionPage({ location }) {
    return (
        <MainLayout location={location}>
            <Question />
        </MainLayout>
    );
}

export default connect()(QuestionPage);