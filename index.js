/* 
challenge:
make it so that when you click the 'add to cart button', whatever is  written in input should get console logged.
*/

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js';

// const appSettings = {
//     databaseURL: 'https://fir-2-fae64-default-rtdb.firebaseio.com/'
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const moviesInDB = ref(database, 'movies')
// console.log(app)

// const inputFieldEl = document.getElementById('input-field');
// const addButtonEl = document.getElementById('add-button');

// addButtonEl.addEventListener('click', function(e){
//     let inputValue = inputFieldEl.value;
//     push(moviesInDB, inputValue)

//     console.log(`${inputValue} push to database`);
// })



import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js';

const appSettings = {
    databaseURL: 'https://realtime-database-2dd9e-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "Expense");
console.log(app);

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');
const shoppingList = document.querySelector('.shopping-list');

addButtonEl.addEventListener('click', function(){
    let inputValue = inputFieldEl.value;
    push(shoppingListInDB, inputValue);
    console.log(`${inputValue} push to database`);
});


