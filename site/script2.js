function addToCart(itemName, itemPrice) {
    var cartItems = document.getElementById("cart-items");
    var cartTotal = document.getElementById("cart-total");
    var li = document.createElement("li");
    li.textContent = itemName + " - " + itemPrice + " руб.";
    cartItems.appendChild(li);
    var total = parseFloat(cartTotal.textContent);
    total += itemPrice;
    cartTotal.textContent = total.toFixed(2);

    // Получаем текущую корзину из локального хранилища
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Добавляем новый товар в корзину
    cart.push({ name: itemName, price: itemPrice });

    // Сохраняем обновленную корзину в локальное хранилище
    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();


}

function loadCart() {
    var cartItems = document.getElementById("cart-items");
    var cartTotal = document.getElementById("cart-total");

    // Получаем корзину из локального хранилища
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Заполняем корзину товарами из локального хранилища
    cart.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item.name + " - " + item.price + " руб.";
        cartItems.appendChild(li);
    });

    // Обновляем общую стоимость корзины
    var total = cart.reduce(function(acc, item) {
        return acc + item.price;
    }, 0);
    cartTotal.textContent = total.toFixed(2);



}

var clearCartBtn = document.getElementById("clear-cart-btn");
clearCartBtn.addEventListener("click", function() {
    // Очищаем корзину в локальном хранилище
    localStorage.removeItem("cart");

    // Очищаем корзину в DOM
    var cartItems = document.getElementById("cart-items");
    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }

    // Сбрасываем общую стоимость корзины
    var cartTotal = document.getElementById("cart-total");
    cartTotal.textContent = "0.00";

    // Обновляем отображение корзины
    renderCart();
});



// Добавляем обработчик кнопки "Оформить заказ"
var checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", function() {
    var modal = document.getElementById("checkout-modal");
    modal.style.display = "block";

    // Добавляем обработчик кнопки закрытия модального окна
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Добавляем обработчик отправки формы
    var checkoutForm = document.getElementById("checkout-form");
    checkoutForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Получаем данные из формы
        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;
        var phone = document.getElementById("phone").value;

        // Выводим сообщение о принятии заявки в работу
        alert("Ваша заявка принята в работу");
        setTimeout(function() {
            modal.remove();
        }, 2000)
        // Очищаем корзину и закрываем модальное окно
        clearCart();
        modal.style.display = "none";
    });
});



window.onload = loadCart;


// Получаем кнопки "Плиткой" и "Списком"
const tileButton = document.querySelector('.view-tile');
const listButton = document.querySelector('.view-list');

// Получаем контейнер с товарами
const productsContainer = document.querySelector('.products-container');

// Обработчик клика на кнопке "Плиткой"
tileButton.addEventListener('click', function() {
    // Применяем стили для отображения товаров в виде плитки
    productsContainer.classList.remove('list-view');
    productsContainer.classList.add('tile-view');

    // Выделяем активную кнопку
    tileButton.classList.add('active');
    listButton.classList.remove('active');
});

// Обработчик клика на кнопке "Списком"
listButton.addEventListener('click', function() {
    // Применяем стили для отображения товаров в виде списка
    productsContainer.classList.remove('tile-view');
    productsContainer.classList.add('list-view');

    // Выделяем активную кнопку
    listButton.classList.add('active');
    tileButton.classList.remove('active');
});





function saveCartToJSON() {
    // Получаем корзину из локального хранилища
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Преобразуем объект корзины в JSON-строку
    var cartJSON = JSON.stringify(cart);

    // Создаем ссылку с атрибутом 'download' и именем файла
    var link = document.createElement('a');
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cartJSON));
    link.setAttribute('download', 'cart.json');

    // Скрываем ссылку и добавляем ее в DOM
    link.style.display = 'none';
    document.body.appendChild(link);

    // Кликаем по ссылке, чтобы начать скачивание файла
    link.click();

    // Удаляем ссылку из DOM
    document.body.removeChild(link);
}



var saveCartBtn = document.getElementById("save-cart-btn");
saveCartBtn.addEventListener("click", saveCartToJSON);

