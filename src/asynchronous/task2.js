export function parseJSON(jsonStr, resolve, reject) {
  try {
    const result = JSON.parse(jsonStr);
    resolve(result);
  } catch (error) {
    reject(error);
  }
}

export function successCb(data) {
  console.log('suc');
  console.log(data);
}

export function failureCb(error) {
  console.log('fail');
  console.log(error);
}
