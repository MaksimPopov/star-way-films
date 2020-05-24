import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "../config/routes";

import Header from "../components/Header";
import Homepage from "./Homepage";
import Footer from "./Footer";
import MoviePage from "./MoviePage";

import "../css/index.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={routes.home} component={Homepage} />
        <Route path={routes.movie} component={MoviePage} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
