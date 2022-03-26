import firebase from "firebase/app";
import "firebase/database";

const config ={
    apiKey: "AIzaSyD9YTBMsst9g0D-JmZ7UEfenXgwdlQW9ts",
    authDomain: "fichat-4baa0.firebaseapp.com",
    projectId: "fichat-4baa0",
    storageBucket: "fichat-4baa0.appspot.com",
    messagingSenderId: "228653004164",
    appId: "1:228653004164:web:6cb4e95e1a03abc5d359d1"
}

firebase.initializeApp(config);
export default firebase.database();
