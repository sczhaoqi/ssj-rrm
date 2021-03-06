import React from 'react';
import ReactDOM from 'react-dom';
// import 'index.css';
import 'index.scss';
import { createBrowserHistory } from "history";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import * as serviceWorker from 'serviceWorker';

import BasicRouters from "routes/Router";
import BasicRedirects from "routes/Redirect"

const hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {BasicRouters.map((prop, key) => {
        return <Route exact path={prop.path} component={prop.component} key={key} />;
      })}
      {BasicRedirects.map((prop, key) => {
        return <Redirect from={prop.from} to={prop.to} key={key} />;
      })}
    </Switch>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
