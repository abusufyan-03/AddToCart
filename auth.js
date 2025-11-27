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
const signupErrorMessage = document.getElementById('signup-error-message');
const loginErrorMessage = document.getElementById('login-error-message');
 

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
        // alert(formatErrorMessage(error.code, 'signup'));
        signupErrorMessage.innerHTML = formatErrorMessage(error.code, 'signup');
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
        loginErrorMessage.innerHTML = formatErrorMessage(error.code, 'login');
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

const formatErrorMessage = (errorCode, action) => {
    let message = '';
    if (action === 'signup') {
        if (
            errorCode === 'auth/invalid-email'
            || errorCode === 'auth/missing-password'
        ) {
            message = 'Please Enter a valid Email';
        } else if (
            errorCode === 'auth/missing-password' ||
            errorCode === 'auth/weak-password'
        ) {
            message = 'Password must be atleast 6 character long';
        } else if (
            errorCode === 'auth/email-already-in-use'
        ) {
            message = 'Email is already Taken';
        }
    } else if (action === 'login') {
        if (
            errorCode === 'auth/invalid-email' ||
            errorCode === 'auth/missing-password' ||
            errorCode === 'auth/invalid-credential'
        ) {
            message = 'Email or Password is incorrect';
        } else if (errorCode === 'auth/user-not-found') {
            message = 'our system was unable to verify your email or password';
        }
    }
    return message;
}