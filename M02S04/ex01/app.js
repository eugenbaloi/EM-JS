let boxElement = document.querySelector('.box');
let applyButton = document.querySelector('#applyButton');
let dakenButton = document.getElementById('darkenButton');
let cssClassName = 'animate-class';

window.setTimeout(() => {
  boxElement.classList.add(cssClassName);

  window.setTimeout(() => {
    boxElement.classList.remove(cssClassName)
  }, 1000);
}, 1000);

applyButton.addEventListener('click', (evt) => {
 
  if (boxElement.classList.contains(cssClassName)) {
    boxElement.classList.remove(cssClassName);
    evt.target.innertext = 'Aplica';
  } else {
    boxElement.classList.add(cssClassName);
    evt.target.innertext = 'Elimina';
  }
});

darkenButton.addEventListener('click', () => {
boxElement.style.backgroundColor = '#000';
});