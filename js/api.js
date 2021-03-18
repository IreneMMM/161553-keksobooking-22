const getData = (onSuccess, onError) => {

  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch(() => {
      onError('Произошла ошибка во время загрузки данных');
    });
};

export { getData };
