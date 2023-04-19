import React from "react";
// import { Component } from "react";

// Error handling
import PropTypes from "prop-types";

class ClassComponent extends React.Component {
  /* class ClassComponent extends Component {}*/

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
        <h1> Hello World! with ClassComponent</h1>
        <h2>{/* {this.props.name} is {this.props.status} */}</h2>
        <h2>{name}</h2>
        <h2>{status}</h2>
      </div>
    );
  }
}

// Error handling
// // Set default value when there's no input
// ClassComponent.defaultProps = {
//   name: "Jin Kim",
//   status: "human",
// };

// Careful with the spelling of propTypes
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

export default ClassComponent;
