function validateForm() {
    let isValid = true;

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');
    passwordError.textContent = '';
    successMessage.textContent = '';
    
    if (password.value !== confirmPassword.value) {
        passwordError.textContent = 'Passwords do not match';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }


    if (isValid) {
        alert("User registration successful!")
    }

    return isValid; 
}