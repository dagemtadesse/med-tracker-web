import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
import { User } from "../contexts/UserContext";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyDmx2dhZrUXHVWLZh2bQOXZpdwMlE2fZ4g",
  projectId: "medtracker-5da4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const updateUserInfo = async (userId: string, userInfo: User) => {
  return setDoc(doc(db, "users", userId), userInfo);
};

export const getUserInfo = async (userId: string) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};
