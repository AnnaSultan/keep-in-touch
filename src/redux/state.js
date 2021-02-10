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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 7, message: body });
      this._callSubscriber(this._state);
    }
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
