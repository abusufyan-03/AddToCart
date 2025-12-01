import { database } from './firebase-config.js';
import { ref, onValue, push, remove } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const inputFieldEl = document.getElementById('input-field');
const addBtnEl = document.getElementById('add-button');
const shoppingListEl = document.querySelector('.shopping-list');
const loggedinEmail = document.getElementById("loggedin-email");


// const shoppingListInDB = ref(database, `shoppingItem`);

// let unsubscribe = null
let addBtnListener = null;

export function initCart(user) {
    loggedinEmail.innerHTML = user.email;
    const shoppingListInDB = ref(database, `shoppingItem/${user.uid}`);


    if(addBtnListener) {
        addBtnEl.removeEventListener('click', addBtnListener);
    }

    addBtnListener = function(){
        let inputValue = inputFieldEl.value;
        console.log(inputValue)
        if (inputFieldEl.value === '') {
            alert('please enter a value');
            return
        }
        push(shoppingListInDB, inputValue)
        inputFieldEl.value = '';
        console.log(`${inputValue} is pushed to DB`);
    }

    addBtnEl.addEventListener('click', addBtnListener);
    // addBtnEl.addEventListener('click', function (e) {
    //     let inputValue = inputFieldEl.value;
    //     console.log(inputValue)
    //     if (inputFieldEl.value === '') {
    //         alert('please enter a value');
    //         return
    //     }
    //     push(shoppingListInDB, inputValue)
    //     inputFieldEl.value = '';
    //     console.log(`${inputValue} is pushed to DB`);
    // })

    onValue(shoppingListInDB, function (snapshot) {
        console.log('snapshot',snapshot.val());
        if (snapshot.exists()) {
            let arrayItem = Object.entries(snapshot.val())
            console.log(arrayItem)

            shoppingListEl.innerHTML = '';
            for (let i = 0; i < arrayItem.length; i++) {
                appendShoppingListItem(arrayItem[i])
            }
        } else {
            shoppingListEl.innerHTML = `<li> no item here yet</li>`
        }
    })

    function appendShoppingListItem(arrayItem) {
        let arrayItemID = arrayItem[0];
        let arrayItemValue = arrayItem[1];
        const newEl = document.createElement('li');
        newEl.textContent = arrayItemValue;

        shoppingListEl.appendChild(newEl)

        newEl.addEventListener('click', function () {
            let exactLocationOfItemInDb = ref(database, `shoppingItem/${user.uid}/${arrayItemID}`);
            remove(exactLocationOfItemInDb)
        })

    }

    
}


