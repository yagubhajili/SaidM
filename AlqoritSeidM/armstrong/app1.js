

let value = (prompt("enter a value:"))
let sum = 0;

for (let i = 0; i < value.length; i++) {

    sum += (value[i] ** 3)

}

if (sum == Number(value)) {
    alert("duzgun")
}
else {
    alert('armstrong deyil')
}




// console.log(sum)7
