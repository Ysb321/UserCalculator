const x = document.getElementById("slider");
const y = document.querySelector(".register-form");
const z = document.querySelector(".login-form");

function logg() {
  x.style.left = "100px";
  y.style.marginTop = "600px";
  z.style.marginTop = "50px";
}

function reg() {
  x.style.left = "10px";
  y.style.marginTop = "50px";
  z.style.marginTop = "400px";
}

// Array to store user credentials
let users = [];

// Function to handle login form submission
document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let username = document.querySelector(".loginUsername").value;
    let password = document.querySelector(".loginPassword").value;

    // Check if user exists and password matches
    let user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      // alert("Login successful!");
      swal("Done", "Login successfull", "success");
    
      window.location.assign("calculator/index.html");
    } else {
      swal("Oops", "Invalid username or password.", "error");
    }
  });

// Function to handle register form submission
document
  .querySelector(".register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let username = document.querySelector(".registerUsername").value;
    let password = document.querySelector(".registerPassword").value;

    // Check if username already exists
    let existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      // alert("Username already exists. Please choose a different one.");
      swal("Oops", "Username already exists. Please choose a different one.", "error");
    } else {
      // Add new user to the array
      users.push({ username, password });
      // alert("register successful! You can now login.");
      swal("Done", "register successful! You can now login.", "success");
      let button = document.getElementById("log");

      // Programmatically trigger the click event
      button.click();
    }
  });
