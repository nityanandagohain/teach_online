import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
// import HomePage from "./components/homePage";
import authPage from "./components/authPage";
import customAppBar from "./components/customAppBar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <customAppBar/>
          <authPage />
        </div>
      </Provider>
    );
  }
}

export default App;
