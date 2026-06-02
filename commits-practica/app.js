function login(user, pass) {
  if (user === "admin") {
    return true;
  }
  return false;
}

async function getUsers() {
  const res = await fetch("/api/users");
  const data = await res.json();
  console.log(data);
}

const MAX_USERS = 50;
module.exports = { login, getUsers, MAX_USERS };
