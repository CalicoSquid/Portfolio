
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, getDocs, getDoc } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyAgyyc8kPbTeTTIXPLzHAu1cW9qRF9190Q",
  authDomain: "portfolio-projects-1612f.firebaseapp.com",
  projectId: "portfolio-projects-1612f",
  storageBucket: "portfolio-projects-1612f.appspot.com",
  messagingSenderId: "347681796098",
  appId: "1:347681796098:web:50faa83b411524e2d2b71b"
};




const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const projectsRef = collection(db, "projects")

export async function getProjects() {

      const querySnapshot = await getDocs(projectsRef)
      const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    
    return dataArr 
}

export async function getProject(id) {
  const docRef = doc(db, "projects", id)
  const docSnapshot = await getDoc(docRef)
  const project = docSnapshot.data()
  return project
}