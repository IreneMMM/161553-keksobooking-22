const ALERT_SHOW_TIME = 5000;

const onSuccessMessage = () => {
  const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMessageText = successMessageTemplate.cloneNode(true);
  document.body.append(successMessageText);
  let successMessage = document.querySelector('.success');
  successMessage.addEventListener('click', () => {
    document.querySelector('.success').remove();
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
  return errorMessageText;
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = '670px';
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export { onSuccessMessage, onErrorMessage, showAlert };
