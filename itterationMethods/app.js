



// // let x = +prompt("enter a value")

// // let numbeOf = array.filter((element) => {
// //     return element > x
// // }).length;
// // console.log(numbeOf)



// let array = [];

// for (let i = 0; i < 10; i++) {

//     array.push(Math.floor(Math.random() * 100) + 1);

// }

// console.log(array)

// let maxValue = Math.max(...array)

// let minValue = Math.min(...array)

// console.log(minValue)

// console.log(maxValue)


// let sum = array.reduce((acc, value) => {

//     return acc + value

// }, 0)

// let average = sum / array.length

// console.log(average)

// console.log(sum)





// let customers = [{
//     name: "saleh",
//     personal: {
//         age: 17,
//         hobbies: ["hiking", "billiard"]
//     }
// }, {
//     name: "valeh",
//     personal: {
//         age: 19,

//         hobbies: ["swimming", "billiard"]
//     }
// }, {
//     name: "mirsaleh",
//     personal: {
//         age: 16,

//         hobbies: ["hiking", "walking"]
//     }
// }]



// let result = customers.reduce((acc, value) => {

//     acc.push(value.personal.hobbies)
//     return acc
// }, []).flat()




// console.log(result)

const d = new Date();
let x = d.getHours()

let randomNum = Math.floor(Math.random() * 24) + 1
// console.log(randomNum)

function message(saat) {
    if (saat < 12) {
        console.log("seherdir")
    } else if (saat > 12 && saat < 18) {
        console.log("gunortadir")
    } else {
        console.log("axsamdir")
    }
}

// message(randomNum)





let customers = [{
    id: 1,
    name: "saleh",
    age: 35

}, {
    id: 2,

    name: "valeh",
    age: 29


}, {
    id: 4,

    name: "mirsaleh",
    age: 30

}, {
    id: 5,

    name: "mirvaleh",
    age: 28

}, {
    id: 6,

    name: "mirpasa",
    age: 33

}]



function ageSmaller(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].age > 30) {
            continue
        }
        console.log(arr[i].age)
    }

}



function ageBigger(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].age < 30) {
            continue
        }
        console.log(arr[i].age)

    }
}



// ageBigger(customers)
// ageSmaller(customers)


// let num = +prompt("enter a value")




function abundantDeficient(value) {
    let sum = 1
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            sum += i
        }
    }
    if (value > sum) {
        console.log("deficient")
    } else if (sum > value) {
        console.log("abundant")
    } else {
        console.log("equal")
    }
}


// abundantDeficient(num)

sumEven = 0
sumOdd = 0

for (let i = 0; i < 500; i++) {

    if (i % 2 === 0) {
        sumEven += i
    } else {
        
        sumOdd += i
    }
}
if (sumEven - sumOdd < 0) {
    console.log("ferq menfidir")
} else if (sumEven - sumOdd > 0) {
    console.log("musbetdir")
}






