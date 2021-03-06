import React from "react";
import "./nav.css";

export const Nav = props =>(
  <div>
    <div className="header-primary">Welcome to NYT React Search</div>
    <div className="nav-container">
      <a className="nav-link" href="./">Home</a>
      <a className="nav-link" href="/saved">Saved</a>
      <a className="nav-link" href="/search">Search</a>
    </div>
  </div>
);
