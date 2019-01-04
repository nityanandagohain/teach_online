import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import { subscribeToCanvas } from "../api/socketconn";

class CanvasRecieve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    subscribeToCanvas((err, image) => {
      console.log("recieving");
      this.setState({
        data: image
      });
    });
  }
  render() {
    return (
      <div>
        <CanvasDraw
          disabled
          hideGrid
          immediateLoading={true}
          canvasWidth = {800}
          ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
          saveData={this.state.data}
        />
      </div>
    );
  }
}

export default CanvasRecieve;
