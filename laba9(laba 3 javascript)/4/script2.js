function simulateColors() {
    var n = 1000000; // количество итераций симуляции
    var countRed = 0; // счетчик красных значений
    var maxRedStreak = 0; // максимальная последовательность красных значений
    var currentRedStreak = 0; // текущая последовательность красных значений

    // Запуск симуляции
    for (var i = 0; i < n; i++) {
        var color = Math.floor(Math.random() * 3); // генерация случайного значения (0 - красный, 1 - черный, 2 - белый)

        if (color === 0) {
            countRed++;
            currentRedStreak++;
            if (currentRedStreak > maxRedStreak) {
                maxRedStreak = currentRedStreak;
            }
        } else {
            currentRedStreak = 0;
        }
    }

    // Вывод результатов на страницу
    document.getElementById('result').innerHTML = "Всего красных значений: " + countRed +
        "<br>Максимальная последовательность красных значений: " + maxRedStreak;
}