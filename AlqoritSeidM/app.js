

const alma = 2;
const portagal = 3;
const banan = 5;



let fruit = prompt("meyve adi daxil edin")
let kilogram = +prompt("meyvenin kilosunu daxil edin")


if (!isNaN(kilogram)) {
    switch (fruit) {
        case "alma":
            alert(`${kilogram * alma} AZN`)
            break;
        case "portagal":
            alert(`${kilogram * portagal} AZN`)

            break;
        case "banan":
            alert(`${kilogram * banan} AZN`)

            break;

        default:
            alert(`${fruit} duzgun meyve daxil edin`)
            break;
    }
} else {
    alert("kilogrami eded olaraq daxil edin")
}



// let array = [0, 1]


for (let i = 2; i <= 10; i++) {
    let l = array.length
    let k = array[l - 1] + array[l - 2]

    array.push(k)
    console.log(array[l])

}

for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {

        console.log(`${i}x${j}=${i * j}`)
    }
    console.log("----------------------")

}



let array = [0, 1, 45, 10, 1323, 323, 54, 1, 36, 6]
let max = array[0]

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i]
    }
}
console.log(max)





// let array = [23, 17, 6, 45, 67, 34]

let min = array[0]

let minIndex = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i]
        minIndex = i

    }
}
console.log(minIndex)

// murekkeb ededleri topla

// let array = [23, 17, 6, 45, 67, 34]

let sum = 0;


for (let i = 0; i < array.length; i++) {
    for (let j = 2; j < array[i]; j++) {
        if (array[i] % j == 0) {
            // console.log(array[i])         
            sum += array[i]

            break;

        }
    }


}

console.log(sum)




// faktorial
let num = +prompt("enter anumber")
let factorial = 1;


for (let i = 1; i <= num; i++) {
    factorial *= i



}

console.log(factorial)


// ad tersine
let name = "yaqub";
let reverse = " "
for (let i = (name.length - 1); i >= 0; i--) {

    reverse += name[i]

}
console.log(reverse)