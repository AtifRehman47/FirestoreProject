import { Loginhandler } from "./Firebase.js";

let InputEmail = document.querySelector('.email');
let Password = document.querySelector('.password');

let Loginbtn = document.querySelector('.Loginbtn');

Loginbtn.addEventListener('click',()=>{
    Loginhandler(InputEmail.value,Password.value)
})