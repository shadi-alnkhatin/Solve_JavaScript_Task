
  function toggleSubmitButton() {
    const nameInput = document.getElementById('name').value;
    const emailInput = document.getElementById('email').value;
    const submitButton = document.getElementById('submit');

    if (nameInput.trim() !== '' && emailInput.trim() !== '') {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled");
    }
}
