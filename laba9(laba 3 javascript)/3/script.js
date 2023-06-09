function calculateValues() {
    var arr = [];
    var n = 15; // задаем количество элементов в массиве

    var sumPositive = 0, sumNegative = 0, countPositive = 0, countNegative = 0, countZero = 0;

    // Генерация массива из n случайных чисел в диапазоне от -10 до 10
    for (var i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 21) - 10;

        // Подсчет суммы и количества положительных и отрицательных чисел, а также нулей
        if (arr[i] > 0) {
            sumPositive += arr[i];
            countPositive++;
        } else if (arr[i] < 0) {
            sumNegative += arr[i];
            countNegative++;
        } else {
            countZero++;
        }
    }

    var avgPositive = sumPositive / countPositive; // среднее арифметическое положительных чисел
    var avgNegative = sumNegative / countNegative; // среднее арифметическое отрицательных чисел

    // Вывод результатов на страницу
    document.getElementById('result').innerHTML = "Массив: " + arr.join(', ') +
        "<br>Среднее арифметическое положительных чисел: " + avgPositive +
        "<br>Среднее арифметическое отрицательных чисел: " + avgNegative +
        "<br>Количество нулей: " + countZero;
}
