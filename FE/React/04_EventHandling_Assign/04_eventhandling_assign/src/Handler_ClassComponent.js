import React from "react";

class HandlerClass extends React.Component {
  constructor() {
    super();

    this.state = {
      greetings: "HelloWorld!",
    };
  }

  printGreetings = () => {
    this.setState({ greetings: "Goodbye World!" });
  };

  render() {
    return (
      <>
        <h1>{this.state.greetings}</h1>
        <button onClick={this.printGreetings}>Change Greeting</button>
      </>
    );
  }
}

export default HandlerClass;
