import React from "react";

export const ArticleContainer = props => (
  <div>
    <div>{props.title}</div>
    <div>{props.snippet}</div>
    <div>{props.url}</div>
    <div>
      <button className="js-save-article" id={props.id}>Save Article</button>
    </div>
  </div>

);
