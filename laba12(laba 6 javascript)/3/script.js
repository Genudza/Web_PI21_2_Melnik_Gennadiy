const ArrayCalculator = () => {
    let arr = [];
    const n = 15;
    let sumPositive = 0;
    let sumNegative = 0;
    let countPositive = 0;
    let countNegative = 0;
    let countZero = 0;

    const generateArray = () => {
        for (let i = 0; i < n; i++) {
            arr[i] = Math.floor(Math.random() * 21) - 10;

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
    };

    const calculateValues = () => {
        let avgPositive = countPositive === 0 ? 0 : sumPositive / countPositive;
        let avgNegative = countNegative === 0 ? 0 : sumNegative / countNegative;

        document.getElementById('result').innerHTML = "Массив: " + arr.join(', ') +
            "<br>Среднее арифметическое положительных чисел: " + avgPositive +
            "<br>Среднее арифметическое отрицательных чисел: " + avgNegative +
            "<br>Количество нулей: " + countZero;
    };

    const run = () => {
        generateArray();
        calculateValues();
    };

    return { run };
};

