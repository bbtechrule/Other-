import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCV-Upsx1K1M0E3dKJa3RJ6vL4sAYj9Kls",
  authDomain: "login-ebb2b.firebaseapp.com",
  projectId: "login-ebb2b",
  storageBucket: "login-ebb2b.firebasestorage.app",
  messagingSenderId: "128516764463",
  appId: "1:128516764463:web:0d996454a20b00473667da"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
