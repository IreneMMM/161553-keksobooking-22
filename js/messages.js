const ALERT_SHOW_TIME = 15000;
const message = 'Произошла ошибка во время загрузки данных';
const ESCAPE= 'Escape';

const onSuccessMessage = () => {
  const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMessageText = successMessageTemplate.cloneNode(true);
  document.body.append(successMessageText);
  let successMessage = document.querySelector('.success');

  successMessage.addEventListener('click', () => {
    document.querySelector('.success').remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ESCAPE) {
      successMessage.remove()
    }
  });

  return successMessageText;
};

const onErrorMessage = () => {
  const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorMessageText = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessageText);
  let errorMessage = document.querySelector('.error');
  errorMessage.addEventListener('click', () => {
    if (document.querySelector('.error')) {
      closeErrorMessage();
    }
  });
  let buttonError = document.querySelector('.error__button');

  buttonError.addEventListener('click', () => {
    if (document.querySelector('.error')) {
      closeErrorMessage();
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ESCAPE) {
      closeErrorMessage();
    }
  });

  return errorMessageText;
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
};


const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('alert__container');
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export { onSuccessMessage, onErrorMessage, showAlert };
