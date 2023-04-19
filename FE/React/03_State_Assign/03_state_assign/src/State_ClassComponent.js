import React from "react";

class StateClassComponent extends React.Component {
  state = {
    counter: 0,
  };

  doubleUp = () => {
    this.setState((value) => ({
      counter: value.counter + 2,
    }));
  };

  down = () => {
    this.setState((value) => ({
      counter: value.counter - 1,
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <>
        <h1>{counter}</h1>
        <button onClick={this.doubleUp}>Double Up</button>
        <button onClick={this.down}>Down</button>
      </>
    );
  }
}

export default StateClassComponent;
