const rangeInput = document.getElementById('font-size-control');
const textToChange = document.getElementById('text');


const fontSizeControl = ({ currentTarget }) =>
  (textToChange.style.fontSize = `${currentTarget.value}px`);

rangeInput.addEventListener('input', fontSizeControl);