import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AvisDePassage } from "./Component/AvisDePassage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" Component={App} />
      <Route path="/AvisDePassage" component={AvisDePassage} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
