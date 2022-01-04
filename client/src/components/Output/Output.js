import { React } from "react";

import Confirm from "../Confirm/Confirm";
const Output = ({ answer, output }) => {
import React from "react";
const styles = {
  font: {
    fontFamily: "Ubuntu, sans-serif",
  },
};
const output = ({ answer, output }) => {
  if (answer) {
    return (
      <div style={styles.font}>
        <h1>
          {Math.round(answer)} {output}
        </h1>
        <Confirm />
      </div>
    );
  }
  return <div></div>;
};

export default Output;
