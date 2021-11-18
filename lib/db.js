import firebase from "./firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore();

export async function createUser(uid, data) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      uid,
      ...data,
    });
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    return e;
  }
}
