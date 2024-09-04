import React, { Component } from "react"; // Correct import

class Sara extends Component {
  // Make sure class name starts with an uppercase letter
  constructor(props) {
    super(props);
    this.state = {
      changedValue: "",
    };
  }

  handleOnChange = (e) => {
    this.setState(
      {
        changedValue: e.target.value,
      },
      () => {
        console.log(this.state.changedValue);
      }
    );
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} />
        <p className="p">{this.state.changedValue}</p>
      </div>
    );
  }
}

export default Sara;
