import { auth, provider } from "./firebase.js";

import {
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

document
.getElementById("googleLoginBtn")
.addEventListener("click", async () => {

  try {

    const result =
      await signInWithPopup(auth, provider);

    const user = result.user;

    localStorage.setItem(
      "userName",
      user.displayName
    );

    window.location.href =
      "index.html";

  } catch (error) {

    alert(error.message);

  }

});
