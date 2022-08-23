import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxOy9Qr_amEh7kWHRBPtjg2ekpx1LbXhQ",
  authDomain: "applachian-apparel.firebaseapp.com",
  projectId: "applachian-apparel",
  storageBucket: "applachian-apparel.appspot.com",
  messagingSenderId: "948287671102",
  appId: "1:948287671102:web:d0cf01330776d37c327a6f"
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(obj => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  })

  await batch.commit();
};

export const getCategoriesAndDocs = async () => {
  const collectionRef = collection(db, 'categories');
  const collectionQuery = query(collectionRef);

  const querySnapshot = await getDocs(collectionQuery);
  const categoryMap = querySnapshot.docs.reduce((acc, snapshot) => {
    const { title, items } = snapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap
}

export const createUserDocFromAuth = async (userAuth, addiontalInformation) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (userSnapShot.exists()) {
    return userSnapShot;
  } else {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addiontalInformation
      });
    } catch (e) {
      console.log('error creating the user', e.message);
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return
  } else {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  } else {
    return await signInWithEmailAndPassword(auth, email, password);
  }
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);