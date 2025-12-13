// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK-LumJuwJvGwyhNGDwnxhPUYEUsKsn-g",
  authDomain: "netflix-clone-6aff6.firebaseapp.com",
  projectId: "netflix-clone-6aff6",
  storageBucket:"netflix-clone-6aff6.appspot.com",
  messagingSenderId: "967167511484",
  appId: "1:967167511484:web:5e3c11fa7dc664e19b39b9",
  measurementId: "G-1PX5W2W721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth=getAuth(app)