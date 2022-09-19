const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

export function getDataParallel() {
  Promise.all(
    urls.map(url =>
      fetch(url, {
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res)
    )
  ).then(data => {
    console.log('parallel');
    console.log(data);
  });
}

function getData(url) {
  return fetch(url, {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res);
}

export const getDataSequential = () => {
  const res = [];

  urls
    .map(getData)
    .reduce((prev, curr) => {
      return prev.then(data => {
        res.push(data);
        return curr;
      });
    })
    .then(data => {
      console.log('seq');
      res.push(data);
      console.log(res);
    });
};
