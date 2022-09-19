const asyncBar = async () => 'Some String';

export const foo2 = async () => {
  const str = await asyncBar();
  console.log(str);
};
