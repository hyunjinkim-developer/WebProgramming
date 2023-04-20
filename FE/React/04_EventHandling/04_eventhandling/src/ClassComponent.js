import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "HyunJin Kim",
    };
    // this : meaning this cliss

    // this.printConsole = this.printConsole.bind(this);
  }

  /* To use line below, must  bind function in constructor like
  this.printConsole = this.printConsole.bind(this); */
  //   printConsole() {
  //     console.log(this);
  //     console.log("Click button!", this.state);
  //   }

  printConsole = () => {
    console.log(this);
    console.log("Click button!", this.state);
  };

  printConsolewithParameter = (msg) => {
    console.log(msg);
  };

  render() {
    return (
      <>
        <div>Using event in class component</div>
        {/* Set only function on onClick with no parameter */}
        <button onClick={this.printConsole}>Print Console</button>
        {/* Set function on onClick with parameter */}
        <button onClick={() => this.printConsolewithParameter("Hello!")}>
          Print Console with Parameter
        </button>
      </>
    );
  }
}

export default ClassComponent;
