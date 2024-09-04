import React, { Component } from "react";

class Card2 extends Component {
  render() {
    return (
      <div>
        <h1>Hello, I am from Card2</h1>
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default Card2;
