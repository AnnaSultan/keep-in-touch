const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 23 },
    { id: 2, message: "Super post", likeCount: 23 },
    { id: 2, message: "Another awsome post", likeCount: 23 },
    { id: 2, message: "Check this out!", likeCount: 23 },
  ],
  newPostText: "Super Samurai",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};

export default profileReducer;
