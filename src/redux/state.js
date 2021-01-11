let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likeCount: 12 },
      { id: 2, message: "It's my first post", likeCount: 23 },
      { id: 2, message: "Super post", likeCount: 23 },
      { id: 2, message: "Another awsome post", likeCount: 23 },
      { id: 2, message: "Check this out!", likeCount: 23 },
    ],
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
  },

  sidebarPage: {
    friends: [
      { id: 1, friendName: "Aliya", friendSurname: "Nursultanova" },
      { id: 2, friendName: "Ayge", friendSurname: "Nursultanova" },
      { id: 3, friendName: "Anna", friendSurname: "Nursultanova" },
      { id: 4, friendName: "Nurzhan", friendSurname: "Nursultanov" },
    ],
  },
};

export default state;
