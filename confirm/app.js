let a = window.prompt("enter a password")
let b = window.prompt("confirm  password")

if (a == "" || b == "") {
    alert("password can not be empty")
}
else if (a == b) {
    alert("succesful password")
}

else {
    alert("passwords dont match. Try again")
}