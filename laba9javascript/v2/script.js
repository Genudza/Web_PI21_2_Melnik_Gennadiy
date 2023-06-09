// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        // Сохраняем логин и пароль в локальном хранилище
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Вас зарегистрировали\nID=' + username + '\nPassword=' + password);
    } else {
        alert('Ошибка при вводе пароля\nПопробуйте еще раз');
    }
});

// Проверяем наличие сохраненных логина и пароля при загрузке страницы
window.addEventListener('load', function() {
    var savedUsername = localStorage.getItem('username');
    var savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        // Устанавливаем сохраненные значения в поля формы
        document.getElementById('username').value = savedUsername;
        document.getElementById('password').value = savedPassword;
        document.getElementById('confirmPassword').value = savedPassword;
    }
});

