const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.querySelector('input[type="submit"]');

loginButton.addEventListener("click", (event) => {
  event.preventDefault(); // prevent the default form submission

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (
    (username === "sm" && password === "1111") ||
    (username === "raven" && password === "2222")
  ) {
    window.location.href = "index.html"; // redirect to index.html if username and password match
  } else {
    alert("Invalid username or password"); // show an error message if the username or password is incorrect
  }
});
