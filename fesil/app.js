let seasons = +window.prompt("1.Yaz, 2.Yay, 3.Payiz, 4.Qis")


if (!isNaN(seasons)) {

    if (seasons === 1) {
        alert("mart, aprel , may")
    }
    else if (seasons === 2) {
        alert("iyun, iyul, avqust")
    }
    else if (seasons === 3) {
        alert("sentaybr, oktyabr, noyabr")
    }
    else if (seasons === 4) {
        alert("dekabr, yanvar, feral")
    }
    else if (seasons > 4) {
        alert("choose number between 1-4")
    }

}
else {
    alert("zehmet olmasa reqem daxil edin")
}
