import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Nav } from "../../components/Nav";

class Articles extends Component {
  state = {
    articles: [],
  };


  render() {
    return (
      <div>
          <Nav/>
      </div>
    );
  }
}

export default Articles;
