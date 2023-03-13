import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCrOy7rZY6tW_M6X090WWhxROABUnPlKGk",
  authDomain: "oscarstore-fce04.firebaseapp.com",
  projectId: "oscarstore-fce04",
  storageBucket: "oscarstore-fce04.appspot.com",
  messagingSenderId: "585862733642",
  appId: "1:585862733642:web:4ad328f8ebf2138ead2bb3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();


const addLocation = (Direccion, Descripcion) => {
  db.collection("Direcciones")
    .add({
      Direccion: Direccion,
      Descripcion: Descripcion,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

