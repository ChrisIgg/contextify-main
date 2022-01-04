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
      </div>
    );
  }
  return <div></div>;
};

export default output;
