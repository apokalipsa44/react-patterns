export const counterComponentCode =
`import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseCount, decreaseCount } from "../actions/index";

function Counter() {
  return (
    <div>
      <h1>Counter app</h1>
      <h1> {this.props.count} </h1>
      <button onClick={this.props.handleIncrease}> Increase </button>
      <button onClick={this.props.handleDecrease}> Decrease </button>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    count: state.counter.count,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleIncrease: increaseCount,
      handleDecrease: decreaseCount,
    },
    dispatch
  );
}

export default Counter;`
