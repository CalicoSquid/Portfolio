import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getFirestore, 
  collection, 
  doc, 
  getDocs, 
  getDoc,
  addDoc,
 } from "firebase/firestore/lite"

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
//const usersRef = collection(db, "users")

export async function getProjects() {
  try {
    const querySnapshot = await getDocs(projectsRef)
    const dataArr = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
  }))
  return dataArr 
  }catch (err) {
    return {error: err}
  }
     
}

export async function getProject(id) {
  const docRef = doc(db, "projects", id)
  const docSnapshot = await getDoc(docRef)
  const project = docSnapshot.data()
  return project
}

export async function submitContactForm(name, email, message) {
  try {
    const submissionRef = await addDoc(projectsRef, {
      name,
      email,
      message,
    });

    // Trigger Cloud Function to send email
    const cloudFunctionURL =
      "YOUR_CLOUD_FUNCTION_URL"; // Replace with your actual Cloud Function URL

    await axios.post(cloudFunctionURL, {
      name,
      email,
      message,
    });

    return "Form submitted successfully";
  } catch (err) {
    return { error: err };
  }
}
