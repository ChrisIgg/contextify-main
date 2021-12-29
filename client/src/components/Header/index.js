import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "5rem",
    wrap: "flex-wrap",
  },
};
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div style={styles.header}>
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: "3rem" }}>
            Contextify
          </h1>
        </Link>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
      <div style={styles.links}>
        <Link className="btn btn-lg btn-primary m-2" to="/me">
          Weight
        </Link>
        <Link className="btn btn-lg btn-primary m-2" to="/me">
          Distance
        </Link>
        <Link className="btn btn-lg btn-primary m-2" to="/me">
          Time
        </Link>
      </div>
    </header>
  );
};

export default Header;
