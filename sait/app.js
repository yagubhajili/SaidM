// let array = [1, 43, 20, 40, 0, 2348, 75, 10]


// function reqemli(arr) {

//     let x;

//     let a;
//     let y=[]

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; j < arr[i]; j++) {
//             x = arr[i]

//             a = String(arr[i]).length
//         }



//     }
//     return `${x} ${a} reqemli ededdir`
//     // return `${} ${} reqemli ededdir`
// }
// console.log(reqemli(array))





// function fourAndFive(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] % 4 == 0 && arr[i] % 5 == 0) {
//             sum += arr[i]

//         }

//     }
//     return sum
// }
// console.log(fourAndFive(array));




// let text = prompt("cumle daxil edin")
// let myLetter = prompt("herf daxil edin");
// let count = 0;
// function herf( strg) {
//     for (let i = 0; i < strg.length; i++) {
//         if (myLetter == strg[i]) {
//             count++
//         }
//     }
//     return count
// }

// console.log(herf( text))





// let array = ["banana", "orange", "apple", "mango"]
// let arr = [1, 3, 5]
// let arr1 = [[1, 2], [3, 4]]

// let result = array.length
// result = array.toString()
// result = array.at(2)
// result = array.join("*")
// result = array.pop()
// result = array.shift()
// result = array.unshift("sdgvs")
// result = array.concat(arr)
// result = array.copyWithin(0, -1)
// result = arr1.flat()
// result = array.splice(3, 0, "armud")
// result = array.toSpliced(2, 0, "armud")
// result = array.slice(0, 1)








// console.log(array);
// console.log(result);


let students = [
    {
        id: 1,
        name: "Nurane",
        surname: "Ismayilzade",
        age: 21,
        hobbies: ["music", "walking", "watchingfilm"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "cavid" },
            { id: 4, name: "alisa" },
        ],
        loginDetail: { username: "nurana21", password: "nunu123" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 88,
        salaryAZN: 144,
    },
    {
        id: 2,
        name: "Gizilgul",
        surname: "Allahverdiyeva",
        age: 20,
        hobbies: ["book", "writing code"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "babaxan" },
            { id: 4, name: "gulshen" },
        ],
        loginDetail: { username: "allahverdieva1", password: "salam123" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 70,
        salaryAZN: 100,
    },
    {
        id: 3,
        name: "Xanim",
        surname: "Nuriyeva",
        age: 21,
        hobbies: ["book", "music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "hikmet" },
            { id: 4, name: "gulsen" },
        ],
        loginDetail: { username: "xanim123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 80,
        salaryAZN: 145,
    },
    {
        id: 4,
        name: "Minaya",
        surname: "Binnetova",
        age: 21,
        hobbies: ["book", "gaming", "movie", "music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "anar" },
        ],
        loginDetail: { username: "binnetova", password: "hello123" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 90,
        salaryAZN: 142,
    },
    {
        id: 5,
        name: "Sabina",
        surname: "Hatamli",
        age: 21,
        hobbies: ["shopping", "listen to music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Mirvari" },
        ],
        loginDetail: { username: "sebine123", password: "salam123" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 81,
        salaryAZN: 146,
    },

    {
        id: 6,
        name: "Ləman",
        surname: "Şamilova",
        age: 20,
        hobbies: [
            "watching movies",
            "reading books",
            "painting",
            " walking",
            " listen to music",
        ],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
        ],
        loginDetail: { username: "lemanshamilova", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 85.8,
        salaryAZN: 145,
    },
    {
        id: 7,
        name: "Narmin",
        surname: "Musayeva",
        age: 21,
        hobbies: ["book", "gaming", "painting", "walking"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "fidan" },
            { id: 4, name: "Irada" },
        ],
        loginDetail: {
            username: "narmin0",
            password: "narmin01",
        },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 80,
        salaryAZN: 196,
    },

    {
        id: 8,
        name: "Fatima",
        surname: "Akhundzada",
        age: 20,
        hobbies: ["drawing", "sleeping"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Valida" },
        ],
        loginDetail: { username: "aynur123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 76,
        salaryAZN: 100,
    },
    {
        id: 9,
        name: "Elmir",
        surname: "Huseynov",
        age: 21,
        hobbies: ["book", "ice skating", "Tennis", "Karting"],
        student: true,
        teacher: [
            { id: 1, name: "Gurban" },
            { id: 2, name: "Hajar" },
            { id: 3, name: "Morad" },
            { id: 4, name: "Fikrat" },
        ],
        loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
        gender: "man",
        boyfriendGirlfriend: false,
        fail: true,
        avgPoint: 76,
        salaryAZN: 120,
    },
    {
        id: 10,
        name: "Fidan",
        surname: "Rehimli",
        age: 21,
        hobbies: ["book", "gaming"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Turan" },
        ],
        loginDetail: { username: "fidan123", password: "fidanrahimli" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: true,
        avgPoint: 75,
        salaryAZN: 98,
    },
    {
        id: 11,
        name: "Aynur",
        surname: "Aynurova",
        age: 20,
        hobbies: ["book", "gaming"],
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
        ],
        loginDetail: { username: "aynur123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: true,
        avgPoint: 81,
        salaryAZN: 120,
    },

    {
        id: 12,
        name: "Elman",
        surname: "Muradov",
        age: 20,
        hobbies: [
            "book",
            "gaming",
            "sking",
            "wrestling",
            "swiming",
            "arguing about philosophy",
            "solving sudoku",
            "hiking",
            "walking",
        ],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "jale" },
            { id: 4, name: "akhmed" },
        ],
        loginDetail: { username: "elman17", password: "elman12345" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: true,
        avgPoint: 76,
        salaryAZN: 100,
    },
];



//         loginDetail: { username: "elman17", password: "elman12345" },
//         gender: "girl",
//         boyfriendGirlfriend: false,
//         fail: true,
//         avgPoint: 76,
//         salaryAZN: 100,
//     },
// ];


// function hamisi(arr) {
//     let element;
//     for (let i = 0; i < arr.length; i++) {
//         element = arr[i]
//         console.log(element)

//     }

// }

// hamisi(students)




// function adlar(arr) {
//     let element;
//     for (let i = 0; i < arr.length; i++) {
//         element = arr[i]
//         console.log("ad:" + element.name + " soya: " + element.surname)



//     }

// }

// adlar(students)



// function kesr(arr) {
//     let element;
//     for (let i = 0; i < arr.length; i++) {
//         element = arr[i]
//         if (element.fail) {
//             console.log(element.name)
//         }


//     }

// }

// kesr(students)


// function hobby(arr) {
//     let element;
//     let x = ''
//     for (let i = 0; i < arr.length; i++) {
//         element = arr[i]
//         if (element.hobbies.length > x.length) {
//             x = element.hobbies


//         }


//     }
//     console.log("ad:" + element.name + " soya: " + element.surname + " hobbies: " + element.hobbies)

// }

// hobby(students)


// function ortalama(arr) {
//     let element;
//     let maxPoint;
//     let maxPoint2;

//     let max = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         element = arr[i]
//         if (element.avgPoint > max) {
//             max = element.avgPoint
//             maxPoint = element


//         }

//     }
//     console.log("ad:" + maxPoint.name + " soyad: " + maxPoint.surname)

//     console.log(max)

// }
// ortalama(students)


// function parol(arr) {
//     let element;
//     let maxPoint;


//     let max = '';

//     for (let i = 0; i < arr.length; i++) {
//         element = arr[i]
//         if (element.loginDetail.password.length > max.length) {
//             max = element.loginDetail.password
//             maxPoint = element
//         }

//     }
//     console.log("ad:" + maxPoint.name + " soyad: " + maxPoint.surname)
// }
// parol(students)


// function sevgili(arr) {
//     let element;
//     for (let i = 0; i < arr.length; i++) {
//         element = arr[i]
//         if (element.boyfriendGirlfriend) {
//             console.log(element.name + " " + element.loginDetail.username)
//         }


//     }

// }
// sevgili(students)




// function yas(arr) {
//     let element;



//     let max = 20;

//     for (let i = 0; i < arr.length; i++) {
//         element = arr[i]
//         teachers = ""
//         if (element.age == max) {
//             for (let j = 0; j < element.teacher.length; j++) {

// teachers+=

//             }
//             console.log(element.name)
//         }


//     }
// }
// yas(students)








let text = "salam qaqa necesen var ne yox"




function sozSayi(strg) {
    let count = 0;
    let newStrg = strg.split(" ")
    console.log(newStrg)
    for (let i = 0; i < newStrg.length; i++) {
        console.log(newStrg[i])
        count++
    }
    console.log(count)
}


// sozSayi(text)


function saitSay(strg) {
    let count = 0;
    let vowels = ['a', 'o', 'u', 'e', 'i']
    for (let i = 0; i < vowels.length; i++) {
        let char = strg.toLowerCase()
        if (char.includes(vowels[i])) {
            count++
            continue
        }
    }
    console.log(count)

}


// saitSay(text)


let product1 = {
    name: "Alma",
    category: "Fruit",
    price: 12.5,
    weight: 50
};
let product2 = {
    name: "armud",
    category: "Fruit",
    price: 10.5,
    weight: 30
};
let product3 = {
    name: "nar",
    category: "Fruit",
    price: 1.5,
    weight: 18
};
let product4 = {
    name: "sogan",
    category: "vegetable",
    price: 2.5,
    weight: 4
};
let product5 = {
    name: "heyva",
    category: "Fruit",
    price: 12,
    weight: 50
};

let products = [product1, product2, product3, product4, product5]


// let names = prompt("product adi daxil edin")


function productFinder(arr, name) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (element.name.toLowerCase() == name.toLowerCase()) {
            console.log(`produc name:${element.name}
            category:${element.category}
            price:${element.price}
            weight:${element.weight}`)
        }

    }
}

// productFinder(products, names)


// let poligrom = 'anasss'



// function poligromFinder(strg) {
//     let straight = strg.split("")
//     let reverse = ''
//     for (let i = straight.length; i >= 0; i--) {
//         reverse = straight[i]
//         console.log(straight[i])
//         // console.log(reverse)

//         // if (reverse == straight[i]) {
//         //     console.log("poligropmdur")
//         // }
//         // else{
//         //     console.log("deyil")
//         // }
//     }

// }
// poligromFinder(poligrom)


// console.log(Math.max('9', '20', '4'))


// let tarix = new Date()
// console.log(tarix)

// console.log(tarix.getFullYear())
// console.log(tarix.getHours())
// console.log(tarix.getMilliseconds())

// console.log(tarix.getTime())

// let person = {

// }






// let result = students.forEach(element => {
//     // console.log(element.hobbies)
// });



// let result = students.filter(element => {

//     return element.hobbies.includes("gaming")
// });
// console.log(result)


let result = students.reduce((acc, elem) => {
    return acc + elem.age
}, 0)

// console.log(result)




function checkFunc(...arr1) {
    return arr1

}

console.log(checkFunc(5, 7, 1))



