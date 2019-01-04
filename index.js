const express = require("express");
const socket = require("socket.io");
const config = require("./config");
const app = express();

const server = app.listen(config.PORT, () =>
  console.log(`Server started on PORT ${config.PORT}`)
);

const io = socket(server);
io.on("connection", socket => {
  console.log(`New socket connection with id: ${socket.id}`);
  socket.on("stream", image => {
    console.log("sending");
    socket.broadcast.emit("stream", image);
  });
  socket.on("canvas", image => {
    console.log("sending");
    socket.broadcast.emit("canvas", image);
  });
});
