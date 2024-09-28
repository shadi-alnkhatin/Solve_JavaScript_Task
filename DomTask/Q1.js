
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');



// Label for Username
const usernameLabel = document.createElement('label');
usernameLabel.setAttribute('for', 'username');
usernameLabel.textContent = 'Username: ';
usernameInput.parentNode.insertBefore(usernameLabel, usernameInput);

// Label for Password
const passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
passwordLabel.textContent = 'Password: ';
passwordInput.parentNode.insertBefore(passwordLabel, passwordInput);

// Label for Confirm Password
const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.setAttribute('for', 'confirmPassword');
confirmPasswordLabel.textContent = 'Confirm Password: ';
confirmPasswordInput.parentNode.insertBefore(confirmPasswordLabel, confirmPasswordInput);
