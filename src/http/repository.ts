import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  getDocs,
  setDoc,
  doc,
  query,
  collection,
  where,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { User } from "../contexts/UserContext";

let app: any;

export function initFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDmx2dhZrUXHVWLZh2bQOXZpdwMlE2fZ4g",
    projectId: "medtracker-5da4f",
    authDomain: "medtracker-5da4f.firebaseapp.com",
    storageBucket: "gs://medtracker-5da4f.appspot.com",
  };

  if (!app) app = initializeApp(firebaseConfig);

  return app;
}

initFirebase();
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

export const searchItem = async (type: string) => {
  const items = query(collection(db, "medicines"), where("type", "==", type));
  const bucket: any[] = [];
  (await getDocs(items)).forEach((doc) => bucket.push(doc.data()));
  return bucket;
};

export const fetchUseritems = async (userId: string) => {
  const docRef = doc(db, "user_items", userId);
  const docSnap = await getDoc(docRef);

  console.log(docSnap.data());
  return (docSnap.data() as any).items || [];
};

export const updateUserItems = (userId: string, data: any) => {
  return setDoc(doc(db, "user_items", userId), { items: data });
};

export const fetchUserDocs = async (userId: string) => {
  const docRef = doc(db, "user_documents", userId);
  const docSnap = await getDoc(docRef);

  console.log(docSnap.data());
  return (docSnap.data() as any).items || [];
};

export const updateUserDocs = async (userId: string, data: any) => {
  return setDoc(doc(db, "user_documents", userId), { items: data });
};

export const uploadImage = async (
  userId: string,
  file: File
): Promise<string> => {
  console.log("Hello");
  const storage = getStorage();
  const storageRef = ref(storage, userId + file.name);

  // 'file' comes from the Blob or File API
  const resp = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(resp.ref);
  return url;
};
