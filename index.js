const express = require("express");
const socket = require("socket.io");
const config = require("./config");
const mongoose = require("mongoose");
const ejwt = require("express-jwt");
const bodyParser = require("body-parser");
const app = express();
const users = require("./routes/users");

mongoose
  .connect(
    config.MONGODB_URI,
    { useCreateIndex: true, useNewUrlParser: true }
  )
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));
mongoose.set("useFindAndModify", false);

// Middleware
app.use(bodyParser.json());

// Protect routes
app.use(
  ejwt({ secret: config.JWT_SECRET }).unless({
    path: ["/users/register", "/users/auth"]
  })
);

app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(err.status).send({ message: err.message });
    return;
  }
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/users", users);

const server = app.listen(config.PORT, () =>
  console.log(`Server started on PORT ${config.PORT}`)
);

const io = socket(server);
io.on("connection", socket => {
  console.log(`New socket connection with id: ${socket.id}`);
  socket.on("stream", image => {
    socket.broadcast.emit("stream", image);
  });
  socket.on("canvas", image => {
    socket.broadcast.emit("canvas", image);
  });
});
