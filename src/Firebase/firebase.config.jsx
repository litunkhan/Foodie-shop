
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxhS9d7lFcnkX4rHkhqqbYgIUYKnDY5wo",
  authDomain: "foodie-shop-110b4.firebaseapp.com",
  projectId: "foodie-shop-110b4",
  storageBucket: "foodie-shop-110b4.appspot.com",
  messagingSenderId: "196898381849",
  appId: "1:196898381849:web:3ee5d9d3f96e1ae9614a88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app