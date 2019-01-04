import React, { Component } from "react";
import "./App.css";
import RecordVideo from "./components/recordVideo";
import RecieveVideo from "./components/recieveVideo";
import DrawOnCanvas from "./components/drawOnCanvas";
import CanvasRecieve from "./components/canvasRecieve";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disp: false,
      dispr: false
    };
  }
  changed = () => {
    this.setState({
      disp: !this.state.disp
    });
  };
  changer = () => {
    this.setState({
      dispr: !this.state.dispr
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.disp ? (
          <div>
            <strong>TEACHER</strong>
            <DrawOnCanvas />
            <RecordVideo />
          </div>
        ) : (
          <div />
        )}
        {this.state.dispr ? (
          <div>
            <strong>STUDENT</strong>
            <CanvasRecieve />
            <RecieveVideo />
          </div>
        ) : (
          <div />
        )}
        <button onClick={this.changed}>teacher</button>
        <button onClick={this.changer}>student</button>
      </div>
    );
  }
}

export default App;
