import React from "react";

class ChangeFontColor extends React.Component {
  state = {
    color: "black",
    text: "검정색 글씨",
  };

  turnRed = () => {
    this.setState({ color: "red" });
    this.setState({ text: "빨간색 글씨" });
  };

  turnBlue = () => {
    this.setState({ color: "blue" });
    this.setState({ text: "파란색 글씨" });
  };

  render() {
    // Deconstructing assignment
    const { color, text } = this.state;

    return (
      <>
        <hr></hr>
        <h1 style={{ color: color }}>{text}</h1>
        <button onClick={this.turnRed}>빨간색</button>
        <button onClick={this.turnBlue}>피란색</button>
      </>
    );
  }
}

export default ChangeFontColor;
