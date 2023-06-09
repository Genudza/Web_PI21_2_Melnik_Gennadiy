function replaceNegatives() {
    var arr = [];
    var n = 15; // задаем количество элементов в массиве

    // Генерация массива из n случайных чисел в диапазоне от -10 до 30
    for (var i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 41) - 10;
    }

    // Вывод исходного массива на страницу в виде таблицы
    var html = '<h2>Исходный массив</h2><table class="table">';
    for (var i = 0; i < n; i += 2) {
        html += '<tr><td>' + arr[i] + '</td><td>' + (arr[i+1] !== undefined ? arr[i+1] : '') + '</td></tr>';
    }
    html += '</table>';
    document.getElementById('original').innerHTML = html;

    // Замена отрицательных чисел на их квадраты
    for (var i = 0; i < n; i++) {
        if (arr[i] < 0) {
            arr[i] *= arr[i];
        }
    }

    // Вывод обновленного массива на страницу в виде таблицы
    html = '<h2>Обновленный массив</h2><table class="table">';
    for (var i = 0; i < n; i += 2) {
        html += '<tr><td>' + arr[i] + '</td><td>' + (arr[i+1] !== undefined ? arr[i+1] : '') + '</td></tr>';
    }
    html += '</table>';
    document.getElementById('result').innerHTML = html;
}


