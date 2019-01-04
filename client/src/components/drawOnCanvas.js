import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import { emitCanvas } from "../api/socketconn";

class DrawOnCanvas extends Component {
  componentDidMount = () => {
    setInterval(() => {
      emitCanvas(this._canvas.getSaveData());
    }, 500);
  };
  render() {
    return (
      <div>
        <CanvasDraw
            canvasWidth= {800}
          ref={canvas => {
            this._canvas = canvas;
          }}
        />
      </div>
    );
  }
}

export default DrawOnCanvas;
