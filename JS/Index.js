function TestFetch() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

}
//Test procedure testing fetch requests. Might replace with WebSockets so I can have it be Live Updated when I get my Raspberry Pi 5 :3

