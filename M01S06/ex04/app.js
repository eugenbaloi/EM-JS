(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let stage = document.querySelector('.stage');
    const showMessage = (message) => {
      let p = document.createElement('p');
      p.innerText = message;
      p.classList.add('message');
      
      document.body.appendChild(p);

      setTimeout(() => {
        p.remove();
      }, 10000);
    };

    stage.addEventListener('mouseover', () => {
      showMessage ('Nicu este in lac');
    });

    stage.addEventListener('mouseover', () => {
      showMessage  ('Nicu este caca');
    });


  });
})();