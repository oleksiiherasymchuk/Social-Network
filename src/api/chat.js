let subscribes = {
  messagesReceived: [],
  statusChanged: [],
};

let ws = null;

const changeStatus = (status) => {
  subscribes["statusChanged"].forEach((s) => s(status));
};

const cleanUp = () => {
  console.log("clean up");
  ws?.removeEventListener("close", closeHandler);
  ws?.removeEventListener("message", messageHandler);
  ws?.removeEventListener("error", errorHandler);
  ws?.removeEventListener("open", openHandler);
};

const closeHandler = () => {
  console.log("close handler");
  changeStatus("pending");
  setTimeout(createChannel, 3000);
};

const messageHandler = (e) => {
  debugger;
  console.log("message handler", e);
  //   console.log(e);
  let newMessage = JSON.parse(e.data);
  subscribes["messagesReceived"].forEach((m) => m(newMessage));
};

const errorHandler = () => {
  console.log("error handler");
  changeStatus("error");
  console.error("Error handler");
};

const openHandler = () => {
  console.log("open handler");
  changeStatus("ready");
};

const createChannel = () => {
  // debugger
  console.log("create channel");
  cleanUp();
  ws?.close();
  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  changeStatus("pending");
  console.log(ws);
  ws?.addEventListener("close", closeHandler);
  ws?.addEventListener("message", messageHandler);
  ws?.addEventListener("error", errorHandler);
  ws?.addEventListener("open", openHandler);
};

export const chatAPI = {
  start() {
    createChannel();
  },
  stop() {
    subscribes["messagesReceived"] = [];
    subscribes["statusChanged"] = [];
    cleanUp();
    ws?.close();
  },
  subscribe(event, callback) {
    subscribes[event].push(callback);
    return () => {
      subscribes[event] = subscribes[event].filter((c) => c !== callback);
    };
  },
  unsubscribe(event, callback) {
    subscribes[event] = subscribes[event].filter((c) => c !== callback);
  },
  sendMessage(message) {
    ws?.send(message);
    // ws?.send("Test sms");
  },
};
