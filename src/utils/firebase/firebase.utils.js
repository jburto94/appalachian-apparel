import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxOy9Qr_amEh7kWHRBPtjg2ekpx1LbXhQ",
  authDomain: "applachian-apparel.firebaseapp.com",
  projectId: "applachian-apparel",
  storageBucket: "applachian-apparel.appspot.com",
  messagingSenderId: "948287671102",
  appId: "1:948287671102:web:d0cf01330776d37c327a6f"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);