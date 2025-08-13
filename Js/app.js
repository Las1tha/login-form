// 1. Firebase Config — replace with your own
const firebaseConfig = {
    apiKey: "AIzaSyADqOFQ70O1RdFAAkojW6ksi10x0Bj4Kxo",
    authDomain: "l-form-20480.firebaseapp.com",
    databaseURL: "https://l-form-20480-default-rtdb.firebaseio.com",
    projectId: "l-form-20480",
    storageBucket: "l-form-20480.firebasestorage.app",
    messagingSenderId: "975752377173",
    appId: "1:975752377173:web:77146eac61f3adc243b5dc"
  };

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// 3. Get form and submit event
document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault(); // prevent form refresh

    // Get values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!username || !email || !phone) {
        alert("Please fill all fields");
        return;
    }

    // Create a unique ID for each entry
    const newRef = database.ref("users").push();

    // Save data
    newRef.set({
        username: username,
        email: email,
        phone: phone,
        createdAt: new Date().toISOString()
    })
    .then(() => {
        alert("Data saved successfully!");
        document.querySelector("form").reset();
    })
    .catch((error) => {
        console.error(error);
        alert("Error saving data: " + error.message);
    });
});