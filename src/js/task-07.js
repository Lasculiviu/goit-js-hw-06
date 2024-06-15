
const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');


const updateFontSize = () => {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
};


fontSizeControl.addEventListener('input', updateFontSize);


updateFontSize();
