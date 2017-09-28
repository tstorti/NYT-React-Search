import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    title: "",
    date: "",
    url: "",
    searchTerm: "",
    startYear:"",
    endYear:"",
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", date: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticles = id => {
    API.deleteArticle(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
      //go get the articles
      console.log("search the api")
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div>Hello React</div>
        <Input
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          name="searchTerm"
          placeholder="Search Term"
        />
        <Input
          value={this.state.startYear}
          onChange={this.handleInputChange}
          name="startYear"
          placeholder="start year (optional)"
        />
        <Input
          value={this.state.endYear}
          onChange={this.handleInputChange}
          name="endYear"
          placeholder="end year (optional)"
        />
        <FormBtn
          onClick={this.handleFormSubmit}
        >
          Search NYT API
        </FormBtn>
      </div>
    );
  }
}

export default Articles;
