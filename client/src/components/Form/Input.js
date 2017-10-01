import React from "react";
import "./Form.css";

export const Input = props =>
  <div className="input-container">
    <input className="input-field" {...props} />
  </div>;
