import React from "react";
import "./ValidationComponent.css";

const MIN_TEXT_LENGTH = 5;

const validationComponent = (props) => {
  const { textLength } = props;
  let text = "Text too short 😥";

  if (textLength > MIN_TEXT_LENGTH) {
    text = "Text long enough 😁";
  }

  return <p className="text-result">{text}</p>;
};

export default validationComponent;
