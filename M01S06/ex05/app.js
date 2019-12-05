(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let showButton = document.querySelector('#showButton');
    let toggleEventButton = document.querySelector('#toggleEventButton');
    let removeButtons = document.querySelector('#removeButton');

    const showAlert = () => {
      alert('Butonul a fost apasat de Nicu');
    };

    const addMessage = () => {
      let p = document.createElement('p');

      if (eventBound) {
        p.innerText = 'alerta va fi afisata';
      } else {
        p.innerText = 'alerta nu va fi afisata';
      }

      document.body.appendChild(p);
    };

    removeButtons.addEventListener('click', () => { 
      if (!confirm ('you sure?')) { 
        return;
      }
      if (eventBound) {
        showButton.removeEventListener('click', showAlert);
      }

      showButton.remove();
      toggleEventButton.remove();
    });

    showButton.addEventListener('click', showAlert);
    let eventBound = true;

    toggleEventButton.addEventListener('click', (evt) => {
      if (eventBound) {
        showButton.removeEventListener('click', showAlert);
        enentBound = false;
        evt.target.innerText = 'Porneste afisarea';
      } else {
        showButton.addEventListener('click', showAlert);
        eventBound = true;
        evt.target.innerText = 'Opreste afisarea';
      }

      addMessage();
    });

  });
})();
