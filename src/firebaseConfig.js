import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgTMl9iPAllldNHdOCePwxPhzF-4YZ5sM",
  authDomain: "communi-queer.firebaseapp.com",
  databaseURL: "https://communi-queer-default-rtdb.firebaseio.com/",
  projectId: "communi-queer",
  storageBucket: "communi-queer.appspot.com",
  messagingSenderId: "744794559329",
  appId: "1:744794559329:web:15767921be37d3d9f2ab20",
  measurementId: "G-9J9QVC8K2G",
};

const app = initializeApp(firebaseConfig);

export default app;
