const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Nurzhan" },
    { id: 2, name: "Aliya" },
    { id: 3, name: "Aygerim" },
    { id: 4, name: "Anna" },
    { id: 5, name: "Ella" },
    { id: 6, name: "Asli" },
    { id: 7, name: "Asiye" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How r you" },
    { id: 3, message: "Good, u?" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Tratata" },
    { id: 6, message: "Lalala" },
    { id: 7, message: "Ahaha" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 7, message: body }],
      };
    }

    default:
      return state;
  }
};

export default dialogsReducer;
