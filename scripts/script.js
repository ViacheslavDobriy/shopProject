let itemsInCart = 0;
const addToCartElement = document.querySelectorAll('.goods__label');
console.log(addToCartElement);
const newItemsElement = document.querySelector('.new__item');
const goodItem = [];

/**
 * Функция, которая увеличивает счетчик товаров в корзине
 * также эта функция добавляет в массив карточку товара
 */
addToCartElement.forEach((element) => {
    element.onclick = function increaseGoods() {
        itemsInCart++;
        newItemsElement.textContent = itemsInCart;
        goodItem.push(element.parentElement);
    };
})

console.log(newItemsElement);