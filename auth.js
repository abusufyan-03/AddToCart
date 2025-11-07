import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js';
import { initCart } from './cart.js';


const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const addToCartSection = document.getElementById('add-to-cart-section');
const loginEmailInput = document.getElementById('login-email');
const loginPasswordInput = document.getElementById('login-password');
const loginSubmitBtn = document.getElementById('login-submit');
const logoutBtn = document.getElementById('logout-btn');
const signupEmailInput = document.getElementById('signup-email');
const signupPasswordInput = document.getElementById('signup-password');
const signupSubmitBtn = document.getElementById('signup-submit');
 

onAuthStateChanged(auth, (user) => {
    console.log('onAuthState', user);
    if(user){
        console.log('User UID: ', user.uid)
        initCart(user);
        addToCartSection.style.display = 'block';
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'block'
        addToCartSection.style.display = 'none';
    }
})

const signupBtnPressed = async (e) => {
    e.preventDefault();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, signupEmailInput.value, signupPasswordInput.value);
        console.log(signupEmailInput);
        console.log(signupPasswordInput);
        console.log(userCredential);
        alert('account created successfully')
    } catch (error) {
        console.log(error)
    }
}

const logoutBtnPressed = async (e) => {
    e.preventDefault();
    await signOut(auth)
}

const loginSubmitBtnPressed = async (e) => {
    e.preventDefault()
    try {
        await signInWithEmailAndPassword(auth, loginEmailInput.value, loginPasswordInput.value)
        loginEmailInput.value = '';
        loginPasswordInput.value = '';
    } catch (error) {
        console.log(error);
    }
}

function signupLinkPressed(e){
    e.preventDefault();
    loginContainer.style.display = 'none'
    signupContainer.style.display = 'block';
}

function loginLinkPressed(e){
    e.preventDefault();
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
}

loginLink.addEventListener('click', loginLinkPressed);
signupLink.addEventListener('click', signupLinkPressed)
signupSubmitBtn.addEventListener('click', signupBtnPressed);
logoutBtn.addEventListener('click', logoutBtnPressed);
loginSubmitBtn.addEventListener('click', loginSubmitBtnPressed)

export function getCurrentUser(){
}