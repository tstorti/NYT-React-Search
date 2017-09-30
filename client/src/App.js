import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

const App = () =>
  <Router>
    <div>
      <Main exact path="/" component = {Main}></Main>
      <Switch>
        <Search exact path="/search" component = {Search}></Search>
        <Saved exact path="/saved" component = {Saved}></Saved>
      </Switch>
    </div>
  </Router>;

export default App;
