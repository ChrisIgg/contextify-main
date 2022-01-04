import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const styles = {
  buttonFont: {
    fontFamily: "Ubuntu, sans-serif",
  },
};

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button
            style={styles.buttonFont}
            className="btn btn-dark mb-3"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h6>
          <strong>
            &copy; {new Date().getFullYear()} - Ami Asokumar, Chris Garcia,
            Ricardo Garcia, Chris Insignares, Hugo Yanez
          </strong>
        </h6>
        <h6>Powered by React, Styled by Bootstrap</h6>
      </div>
    </footer>
  );
};

export default Footer;
