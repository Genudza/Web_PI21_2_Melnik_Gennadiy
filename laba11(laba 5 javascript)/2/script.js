class ArrayModifier {
    constructor() {
        this.arr = [];
        this.n = 15;
    }

    generateArray() {
        for (var i = 0; i < this.n; i++) {
            this.arr[i] = Math.floor(Math.random() * 41) - 10;
        }
    }

    replaceNegatives() {
        for (var i = 0; i < this.n; i++) {
            if (this.arr[i] < 0) {
                this.arr[i] *= this.arr[i];
            }
        }
    }

    displayArray(id, header) {
        var html = `<h2>${header}</h2><table class="table">`;
        for (var i = 0; i < this.n; i += 2) {
            html += `<tr><td>${this.arr[i]}</td><td>${this.arr[i+1] !== undefined ? this.arr[i+1] : ''}</td></tr>`;
        }
        html += '</table>';
        document.getElementById(id).innerHTML = html;
    }

    run() {
        this.generateArray();
        this.displayArray('original', 'Исходный массив');
        this.replaceNegatives();
        this.displayArray('result', 'Обновленный массив');
    }
}



