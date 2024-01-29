let addButton = document.querySelectorAll(".add");
let basket = document.querySelector(".count")
let title = document.querySelector("h3");
let nbrItems = 0;
let sum = 0;

addButton.forEach(element => {
    element.addEventListener('click', function() {
        nbrItems++;
        console.log(nbrItems);
        basket.innerText = nbrItems;
    })
    element.addEventListener('click', function() {
        let price = element.closest(".item").querySelector(".price").textContent;
        let parsed = parseInt(price);   
        sum += parsed;
        console.log(sum);
        title.setAttribute('title', "Total du panier "+ sum + "€")
    })
});

