import React from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

function Counter({ count, ...restProps }) {
  return (
    <div className="counter">
      <div>{count}</div>
      <Controls {...restProps} />
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number,
};

export default Counter;
