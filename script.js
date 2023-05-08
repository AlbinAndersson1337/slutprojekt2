fetch('./programming-profiles.js')
  .then(response => response.json())
  .then(data => {
    const languageButtons = data.map(language => {
      const button = document.createElement('button');
      button.textContent = language.name;
      button.addEventListener('click', () => {
        window.location.href = language.url;
      });
      return button;
    });

    const languageButtonsContainer = document.querySelector('.language-buttons');
    languageButtons.forEach(button => {
      languageButtonsContainer.appendChild(button);
    });
  })
  .catch(error => console.error(error));
