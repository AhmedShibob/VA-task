import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ActionButton from "./actionButtons/ActionButton";

function Controls({
  incrementLabel,
  decrementLabel,
  resetLable,
  increment,
  decrement,
  resetCount,
}) {
  return (
    <div className="controls">
      <ActionButton
        className="is-increment"
        onClick={increment}
        label={incrementLabel}
      />
      <ActionButton
        className="is-decrement"
        onClick={decrement}
        label={decrementLabel}
      />
      <ActionButton
        className="is-reset"
        onClick={resetCount}
        label={resetLable}
      />
    </div>
  );
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  resetCount: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
  resetLable: PropTypes.string,
};

Controls.defaultProps = {
  incrementLabel: "+",
  decrementLabel: "-",
  resetLable: "reset",
};

export default Controls;
