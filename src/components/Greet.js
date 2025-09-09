import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>Hello World! This is the Detection Microfrontend.</h1>
      {props.children}
    </div>
  );
};

export default Greet;
