// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf3knpnLn5usQ63ZAhFhDH-j67YHW6rRQ",
  authDomain: "humanityfirebase.firebaseapp.com",
  databaseURL: "https://humanityfirebase-default-rtdb.firebaseio.com",
  projectId: "humanityfirebase",
  storageBucket: "humanityfirebase.appspot.com",
  messagingSenderId: "428050493336",
  appId: "1:428050493336:web:b0cd18515dee7f425885ed"
};

// Initialize Firebase
let app;
if(firebase.apps.length ===0) {
    app=firebase.initializeApp(firebaseConfig);
}else{
    app=firebase.app()
}
const auth= firebase.auth()
export {auth};