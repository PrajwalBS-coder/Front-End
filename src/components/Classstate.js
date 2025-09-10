import { Component } from "react";
import React from "react";

class Example_State extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to React",
    };
  }
  changeMessage() {
    this.setState({ message: "Thanks for clicking" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Change Message</button>
      </div>
    );
  }
}
export default Example_State;
