import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import Button from "@material-ui/core/Button";
import { emitCanvas } from "../api/socketconn";

class DrawOnCanvas extends Component {
  state = {
    brushRadius: 1
  };
  componentDidMount = () => {
    setInterval(() => {
      emitCanvas(this._canvas.getSaveData());
    }, 500);
  };
  clearCanvas = () => {
    this._canvas.clear();
  };
  undoCanvas = () => {
    this._canvas.undo();
  };
  increaseBrushRadius = () => {
    this.setState({
      brushRadius: this.state.brushRadius + 0.5
    });
  };
  decreaseBrushRadius = () => {
    //checking so that the value of brushRadius is not < 0
    if (this.state.brushRadius > 0.5) {
      this.setState({
        brushRadius: this.state.brushRadius - 0.5
      });
    }
  };
  render() {
    return (
      <div>
        <CanvasDraw
          canvasWidth={window.innerWidth - 50}
          canvasHeight={window.innerHeight - 500}
          brushColor={"#111"}
          lazyRadius={0}
          brushRadius={this.state.brushRadius}
          ref={canvas => {
            this._canvas = canvas;
          }}
        />
        <p>{this.state.brushRadius}</p>
        <Button onClick={this.clearCanvas}>
          <strong>CLEAR</strong>
        </Button>
        <Button onClick={this.undoCanvas}>
          <strong>UNDO</strong>
        </Button>
        <Button
          onClick={this.increaseBrushRadius}
          style={{ marginLeft: 40, fontSize: 30 }}
        >
          <strong>+</strong>
        </Button>
        <Button onClick={this.decreaseBrushRadius}>
          <strong style={{ fontSize: 30 }}>-</strong>
        </Button>
        
      </div>
    );
  }
}

export default DrawOnCanvas;
