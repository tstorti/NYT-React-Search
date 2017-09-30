import React from "react";
import "./ArticleContainer.css";

export const ArticleContainer = props => (
  <div className="article-container">
    <div>{props.title}</div>
    <div>{props.date}</div>
    <div>{props.snippet}</div>
    <div>{props.url}</div>
    <div>
      <button onClick={() => props.saveArticle({id: props.id, title: props.title, snippet: props.snippet, url:props.url, date:props.date})} className="js-save-article">Save Article</button>
    </div>
  </div>

);
