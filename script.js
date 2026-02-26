// 🔥 Your Firebase config (from your screenshot)
const firebaseConfig = {
  apiKey: "AIzaSyDSpPazcB0WgZiwUoIbS2nLt-A-UR8",
  authDomain: "rhkmessage.firebaseapp.com",
  projectId: "rhkmessage",
  storageBucket: "rhkmessage.appspot.com",
  messagingSenderId: "626824248644",
  appId: "1:626824248644:web:3bbfd5e9ae8af6e568e305",
  measurementId: "G-CC9KWW4YNX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ✅ Google Login (REDIRECT – works on mobile & APK)
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithRedirect(provider);
}

// ✅ Handle redirect result
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