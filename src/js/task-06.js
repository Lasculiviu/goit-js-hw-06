// Selectați elementul input din DOM
const validationInput = document.getElementById('validation-input');

// Funcție pentru validarea numărului de caractere
const validateInputLength = () => {
  const inputLength = validationInput.value.length;
  const requiredLength = Number(validationInput.getAttribute('data-length'));

  if (inputLength === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
};

// Adăugați event listener pentru evenimentul 'blur'
validationInput.addEventListener('blur', validateInputLength);
