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
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js';

const appSettings = {
    databaseURL: 'https://realtime-database-2dd9e-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "Expense");
console.log(app);

const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');
const shoppingListEl = document.querySelector('.shopping-list');

addButtonEl.addEventListener('click', function(){
    let inputValue = inputFieldEl.value;
    push(shoppingListInDB, inputValue);

    clearInputFieldEl()

    // appendItemToShoppingListEl(inputValue);

    console.log(`${inputValue} push to database`);
});

/* 
challenge: 
Call the onValue funtion with
shoppingListInDB as the first argument and 
function(snapshot) {} as the second argument
*/

onValue(shoppingListInDB, function(snapshot){
    // let ItemArray = Object.values(snapshot.val());


    if(snapshot.exists()){
        let ItemArray = Object.entries(snapshot.val());
        console.log('itemArray:',ItemArray)

        clearShoppingListEl()
    for(let i = 0; i<ItemArray.length; i++){
        // console.log(ItemArray[i]);
        let currentItem = ItemArray[i];
        let currentItemID = currentItem[0];
        let currentItemValue = currentItem[1];
        
        appendItemToShoppingListEl(currentItem);
    }
    } else {
        shoppingListEl.innerHTML = `<li class='no-item'>no item here yet...!</li>`
    }
        
    // my approach
    // console.log(ItemArray);
    // ItemArray.forEach((item)=> {
    //     console.log(item)
    // })
 
})

function clearShoppingListEl(){
        shoppingListEl.innerHTML = '';

}

function clearInputFieldEl(){
    inputFieldEl.value = '';
}

function appendItemToShoppingListEl(item){
    // const li = document.createElement('li');
    // li.textContent = itemValue
    // shoppingListEl.appendChild(li)= `<li>${itemValue}</li>`

    // shoppingListEl.innerHTML += `<li>${itemValue}</li>`

    let itemID = item[0];
    let itemValue = item[1];
    const newEl = document.createElement('li');
    newEl.textContent = itemValue;


    newEl.addEventListener('click', function(){
        let exactLocationOfItemInDB = ref(database, `Expense/${itemID}`);
        remove(exactLocationOfItemInDB)
    })

    shoppingListEl.append(newEl);

}


