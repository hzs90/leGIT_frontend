// Main app
// Wrapping components to react-router and redux provider

import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/layout/Dashboard";
import Favourites from "./components/layout/Favourites";
import Gitusers from "./components/layout/Gitusers";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import store from "./store";

import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact={true} path="/" component={Landing} />
            <div className="container">
              <Route exact={true} path="/register" component={Register} />
              <Route exact={true} path="/login" component={Login} />
              <Route exact={true} path="/dashboard" component={Dashboard} />
              <Route exact={true} path="/favourites" component={Favourites} />
              <Route exact={true} path="/gitusers" component={Gitusers} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
