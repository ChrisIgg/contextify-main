import React from "react";

const output = ({ answer, output }) => {
  if (answer) {
    return (
      <div>
        <h1>
          {answer} {output}
        </h1>
      </div>
    );
  }
  return <div></div>;
};

export default output;
