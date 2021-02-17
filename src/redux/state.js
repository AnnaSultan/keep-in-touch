import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likeCount: 12 },
        { id: 2, message: "It's my first post", likeCount: 23 },
        { id: 2, message: "Super post", likeCount: 23 },
        { id: 2, message: "Another awsome post", likeCount: 23 },
        { id: 2, message: "Check this out!", likeCount: 23 },
      ],
      newPostText: "Super Samurai",
    },

    dialogsPage: {
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
    },

    sidebarPage: {
      friends: [
        { id: 1, friendName: "Aliya", friendSurname: "Nursultanova" },
        { id: 2, friendName: "Ayge", friendSurname: "Nursultanova" },
        { id: 3, friendName: "Anna", friendSurname: "Nursultanova" },
        { id: 4, friendName: "Nurzhan", friendSurname: "Nursultanov" },
      ],
    },
  },
  _callSubscriber() {
    console.log("State has changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state);
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default store;
window.store = store;
