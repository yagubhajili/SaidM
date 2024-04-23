let wish = JSON.parse(localStorage.getItem('wish')) || [];





wish.forEach(elem => {

    holder.innerHTML += `
    <div class="card " style="width: 18rem;">
    <img class="card-img-top" src=${elem.image} alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${elem.price}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's
            content.</p>
            <i class="fa-regular fa-heart"></i>
    </div>
    </div>
    `



})
