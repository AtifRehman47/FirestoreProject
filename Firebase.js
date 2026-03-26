
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyDrgCgxp8-MQwzY5uRxP31Z0YHdQgPiaYE",
    authDomain: "datastoreproject-244b9.firebaseapp.com",
    projectId: "datastoreproject-244b9",
    storageBucket: "datastoreproject-244b9.firebasestorage.app",
    messagingSenderId: "797767500424",
    appId: "1:797767500424:web:d665b3cea13f671b2c553d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


let Signuphandler = (email,password)=>{

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('errormessage', errorMessage);
    console.log('errorcode',errorCode);
    
    
    
  });
}

let Loginhandler = (email,password)=>{
    
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    window.location.href = 'user.html'
    console.log(user,'userlogin ho chuka');
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    console.log(errorCode);
    
    
  });
}

let CurrentUser = ()=>{
    
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;

    if (window.location.pathname !== 'user.html') {
        window.location.href = 'user.html'
    }

    console.log(user,'usermojod ha ');
    
    
  } else {
    
  }
});
}

let LogoutUser = ()=>{
   
signOut(auth).then(() => {

    alert('Logout Successfuly!')
    window.location.href = 'Login.html'
  
}).catch((error) => {
  console.log('error',error);
  
});
}

export  {Signuphandler , Loginhandler , CurrentUser , LogoutUser}
