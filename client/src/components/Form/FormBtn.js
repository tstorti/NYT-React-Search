import React from "react";
import "./Form.css";

export const FormBtn = props =>
  <button {...props} className="btn-search">
    {props.children}
  </button>;
