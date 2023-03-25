// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// TODO: ENV FIle

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4ocpLhHV6Aa2eiDD2I-zpviqGK8nyd_A",
  authDomain: "book2man-5b19b.firebaseapp.com",
  projectId: "book2man-5b19b",
  storageBucket: "book2man-5b19b.appspot.com",
  messagingSenderId: "841720546414",
  appId: "1:841720546414:web:f02eab316009894012527f",
  measurementId: "G-H6GK28YEBX"
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREID
// };



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log(process.env.REACT_APP_APPID)