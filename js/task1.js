// const logger = time => console.log(`Resolved after ${time}ms`);
const logger = time => document.querySelector('.output').insertAdjacentHTML('beforeend',`<li>Resolved after ${time}ms</li>`)

document.querySelector('.task1').addEventListener('click', (e) => {
  const delay = ms => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ms)
      }, ms);
    });
  };
  delay(2000)
    .then(logger); // Resolved after 2000ms
  delay(1000)
    .then(logger); // Resolved after 1000ms
  delay(1500)
    .then(logger); // Resolved after 1500ms
  
});


document.querySelector('.reload').addEventListener('click', (e) => {
  window.location.reload()
})



