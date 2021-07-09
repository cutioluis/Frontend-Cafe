import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Comunidad from "../container/Comunidad";

import NotFound from "../container/NotFound";
import Home from "../container/Home";
import Login from "../container/Login";
import Blog from "../container/Blog";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/comunidad">
          <Comunidad />
        </Route>
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route exact>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default App;
