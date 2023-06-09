class ArrayCalculator {
    constructor() {
        this.arr = [];
        this.n = 15;
        this.sumPositive = 0;
        this.sumNegative = 0;
        this.countPositive = 0;
        this.countNegative = 0;
        this.countZero = 0;
    }

    generateArray() {
        for (var i = 0; i < this.n; i++) {
            this.arr[i] = Math.floor(Math.random() * 21) - 10;

            if (this.arr[i] > 0) {
                this.sumPositive += this.arr[i];
                this.countPositive++;
            } else if (this.arr[i] < 0) {
                this.sumNegative += this.arr[i];
                this.countNegative++;
            } else {
                this.countZero++;
            }
        }
    }

    calculateValues() {
        var avgPositive = this.countPositive === 0 ? 0 : this.sumPositive / this.countPositive;
        var avgNegative = this.countNegative === 0 ? 0 : this.sumNegative / this.countNegative;

        document.getElementById('result').innerHTML = "Массив: " + this.arr.join(', ') +
            "<br>Среднее арифметическое положительных чисел: " + avgPositive +
            "<br>Среднее арифметическое отрицательных чисел: " + avgNegative +
            "<br>Количество нулей: " + this.countZero;
    }

    run() {
        this.generateArray();
        this.calculateValues();
    }
}

