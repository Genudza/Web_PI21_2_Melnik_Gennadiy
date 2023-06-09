document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Получаем сохраненные логин и пароль из локального хранилища
    var savedUsername = localStorage.getItem('username');
    var savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
        // Вход успешен, перенаправляем на главную страницу
        window.location.href = 'good.html';
    } else {
        // Выводим сообщение об ошибке
        document.getElementById('errorMessage').style.display = 'block';
    }
});

