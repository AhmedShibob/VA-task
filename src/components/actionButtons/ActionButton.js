import React from "react";
import PropTypes from "prop-types";

function ActionButton({ className, onClick, label }) {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      <span>{label}</span>
    </button>
  );
}

ActionButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  className: PropTypes.string,
};

export default ActionButton;
