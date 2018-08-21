import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/header/Header";
import Container from "./components/container/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";
import ScrollToTop from "./components/utils/ScrollToTop";
import { AUTHENTICATED } from "./constants/action-types";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store";
import { adminURL } from "./constants/urls";
const user__data = JSON.parse(localStorage.getItem("user__data"));
if (user__data) {
  store.dispatch({ type: AUTHENTICATED, payload: user__data });
}

class App extends Component {
  state = {
    programs: [],
    category: []
  };
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ScrollToTop>
            <div className="wrapper">
              <link
                href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700|Open+Sans"
                rel="stylesheet"
              />
              {/* <Header /> */}
              {/* <Container /> */}

              <Route path="/" component={Header} />
              <Route path="/" component={Container} />
            </div>
          </ScrollToTop>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
