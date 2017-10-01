import React from "react";
import "./ArticleContainer.css";

export const ArticleContainer = props => (
  <div className="article-container">
    <div className="article-title">{props.title}</div>
    <div className="article-date">{props.date}</div>
    <div className="article-snippet">{props.snippet}</div>
    <div className="article-url">
      <a href={props.url}>{props.url}</a>
    </div>
    <div>
      <button onClick={() => props.saveArticle({id: props.id, title: props.title, snippet: props.snippet, url:props.url, date:props.date})} className="btn-delete js-save-article">Save Article</button>
    </div>
  </div>

);
