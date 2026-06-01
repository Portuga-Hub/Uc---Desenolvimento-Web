async function init() {

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  console.log(users);
  console.log(users[0].name);
  console.log(users[1].email);

}

init();