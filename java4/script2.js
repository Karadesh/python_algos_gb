//2
const $cart = document.querySelector('#cart');
const cart = [

];
function Good(title, price, quantity = 1) {
    this.name = title;
    this.price = price;
    this.quantity = quantity;
}

function getPrice(arr) {
    return arr.reduce(function (acc, good) {
        return acc + (good.price * good.quantity)
    }, 0);
};

function getQuantity(arr) {
    return arr.reduce(function (acc, good) {
        return acc + good.quantity;
    }, 0);
}

function drawcart() {
    const p = document.createElement('p');
    if (cart.length !== 0) {
        p.textContent = 'сейчас в корзине ' + getQuantity(cart) + ' товаров, на сумму ' + getPrice(cart) + 'рублей';
    } else {
        p.textContent = 'Корзина пуста'
    }

    $cart.appendChild(p);
}

cart.push(new Good('Оптика Kiroshi', 20300, 2));
cart.push(new Good('Куртка Samurai', 5000, 1));

drawcart();

console.log(getPrice(cart))