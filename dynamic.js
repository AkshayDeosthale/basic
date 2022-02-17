function inputs() {
  const user = document.getElementById("username");
  console.log(user);
  const pass = document.getElementById("password");

  document.getElementById("cred1").innerHTML = user.value;
  document.getElementById("cred2").innerHTML = pass.value;
}
