export const getResolvedPromise = value => {
  return Promise.resolve(value);
};

export const getResolvedPromiseFunc = value => {
  getResolvedPromise(value)
    .then(res => {
      if (res > 300) {
        throw new Error('Ошибка');
      }
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log('This is Finally!');
    });
};
