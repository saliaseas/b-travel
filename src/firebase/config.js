import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVAJSrP-otwibr4Z9uxeGnDn07J6mQNNg",
  authDomain: "vue-chat-41b61.firebaseapp.com",
  projectId: "vue-chat-41b61",
  storageBucket: "vue-chat-41b61.appspot.com",
  messagingSenderId: "30891455605",
  appId: "1:30891455605:web:9d017ece5a9822f04f343c"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
