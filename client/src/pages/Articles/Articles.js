import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../../components/Form";
import { ArticleContainer } from "../../components/ArticleContainer";

class Articles extends Component {
  state = {
    articles: [],
    searchTerm: "",
    startYear:"",
    endYear:"",
  };
  saveArticle = data => {
    API.saveArticle(data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
      //go get the articles
      console.log("search the api");
      API.getArticles(this.state.searchTerm, this.state.startYear, this.state.endYear)
      .then(res => {
        //cream filling
        console.log(res);
        this.setState({
          articles : res.data.response.docs
        });
      })
      .catch(err => console.log(err));
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
        <div>Hello Articles</div>
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
        
        <div>
          {this.state.articles.map(article => (
          <ArticleContainer
              key = {article._id}
              id = {article._id}
              date = {article.pub_date}
              title = {article.headline.main}
              url = {article.web_url}
              snippet = {article.snippet}
              saveArticle = {this.saveArticle}
            />
           ))}
        </div>
      </div>
    );
  }
}

export default Articles;
