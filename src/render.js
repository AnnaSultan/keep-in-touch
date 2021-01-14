import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addMessage } from "./redux/state";
import { addPost, updateNewPostText } from "./redux/state";
import { BrowserRouter, Route } from "react-router-dom";

// addPost("Samurai");

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
