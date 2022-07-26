import React from "react";
import ReactDOM from "react-dom";

import classes from "./Model.module.css";

const BackDrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const ModelBody = (props) => {
  return <div className={classes.model}>{props.children}</div>;
};

const Model = (props) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <BackDrop onClick={props.onClick} />
      <ModelBody >{props.children}</ModelBody>
    </React.Fragment>
  , document.getElementById("overlay"));
};

export default Model;
