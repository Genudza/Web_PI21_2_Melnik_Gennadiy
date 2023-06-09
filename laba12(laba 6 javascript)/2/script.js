let ArrayModifier = () => {
    let arr = [];
    let n = 15;

    let generateArray = () => {
        for (let i = 0; i < n; i++) {
            arr[i] = Math.floor(Math.random() * 41) - 10;
        }
    };

    let replaceNegatives = () => {
        for (let i = 0; i < n; i++) {
            if (arr[i] < 0) {
                arr[i] *= arr[i];
            }
        }
    };

    let displayArray = (id, header) => {
        let html = `<h2>${header}</h2><table class="table">`;
        for (let i = 0; i < n; i += 2) {
            html += `<tr><td>${arr[i]}</td><td>${arr[i+1] !== undefined ? arr[i+1] : ''}</td></tr>`;
        }
        html += '</table>';
        document.getElementById(id).innerHTML = html;
    };

    let run = () => {
        generateArray();
        displayArray('original', 'Исходный массив');
        replaceNegatives();
        displayArray('result', 'Обновленный массив');
    };

    return { run: run };
};




