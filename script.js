// 🔥 CHECK SCRIPT LOAD
console.log("Script Loaded");

// ✅ Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDSpPazcB0WgZiwUoIbS2nLt-A-UR8",
  authDomain: "rhkmessage.firebaseapp.com",
  projectId: "rhkmessage",
  storageBucket: "rhkmessage.appspot.com",
  messagingSenderId: "626824248644",
  appId: "1:626824248644:web:3bbfd5e9ae8af6e568e305"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ✅ Button Click Event
document.getElementById("googleBtn").addEventListener("click", function () {
  console.log("Login Button Clicked");

  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithRedirect(provider);
});

// ✅ Handle Redirect Result
auth.getRedirectResult()
  .then((result) => {
    if (result.user) {
      document.getElementById("status").innerText =
        "Welcome " + result.user.displayName;
      console.log(result.user);
    }
  })
  .catch((error) => {
    document.getElementById("status").innerText = error.message;
    console.error(error);
  });