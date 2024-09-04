import React, { Component } from "react";
import HomePage from "./HomePage";
import Loginpage from "./Loginpage";
class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggenIn: false,
    };
  }
  render() {
    const { isLoggenIn } = this.state;
    let element;
    element = isLoggenIn ? <HomePage /> : <Loginpage />;
    // if (isLoggenIn) {
    //   element = <HomePage />;
    // } else {
    //   element = <Loginpage />;
    // }

    return <div>{element}</div>;
  }
}

export default CONDITIONAL_RENDERING;
