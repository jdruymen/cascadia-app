import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC7KSLi-R_dBEfOpDh-d36d63SRydEr_B0",
    authDomain: "cascadia-app.firebaseapp.com",
    projectId: "cascadia-app",
    storageBucket: "cascadia-app.appspot.com",
    messagingSenderId: "330759005567",
    appId: "1:330759005567:web:c3bdb29493924c775c664a",
    measurementId: "G-XSC1TTF3ZT"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase