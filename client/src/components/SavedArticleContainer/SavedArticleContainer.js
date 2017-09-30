import React from "react";
import "./SavedArticleContainer.css";

export const SavedArticleContainer = props => (
  <div className="article-container">
    <div>{props.title}</div>
    <div>{props.snippet}</div>
    <div>{props.url}</div>
    <div>
      <button onClick={() => props.deleteArticle(props.id)} className="js-delete-article">Delete Article</button>
    </div>
  </div>

);
