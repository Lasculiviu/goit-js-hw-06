
let counterValue = 0;

const valueElement = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');


const updateValueDisplay = () => {
  valueElement.textContent = counterValue;
};

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateValueDisplay();
});


incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateValueDisplay();
});
