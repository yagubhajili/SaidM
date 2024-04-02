

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
