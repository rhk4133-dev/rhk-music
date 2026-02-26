// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD3pPazcbgwOgZiwolUOIBs2hLt-A-iUR8",
  authDomain: "rhkmessage.firebaseapp.com",
  projectId: "rhkmessage",
  storageBucket: "rhkmessage.firebasestorage.app",
  messagingSenderId: "626824224864",
  appId: "1:626824224864:web:3bbfd5e9ea8f6e50e305"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// Google Login
function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;

      // Save user in Firestore
      db.collection("users").doc(user.uid).set({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid
      });

      document.getElementById("userInfo").innerHTML = `
        <p>Welcome, ${user.displayName}</p>
        <img src="${user.photoURL}" width="80" style="border-radius:50%">
      `;
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Keep user logged in
auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("userInfo").innerHTML = `
      <p>Welcome back, ${user.displayName}</p>
      <img src="${user.photoURL}" width="80" style="border-radius:50%">
    `;
  }
});