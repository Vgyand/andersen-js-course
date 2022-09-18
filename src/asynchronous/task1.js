export const foo = (x, cb) => {
  if (x <= 10) {
    console.log('x<=10');
    cb('jija');
  } else if (x > 10) {
    console.log('x>10');
  }
};

export const createCb = str => console.log(str);
