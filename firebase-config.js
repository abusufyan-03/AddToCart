import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js';
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3KUpopl2gyYVM7ofuCmBOufDXewmO8Z8",
  authDomain: "realtime-database-2dd9e.firebaseapp.com",
  databaseURL: "https://realtime-database-2dd9e-default-rtdb.firebaseio.com/",
  projectId: "realtime-database-2dd9e",
  storageBucket: "realtime-database-2dd9e.firebasestorage.app",
  messagingSenderId: "627822302497",
  appId: "1:627822302497:web:f10c7ef81b707ba8aa1a60"
};

// Initialize once
const app = initializeApp(firebaseConfig);

// Create shared instances
const auth = getAuth(app);
const database = getDatabase(app);

// Export them for use in other files
export { auth, database };