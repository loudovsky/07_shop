let addButton = document.querySelectorAll(".add");
let basket = document.querySelector(".count")
let title = document.querySelector("h3");
let sum = 0;

addButton.forEach(element => {
    element.addEventListener('click', function() {
        basket.innerText++;
    })
    element.addEventListener('click', function() {
        let price = element.previousElementSibling.textContent;
        let parsed = parseInt(price);   
        sum += parsed;
        console.log(sum);
        title.setAttribute('title', "Total du panier "+ sum + "€")
    })
});

