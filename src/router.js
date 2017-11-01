import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    component: () => import("./routes/IndexPage"),
  });

  const Users = dynamic({
    app,
    models: () => [
      import("./models/users"),
    ],
    component: () => import("./routes/Users"),
  });

  const TopicPage = dynamic({
    app,
    models: () => [
      import("./models/topic"),
    ],
    component: () => import("./routes/TopicPage"),
  });
  const Comment = dynamic({
    app,
    models: () => [
      import("./models/comment"),
    ],
    component: () => import("./components/Comment/Comment"),
  });
  const PeoplePage = dynamic({
    app,
    component: () => import("./routes/PeoplePage"),
  });
  const QuestionPage = dynamic({
    app,
    component: () => import("./routes/QuestionPage"),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/topic" component={TopicPage} />
        <Route exact path="/people/:id" component={PeoplePage} />
        <Route exact path="/question/:id" component={QuestionPage} />
        <Route path="/topic/comment" component={Comment} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;