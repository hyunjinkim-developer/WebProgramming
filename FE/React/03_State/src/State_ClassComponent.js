import React from "react";
// import { Component } from "react";

class StateClassComponent extends React.Component {
  /* class ClassComponent extends Component {}*/
  // State object
  state = {
    counter: 0,
  };

  // Everytime the state changes, React render the page
  up = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  down = () => {
    this.setState((value) => ({
      counter: value.counter - 1,
    }));
  };

  render() {
    // const name = "Gromitt";

    // // Get data from parent class using props
    // console.log("this.props >>", this.props);

    // Destructuring Assignment
    // to access elements of object with variable
    const { name, status } = this.props; // { name: "Wallace", status: "human"}
    const { counter } = this.state;

    // render() is neccessary for ClassComponent
    return (
      <div>
        <h1> State with ClassComponent</h1>
        <h2>{/* {this.props.name} is {this.props.status} */}</h2>
        <h2>{name}</h2>
        <h2>{status}</h2>
        <h2>{counter}</h2>
        <button onClick={this.up}>Add number</button>
        {/* Set parameter of onClick funtion */}
        <button onClick={() => this.down("setParameter")}>Add number</button>
      </div>
    );
  }
}

export default StateClassComponent;
