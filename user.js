import { LogoutUser } from "./Firebase.js";

let Logoutbtn = document.querySelector('.Logoutuser');
Logoutbtn.addEventListener('click',()=>{
    LogoutUser()
})