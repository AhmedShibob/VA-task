/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
var randomColor = require("randomcolor");
import PropTypes from "prop-types";
import Slider from "@bit/nexxtway.react-rainbow.slider";
import { connect } from "react-redux";
import Counter from "./containers/Counter";

import {
  incrementNum,
  decrementNum,
  resetNum,
} from "../src/actions/counterActions";
import divide from "../node_modules/styled-components/node_modules/lodash/divide";

let interval;

function App(props) {
  const [value, setValue] = useState(1);
  const [incrementToggleAuto, setIncrementToggleAuto] = useState(false);
  const [decrementToggleAuto, setDecrementToggleAuto] = useState(false);
  const [color, setColor] = useState("rgb(255 255 255 / 50%)");



  useEffect(() => {

    window.addEventListener("keydown", handelKeyDown);


    changeBackgroundColor(parseInt(props.countArr[0], 16));

    if (incrementToggleAuto) {
      clearInterval(interval);
      interval = setInterval(() => {
        props.increment(0, value);
      }, 2000);
    } else if (decrementToggleAuto) {
      clearInterval(interval);
      interval = setInterval(() => {
        props.decrement(0, value);
      }, 2000);
    } else {
      clearInterval(interval);
    }

    return () => {
      window.removeEventListener("keydown", handelKeyDown);
    };
  }, [incrementToggleAuto, decrementToggleAuto, props.countArr[0]]);

  const changeBackgroundColor = (state) => {
    if (state == 0) {
      setColor((prev) => (prev = "#fff"));
    } else if (state > 0) {
      setColor((prev) => (prev = randomColor({ hue: "red", count: 100 })));
    } else if (state < 0) {
      setColor((prev) => (prev = randomColor({ hue: "green", count: 100 })));
    }
  };

  const handelKeyDown = (e) => {
    if (e.ctrlKey && e.code === "ArrowRight") {
      props.increment(0, value);
    }
    if (e.ctrlKey && e.code === "ArrowLeft") {
      props.decrement(0, value);
    }
  };

  return (
    <div
      id="appID"
      style={{ background: color[Math.floor(Math.random() * 6) + 1] }}
    >
      <Slider
        value={value}
        onChange={(e) => setValue(+e.target.value)}
        max={100}
      />

      <button
        className="is-increment"
        onClick={() => {
          setIncrementToggleAuto((prev) => !prev);
          setDecrementToggleAuto((prev) => false);
        }}
      >
        Increment Toggle Auto
      </button>

      <button
        className="is-decrement"
        onClick={() => {
          setDecrementToggleAuto((prev) => !prev);
          setIncrementToggleAuto((prev) => false);
        }}
      >
        Decrement Toggle Auto
      </button>

      <div className="container">
        <Counter
          increment={() => props.increment(0, value)}
          decrement={() => props.decrement(0, value)}
          resetCount={() => props.resetCount(0)}
          count={props.countArr[0]}
        />
        <Counter
          increment={() => props.increment(1, value * 2)}
          decrement={() => props.decrement(1, value * 2)}
          resetCount={() => props.resetCount(1)}
          count={props.countArr[1]}
        />
      </div>
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => {
  return {
    increment: (index, value) => {
      dispatch(incrementNum(index, value));
    },
    decrement: (index, value) => {
      dispatch(decrementNum(index, value));
    },
    resetCount: (index) => {
      dispatch(resetNum(index, 0));
    },
  };
};
export const mapStateToProps = (store) => {
  return {
    countArr: store.count,
  };
};

App.propTypes = {
  countArr: PropTypes.array,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  resetCount: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
