import React, { Component } from "react";

class CountNo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(
      { count: this.state.count + 1 },
      () => console.log(this.state.count) //Here The Value will print after increment
    );
    console.log(this.state.count); //Here The Value will print first then increment
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        count{this.state.count}
        <br></br>
        <button onClick={() => this.incrementFive()}>Increment</button> {/* Here Even though we are calling incrementFive() it will print 5 times but the value will be 1 because it is async*/}
      </div>
    );
  }
}

export default CountNo;
