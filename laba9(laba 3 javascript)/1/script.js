function calculateAverage() {
    var arr = [];
    var sum = 0;
    var count = 0;

    for (var i = 0; i < 15; i++) {
        arr[i] = Math.floor(Math.random() * 41) - 10; // Генерируем случайные числа в диапазоне [-10, 30]
        if (arr[i] > 0) {
            sum += arr[i];
            count++;
        }
    }

    var avg = sum / count;
    document.getElementById('result').innerHTML = "Массив: " + arr.join(', ') + "<br>Среднее позитивных чисел массива: " + avg;
}
