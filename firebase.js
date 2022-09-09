import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB63ZQYoagjFyYwqk3IVYjV5d9BprvfZDo",
  authDomain: "disney-clone-7953f.firebaseapp.com",
  projectId: "disney-clone-7953f",
  storageBucket: "disney-clone-7953f.appspot.com",
  messagingSenderId: "444701532507",
  appId: "1:444701532507:web:64c2619c80d83400d37a7e",
  measurementId: "G-EVMFL3WJCB",
};

const db = (
  firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
).firestore();

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

// const db = app.firestore();

export { db };
