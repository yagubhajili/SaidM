let money = +window.prompt("budceni daxil edin")
let kilogram = +window.prompt("meyvenin kilosunu daxil edin")



if (!isNaN(money)&& !isNaN(kilogram)) {
    if ((money / kilogram) <= 2) {
        alert("meyve almadir")

    }
    else if ((money / kilogram) <= 4) {
        alert("meyve armuddur")

    }
    else if ((money / kilogram) <= 6) {
        alert("meyve banandir")

    }
    else {
        alert("bele meyve yoxdur ")

    }
} else {
    alert("zehmet olmasa reqem daxil edin")
}
