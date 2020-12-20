import React from "react";

const DEFAULT_STYLE = {
  display: "inline-block",
  padding: "16px",
  textAlign: "center",
  margin: "16px",
  border: "1px solid black",
};

const charComponent = (props) => {
  return (
    <span style={DEFAULT_STYLE} onClick={props.removeChar}>
      {props.char}
    </span>
  );
};

export default charComponent;
