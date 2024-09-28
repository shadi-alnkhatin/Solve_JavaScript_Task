

function validateForm(){

    let isValid=true;

    const password= document.getElementById("password");
    const ConfirmPassword= document.getElementById("confirmPassword");
    const passwordError = document.getElementById('passwordError');



    if (password.value !== confirmPassword.value) 
        {
        passwordError.textContent = 'Please confirm your password';
        passwordError.style.display = 'block';
        isValid=false;
    }
    return isValid;
}