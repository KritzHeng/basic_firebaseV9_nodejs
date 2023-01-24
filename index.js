// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const db = getFirestore(app);

// Get a list of cities from your database
async function getStudent(db) {
  const Student = collection(db, 'Student');
  const studentSnapshot = await getDocs(Student);
  const studentList = studentSnapshot.docs.map(doc => doc.data());
  return studentList;
}

async function addStudent(db){
    addDoc(collection(db, "Student"), {
        name: "nut",
        message: "hello world",
        img: "https://sgfsgdsgdgsgd",
      })
}

await addStudent(db).then((res)=> console.log("sucess"))


const Student = await getStudent(db);

console.log(Student);