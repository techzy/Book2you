

import { initializeAppCheck, ReCaptchaV3Provider }  from "firebase/app-check";

const firebaseConfig = {
    apiKey: "AIzaSyC_87AAUDg5AGkpVosFiJL_hNljEnWis8E",
    authDomain: "book2man-prod-22d77.firebaseapp.com",
    projectId: "book2man-prod-22d77",
    storageBucket: "book2man-prod-22d77.appspot.com",
    messagingSenderId: "54109850356",
    appId: "1:54109850356:web:4752e0ca8287368013eca1",
    measurementId: "G-DZSLLTR7W7"
  };
  // Import the functions you need from the SDKs you need




// Initialize Firebase
export const app = initializeAppCheck(firebaseConfig, {
  provider: new ReCaptchaV3Provider('6LfEYFElAAAAAOqqbA95erTT_d689-OFVnZfFVSM'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});