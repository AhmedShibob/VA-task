import React, { Component } from "react";
import Controls from "../components/Controls";

export class Controller extends Component {
  render() {
    return <Controls {...this.props} />;
  }
}

export default Controls;
