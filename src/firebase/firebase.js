import { initializeApp } from "firebase/app";
import { getFirestore, collection} from 'firebase/firestore'

// console.log(process.env.REACT_APP_API_KEY);
// console.log(process.env.REACT_APP_AUTHDOMAIN);
// console.log(process.env.REACT_APP_PROJECTID);
// console.log(process.env.REACT_APP_STORAGE_BUCKET);
// console.log(process.env.REACT_APP_MESSAGE_SENDER_ID);
// console.log(process.env.REACT_APP_API_KEY);
// console.log(process.env.REACT_APP_MEASUREMENTID);


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID ,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};


const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const userCollectionRef = collection(database,'users');

console.log(userCollectionRef)

export { app , database , userCollectionRef };