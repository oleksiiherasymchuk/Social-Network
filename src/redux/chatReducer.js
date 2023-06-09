import { v1 } from "uuid";
import { chatAPI } from "../api/chat";

const MESSAGES_RECEIVED = "chat/MESSAGES_RECEIVED";
const STATUS_CHANGED = "chat/STATUS_CHANGED";

let initialChatState = {
  messages: [
    {
      message: "asdasd",
      photo:
        "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
      userId: 2,
      userName: "samurai dimych",
      id: v1()
    },
    {
      message: "Glory to Ukraine",
      photo:
        "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=4",
      userId: 22342,
      userName: "Oleksii8",
      id: v1(),
      
    },
  ],
  status: "pending" | "ready" | "error",
};

const chatReducer = (state = initialChatState, action) => {
  switch (action.type) {
    case MESSAGES_RECEIVED:
      return {
        ...state,
        messages: [
          ...state.messages,
          ...action.payload.messages.map((m) => ({ ...m, id: v1() })),
        ].filter((m, index, array) => index >= array.length - 100),
      };
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export const actions = {
  messagesReceived: (messages) => ({
    type: MESSAGES_RECEIVED,
    payload: { messages },
  }),
  statusChanged: (status) => ({
    type: STATUS_CHANGED,
    payload: { status },
  }),
};

let _newMessageHandler = null;
let _statusChangedHandler = null;

const newMessageHandlerAC = (dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      debugger;
      dispatch(actions.messagesReceived(messages));
    };
  }
  return _newMessageHandler;
};

const statusChangedAC = (dispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
      dispatch(actions.statusChanged(status));
    };
  }
  return _statusChangedHandler;
};

export const startMessaging = () => async (dispatch) => {
  chatAPI.start();
  chatAPI.subscribe("messagesReceived", newMessageHandlerAC(dispatch));
  chatAPI.subscribe("statusChanged", statusChangedAC(dispatch));
};

export const stopMessaging = () => async (dispatch) => {
  // debugger
  chatAPI.unsubscribe("messagesReceived", newMessageHandlerAC(dispatch));
  chatAPI.unsubscribe("statusChanged", statusChangedAC(dispatch));
  chatAPI.stop();
};

export const sendMessage = (message) => async (dispatch) => {
  chatAPI.sendMessage(message);
};

export default chatReducer;
