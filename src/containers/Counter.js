import React from "react";
import Controls from "../components/Counter";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Controller(props) {
  return <Controls {...props} count={props.count} />;
}

Controller.propTypes = {
  count: PropTypes.number,
};

export default Controls;
