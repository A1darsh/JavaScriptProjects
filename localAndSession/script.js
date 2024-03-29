let loginBtn = document.getElementById("loginBtn");
let id = document.getElementById("idText");
let pass = document.getElementById("passText");
let showMsg = document.getElementById("showMsg");
let loginArr = [];

loginBtn.addEventListener("click", () => {
  let tempId = id.value;
  let tempPass = pass.value;
  id.value ="";
  pass.value= "";

  let loginData = JSON.parse(localStorage.getItem("loginDetails"));
  
  if (loginData && loginData.some((user) => user.id === tempId && user.password === tempPass)) {
    showMsg.innerText = "You have already logged in";
  } else {
    showMsg.innerText = "Login Successful";
    let myObject = { id: tempId, password: tempPass };
    loginArr.push(myObject);
    localStorage.setItem("loginDetails", JSON.stringify(loginArr));
  }
});
