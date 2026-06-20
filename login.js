import { auth, provider, db } from "./firebase.js";

import {
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const loginBtn = document.getElementById("googleLoginBtn");

loginBtn.addEventListener("click", async () => {

  try {

    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    // Save user in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid
    });

    // Save locally for Account page
    localStorage.setItem("userName", user.displayName);
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("userPhoto", user.photoURL);

    // Open main website
    window.location.href = "index.html";

  } catch (error) {

    console.error(error);
    alert("Login Failed");

  }

});
