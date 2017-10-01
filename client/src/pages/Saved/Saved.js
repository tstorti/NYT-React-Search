import React, { Component } from "react";
import API from "../../utils/API";
import { SavedArticleContainer } from "../../components/SavedArticleContainer";

class Saved extends Component {
  state = {
    articles: [],
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  loadArticles = () => {
    API.getSavedArticles()
      .then(res => {
        //set the articles value to all of the articles returned by the search in DB
        this.setState({
          articles : res.data
        })
      })
      .catch(err => console.log(err));
  };

  //on mount, grab all the saved articles
  componentDidMount() {
    this.loadArticles();
  }

  render() {
    return (
      <div>
        {this.state.articles.map(article => (
        <SavedArticleContainer
            key = {article._id}
            id = {article._id}
            date = {article.date}
            title = {article.title}
            url = {article.url}
            snippet = {article.snippet}
            deleteArticle = {this.deleteArticle}
          />
          ))}
      </div>
    );
  }
}

export default Saved;
