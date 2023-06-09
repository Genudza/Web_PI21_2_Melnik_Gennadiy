document.addEventListener('DOMContentLoaded', getData);

function getData() {
    fetch('https://64819ce429fa1c5c5031bed8.mockapi.io/1')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(user => user.age >= 18);

            const mappedData = filteredData.map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    age: user.age,
                    city: user.city
                };
            });

            renderTable(mappedData);
        })
        .catch(error => {
            console.log('Ошибка при получении данных:', error);
        });
}

function renderTable(data) {
    const tableBody = document.querySelector('#data-table tbody');

    data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.city}</td>
    `;

        tableBody.appendChild(row);
    });
}

function processSymbol(symbol) {
    switch (symbol) {
        case Symbol.iterator:
            console.log('Обработка Symbol.iterator');
            break;
        case Symbol.for('custom'):
            console.log('Обработка Symbol.for("custom")');
            break;
        default:
            console.log('Неизвестный символ');
    }
}

const iteratorSymbol = Symbol.iterator;
processSymbol(iteratorSymbol);

const customSymbol = Symbol.for('custom');
processSymbol(customSymbol);
