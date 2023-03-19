import io from "socket.io-client";

let socket;

export const init = () => {
  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });
};

export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
};

export const subscribeChat = (cb) => {
  if (!socket) return;

  socket.on("receive-message", (message) => {
    console.log("Yeni mesaj var", message);
    cb(message);
  });
};

export const subscribeInitialMessages = (cb) => {
  if (!socket) return;

  socket.on("message-list", (messages) => {
    cb(messages);
  });
};
