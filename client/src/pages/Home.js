import React from "react";
const styles = {
  home: {
    marginTop: "5rem",
    textAlign: "center",
  },
};
function Home() {
  return (
    <div style={styles.home}>
      <h1>Welcome to Contextify</h1>
      <h2>Please choose one of the above sections to get started!</h2>
    </div>
  );
}

export default Home;
