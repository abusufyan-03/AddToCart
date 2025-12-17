# Add To Cart

Introducing **Add To Cart**  a simple shopping list app that helps you keep track of items needed for your home and makes grocery shopping easy peasy 🛒

You can use this app:

* Personally, for your own grocery planning
* Or collaboratively with your **partner, family, or flatmates** using a shared account

The idea is simple: anyone can add items anytime, and the person going to the grocery store can quickly check the complete, updated list.

---

## About the Project

I built this project while taking a **basic Firebase course from YouTube**, where the instructor covered the fundamentals of Firebase and **Realtime Database** by building a simple shopping list.

After completing the course project, I **extended it on my own** by adding:

*  **Authentication (Email & Password)** using Firebase Auth
*  **User-based data handling**, where each account represents a household
*  **Persistent login** using Firebase auth state

This helped me understand how authentication, real-time data, and UI state work together in a real-world app.



## Live Link 
[Add to Cart](https://add-to-cart-sasuke.netlify.app/)

##  Features

*  Email & Password Authentication (Firebase Auth)
*  One account = one household (shared usage)
*  Add grocery items to a shared list
*  Remove items with a single click
*  Real-time updates (no refresh required)
*  Data persists after refresh & logout
*  Works across devices and sessions

---

##  Real-World Use Case

This app is designed around a **shared household model**.

### Example scenario

* A family / group of flatmates uses **one shared account**
* Anyone can add grocery items anytime
* The person going to the store opens the app and sees the **complete, updated list**

This avoids:

* Forgetting items
* Repeated WhatsApp messages
* Losing paper notes

> In this design, **one user represents one household**, not an individual.

---

##  Problem It Solves

* Grocery items are often forgotten
* Notes apps are not collaborative by default
* Basic apps lose data after refresh
* No single source of truth for households

### Solution

* Centralized shared list
* Saved securely online
* Real-time synchronization
* Simple and distraction-free

---

## 🔐 Authentication Flow (How login persists)

Firebase automatically **persists the authentication session** in the browser.


---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript (ES Modules)
* **Authentication:** Firebase Authentication
* **Database:** Firebase Realtime Database


---

## 📂 Project Structure

```text
├── index.html
├── firebase-config.js   # Firebase initialization
├── auth.js              # Authentication & UI control
├── cart.js              # Realtime database logic
├── style.css
```

---

##  Limitations (Current Version)

* Uses shared credentials for household collaboration
* No roles (admin/member)
* No item quantity or categories

These are **intentional trade-offs** for simplicity in v1.

---

## Key Learning Outcomes

* Firebase Authentication handling
* Auth state persistence
* User-based data isolation
* Real-time database listeners
* Clean separation of concerns


---
