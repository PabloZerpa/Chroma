import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVUPFMB63Jct9MuRlm0gLu_y_gJT74_nk",
    authDomain: "chroma-a5b23.firebaseapp.com",
    projectId: "chroma-a5b23",
    storageBucket: "chroma-a5b23.appspot.com",
    messagingSenderId: "790717901364",
    appId: "1:790717901364:web:82f78dd58ed13f90c43861",
  };

  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
 const auth = fire.auth();

export {auth}
