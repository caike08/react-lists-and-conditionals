import React, { Component } from "react";
import logo from "./logo.svg";
import ValidationComponent from "./components/ValidationComponent/ValidationComponent";
import CharComponent from "./components/CharComponent/CharComponent";
import "./App.css";

class App extends Component {
  state = {
    textLength: 0,
    text: "",
  };

  inputChangeHandler = (event) => {
    const text = event.target.value;

    this.setState({
      text,
      textLength: text.length,
    });
  };

  charRemoveHandler = (index) => {
    const { text } = this.state;
    // Create copy of text to do the change, since in JS objects and arrays are reference types,
    // and this.state.text is a pointer to the actual value
    const textCopy = text;

    const textBeforeIndex = textCopy.substr(0, index); // from zero until index
    const textAfterIndex = textCopy.substr(index + 1, textCopy.length); // next element until end of list

    this.setState({ text: textBeforeIndex + textAfterIndex });
  };

  render() {
    const { textLength, text } = this.state;

    // I could have used text.split('') here too
    const charArray = [...text];

    const charListToRender =
      textLength && charArray.length > 0 ? (
        <div className="App-charList">
          {charArray.map((char, index) => {
            return (
              <CharComponent
                key={`${char}-${index}`}
                char={char}
                removeChar={() => this.charRemoveHandler(index)}
              />
            );
          })}
        </div>
      ) : null;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{`Lists & Conditionals`}</h1>
        </header>

        <input
          type="text"
          className="App-input"
          onChange={this.inputChangeHandler}
        />

        <ValidationComponent textLength={textLength} />

        {charListToRender}
      </div>
    );
  }
}

export default App;
