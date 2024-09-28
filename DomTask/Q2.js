

function validateForm() {
    let isValid = true;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
  

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    nameError.textContent = '';
    emailError.textContent = '';
  
    // Name validation
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Name is required';
      nameError.style.display = 'block';
      isValid = false;
    } else {
      nameError.style.display = 'none';
    }
  
    // Email validation
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required';
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }
  
    return isValid; 
  }
  