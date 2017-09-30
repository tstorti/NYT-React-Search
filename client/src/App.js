import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Articles from "./pages/Articles";
import SavedArticles from "./pages/SavedArticles";

const App = () =>
  <Router>
    <div>
      <Articles>Articles</Articles>
      <SavedArticles></SavedArticles>
    </div>
  </Router>;

export default App;
