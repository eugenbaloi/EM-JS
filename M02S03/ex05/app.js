function debounce(func, wait, immediate) {
  var timeout;
  return function() {
  var context = this, args = arguments;
  var later = function() {
  timeout = null;
  if (!immediate) func.apply(context, args);
  };
  var callNow = immediate && !timeout;
  clearTimeout(timeout);
  timeout = setTimeout(later, wait);
  if (callNow) func.apply(context, args);
  };
  };

  const showMessage = (message, targetElement)  => {
    let paragraph = document.getElementById(targetElement);
  
  if (paragraph) {
    paragraph.innerText = message;
  } else {
    let p = document.createElement('p');
    p.innerText = message;
    p.id = targetElement;
    document.body.appendChild(p);
  }
  };

  let originalW = window.innerWidth;
  let originalH = window.innerHeight;

window.addEventListener('resize', debounce((evt) => {
  console.log('Ferul e mare.');
  showMessage(`Ferul e incins ${evt.target.innerWidth} rau.`, 'toaster');

  if (evt.target.innerWidth !== originalW) {
    showMessage('Ferul e altfel', 'salam');
  } else {
    showMessage('Ferul e aiurea.', 'salam');
  }


  showMessage(`Ferul e incins ${evt.target.innerHeight} rau.`, 'toaster');

  if (evt.target.innerHeight !== originalH) {
    showMessage('Ferul e verde', 'salam');
  } else {
    showMessage('Ferul e portocaliu.', 'salam');
  }
}, 400));