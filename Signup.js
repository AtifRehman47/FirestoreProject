
import { Signuphandler } from "./Firebase.js";

let InputName = document.querySelector('.name');
let InputEmail = document.querySelector('.email');
let Password = document.querySelector('.password');

let signupbtn = document.querySelector('.signupbtn');

signupbtn.addEventListener('click',()=>{
    Signuphandler(InputEmail.value,Password.value)
})