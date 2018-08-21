import "./Spinner.css";
import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
