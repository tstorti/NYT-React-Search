import React from "react";
import "./SavedArticleContainer.css";

export const SavedArticleContainer = props => (
  <div className="article-container">
    <div className="article-title">{props.title}</div>
    <div className="article-date">{props.date}</div>
    <div className="article-snippet">{props.snippet}</div>
    <div className="article-url">
      <a href={props.url}>{props.url}</a>
    </div>
    <div>
      <button onClick={() => props.deleteArticle(props.id)} className="btn-delete js-delete-article">Delete Article</button>
    </div>
  </div>

);
