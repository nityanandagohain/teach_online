import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:4000");

function emitVideo (canvas) {
  socket.emit("stream", canvas.toDataURL("image/webp"));
};

function subscribeToVideo (cb){
    console.log("recc");
    socket.on("stream", image => cb(null, image));
};

export {
    emitVideo,
    subscribeToVideo
}