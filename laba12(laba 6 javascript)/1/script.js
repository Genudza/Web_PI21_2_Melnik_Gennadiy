let RandomNumberArray = () => {
    let arr = [];
    let sum = 0;
    let count = 0;

    let generate = () => {
        for (var i = 0; i < 15; i++) {
            arr[i] = Math.floor(Math.random() * 41) - 10;
            if (arr[i] > 0) {
                sum += arr[i];
                count++;
            }
        }
    };

    let calculateAverage = () => {
        var avg = count === 0 ? 0 : sum / count;
        document.getElementById('result').innerHTML = "Массив: " + arr.join(', ') + "<br>Среднее положительных чисел массива: " + avg;
    };

    let run = () => {
        generate();
        calculateAverage();
    };

    return { run: run };
};




