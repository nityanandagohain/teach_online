import React, { Component } from "react";
import {emitVideo} from "../api/socketconn";

class RecordVideo extends Component {
  recordSt = () => {
    console.log("Stream started");
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msgGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ video: true }, this.loadCam, this.loadFail);
    }
    setInterval(() => {
      this.viewVideo(this.refs.video, this.context);
    }, 300);
  };

  loadCam = stream => {
    this.refs.video.srcObject = stream;
    console.log("Camera connected");
  };

  loadFail = () => {
    console.log("Couldn't connect to camera");
  };

  viewVideo = (video, context) => {
    context.drawImage(video, 0, 0, context.width, context.height);
    emitVideo(this.refs.canvas);
  };
  componentDidMount = () => {
    const canvas = this.refs.canvas;
    this.context = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 280;
    canvas.style.display = "none";
    this.context.width = canvas.width;
    this.context.height = canvas.height;
    this.recordSt();
  };
  render() {
    return (
      <div>
        <p>In record video</p>
        <video
          src=""
          ref="video"
          style={{ width: 580, height: 280 }}
          autoPlay={true}
        />
        <canvas id="preview" ref="canvas" />
      </div>
    );
  }
}

export default RecordVideo;
