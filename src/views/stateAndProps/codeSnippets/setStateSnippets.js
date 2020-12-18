export const setStateCode=`import React, { Component } from "react";

export default class SetStateView extends Component {
  state = {
    isOpen: false,
    name: "DonPiano",
  };

  handleButtonClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {!this.state.isOpen && (
          <button onClick={this.handleButtonClick.bind(this)}>Login</button>
        )}

        {this.state.isOpen && (
          <div>
            <h2>Logged as {this.state.name}</h2>
            <button onClick={this.handleButtonClick.bind(this)}>Logout</button>
          </div>
        )}
      </div>
    );
  }
}`

export const exampleState=`initial state is:
state = {
  isOpen: false,
  name: "DonPiano",
};`

export const setStateBasicCode = `state = {
  // state object
};

stateModifyingFunction() {
  this.setState({
    // new state object
  });
}`;