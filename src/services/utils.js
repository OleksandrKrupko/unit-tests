export const sum = (a, b) => {
  return a + b;
}

export const fetchData = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
}

export const delayedHello = (name) => {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
  }, 2000);
}

export const count = () => {
  let counter = 0;

  return setInterval(() => {
    console.log(counter++);
  }, 1000)
}