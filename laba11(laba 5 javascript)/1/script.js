class RandomNumberArray {
    constructor() {
        this.arr = [];
        this.sum = 0;
        this.count = 0;
    }

    generate() {
        for (var i = 0; i < 15; i++) {
            this.arr[i] = Math.floor(Math.random() * 41) - 10;
            if (this.arr[i] > 0) {
                this.sum += this.arr[i];
                this.count++;
            }
        }
    }

    calculateAverage() {
        var avg = this.count === 0 ? 0 : this.sum / this.count;
        document.getElementById('result').innerHTML = "Массив: " + this.arr.join(', ') + "<br>Среднее позитивных чисел массива: " + avg;
    }

    run() {
        this.generate();
        this.calculateAverage();
    }
}

