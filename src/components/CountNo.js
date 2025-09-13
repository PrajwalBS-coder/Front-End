import React, { Component } from "react";

class CountNo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({ count: this.state.count + 1 }, () =>
      console.log(this.state.count)//Here The Value will print after increment
    );
    console.log(this.state.count);//Here The Value will print first then increment
  }

  render() {
    return (
      <div>
        count{this.state.count}
        <br></br>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default CountNo;
