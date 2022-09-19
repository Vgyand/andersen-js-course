export function get() {
  fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG', {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log(response);
      if (response.getUserData) {
        fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC', {
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(res => console.log(res));
      }
    })
    .catch(e => console.error(e));
}
