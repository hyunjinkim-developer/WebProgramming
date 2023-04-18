import { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    const title = "Hello World";

    return (
      <div className="test">
        <h1>{title}</h1>
        <label className="input">
          아이디 :
          <input type="text" name="id" />
        </label>
        <br></br>
        <label className="input">
          비밀번호 :
          <input type="password" name="pw" />
        </label>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Input;
