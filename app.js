const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));

const io = require("socket.io")(server);

let socketsConnected = new Set();

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);
  socketsConnected.add(socket.id);

  // total number of clients
  io.emit("clients-total", socketsConnected.size);

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
    socketsConnected.delete(socket.id);
    io.emit("clients-total", socketsConnected.size);
  });

  //incoming messages
  socket.on("message", (data) => {
    socket.broadcast.emit("chat-message", data);
  });

  // typing feedback
  socket.on("feedback", (data) => {
    socket.broadcast.emit("feedback", data);
  });
});
