// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMLCZt-2dfqu42Hm_Y2N9-DQLPdMQieFw",
  authDomain: "news-app-7ced9.firebaseapp.com",
  projectId: "news-app-7ced9",
  storageBucket: "news-app-7ced9.appspot.com",
  messagingSenderId: "289493410530",
  appId: "1:289493410530:web:72f3ae4332464abef6b4bb",
  measurementId: "G-E149RV0TNL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
