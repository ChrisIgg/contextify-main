import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Weight from "./pages/Weight";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Distance from "./pages/Distance";
import Time from "./pages/Time";
import Home from "./pages/Home";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Style for first div under <Router> (blue background color)
//style={{
// backgroundColor: "#48ACF0",
//}}

// Style for Header
//  style={{
//     backgroundColor: "#D8DBE2",
//   }}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh container-c">
          <div id="cloud-intro">
            <Header />
            <div className="container">
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/weight">
                <Weight />
              </Route>
              <Route exact path="/me">
                <Profile />
              </Route>
              <Route exact path="/profiles/:profileId">
                <Profile />
              </Route>
              <Route exact path="/distance">
                <Distance />
              </Route>
              <Route exact path="/time">
                <Time />
              </Route>
            </div>

            {/* <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          </div> */}
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
