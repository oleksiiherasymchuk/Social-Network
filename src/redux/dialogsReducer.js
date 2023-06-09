import { v1 } from "uuid";

const SEND_MESSAGE = "dialogs/SEND_MESSAGE";
const DELETE_MESSAGE = "dialogs/DELETE_MESSAGE";

let initialDialogsState = {
  dialogs: [],
  messages: [],
  // { id: v1(), sentAt: '14:14' , message: "Glory to Ukraine" }
};

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;
  return currentTime;
}

const dialogsReducer = (state = initialDialogsState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: v1(),
        sentAt: getCurrentTime(),
        message: action.payload,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((m) => m.id !== action.payload),
      };
    default:
      return state;
  }
};

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});

export const deleteMessage = (message) => ({
  type: DELETE_MESSAGE,
  payload: message,
});

export default dialogsReducer;
