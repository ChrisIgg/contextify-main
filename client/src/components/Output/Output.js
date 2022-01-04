import { React } from "react";

import Confirm from "../Confirm/Confirm";
const Output = ({ answer, output }) => {
  if (answer) {
    return (
      <div>
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
