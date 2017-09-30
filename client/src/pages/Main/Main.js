import React, { Component } from "react";
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
